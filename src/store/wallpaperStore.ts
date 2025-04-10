import { atom, map } from 'nanostores';
import { wallhavenAPI } from '../services/wallhavenAPI';
import type { WallpaperData, SearchParams } from '../services/wallhavenAPI';

// Store for search parameters
export const searchParams = map<SearchParams>({
  categories: '010',  // Default to anime category
  purity: '100',      // Default to SFW
  sorting: 'date_added',
  order: 'desc',
  page: 1
});

// Store for search results - now accumulates results
export const searchResults = atom<WallpaperData[]>([]);

// Store for current wallpaper being viewed
export const currentWallpaper = atom<WallpaperData | null>(null);

// Store for loading state
export const isLoading = atom<boolean>(false);

// Store for error state
export const error = atom<string | null>(null);

// Store for pagination info
export const pagination = map({
  currentPage: 1,
  totalPages: 1,
  totalItems: 0,
  hasMore: true,  // New flag to track if more results are available
  seed: null as string | null
});

// Action to search for wallpapers with infinite loading support
export async function searchWallpapers(params: SearchParams = {}, reset: boolean = false) {
  try {
    isLoading.set(true);
    error.set(null);

    // If reset is true or this is a new search (different parameters), reset the results
    if (reset) {
      searchResults.set([]);
      pagination.set({
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        hasMore: true,
        seed: null
      });
      // Reset page to 1 for new searches
      params.page = 1;
    }

    // Update search params with new parameters
    searchParams.set({
      ...searchParams.get(),
      ...params
    });

    const response = await wallhavenAPI.searchWallpapers(searchParams.get());

    // If this is a continuation of previous search, append results
    if (!reset && response.data.length > 0) {
      searchResults.set([...searchResults.get(), ...response.data]);
    } else {
      // Otherwise set new results
      searchResults.set(response.data);
    }

    // Update pagination info
    pagination.set({
      currentPage: response.meta.current_page,
      totalPages: response.meta.last_page,
      totalItems: response.meta.total,
      hasMore: response.meta.current_page < response.meta.last_page,
      seed: response.meta.seed || null
    });

    return response;
  } catch (err) {
    error.set(err instanceof Error ? err.message : 'An error occurred while searching');
    return null;
  } finally {
    isLoading.set(false);
  }
}

// Action to load more results
export async function loadMore() {
  if (isLoading.get() || !pagination.get().hasMore) return;

  const currentParams = searchParams.get();
  return searchWallpapers({
    ...currentParams,
    page: pagination.get().currentPage + 1
  });
}

// Action to fetch a specific wallpaper
export async function fetchWallpaper(id: string) {
  try {
    isLoading.set(true);
    error.set(null);
    
    const wallpaper = await wallhavenAPI.getWallpaper(id);
    currentWallpaper.set(wallpaper);
    
    return wallpaper;
  } catch (err) {
    error.set(err instanceof Error ? err.message : 'An error occurred while fetching the wallpaper');
    return null;
  } finally {
    isLoading.set(false);
  }
}

// Initialize with default search
export function initializeStore() {
  searchWallpapers({}, true);
}