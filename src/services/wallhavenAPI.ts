import axios from 'axios';

// Set up axios instance to use our own API endpoint as proxy
const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV 
    ? 'http://localhost:4321'
    : 'https://kibe-wall-14.babuuroy6565.workers.dev',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 15000
});

const API_BASE = '/api/wallhaven';

// Enhanced error interceptor
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API request failed:', error.message || 'Unknown error');
    
    // Always return a properly structured response to prevent UI crashes
    return Promise.resolve({
      data: {
        data: [],
        meta: {
          current_page: 1,
          last_page: 1,
          per_page: 24,
          total: 0
        }
      }
    });
  }
);

export interface WallpaperData {
  id: string;
  url: string;
  short_url: string;
  views: number;
  favorites: number;
  source: string;
  purity: 'sfw' | 'sketchy' | 'nsfw';
  category: 'general' | 'anime' | 'people';
  dimension_x: number;
  dimension_y: number;
  resolution: string;
  ratio: string;
  file_size: number;
  file_type: string;
  created_at: string;
  colors: string[];
  path: string;
  thumbs: {
    large: string;
    original: string;
    small: string;
  };
  tags?: Array<{
    id: number;
    name: string;
    alias?: string;
    category_id: number;
    category: string;
    purity: string;
    created_at: string;
  }>;
}

export interface WallpaperResponse {
  data: WallpaperData;
  error?: boolean;
  message?: string;
}

export interface SearchResponse {
  data: WallpaperData[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    query?: string | null | { id: number; tag: string };
    seed?: string | null;
  };
}

export interface SearchParams {
  q?: string;
  categories?: string;
  purity?: string;
  sorting?: 'date_added' | 'relevance' | 'random' | 'views' | 'favorites' | 'toplist';
  order?: 'desc' | 'asc';
  topRange?: '1d' | '3d' | '1w' | '1M' | '3M' | '6M' | '1y';
  atleast?: string;
  resolutions?: string;
  ratios?: string;
  colors?: string;
  page?: number;
  seed?: string;
}

export const wallhavenAPI = {
  async getWallpaper(id: string): Promise<WallpaperData> {
    try {
      const response = await axiosInstance.get<WallpaperResponse>(`${API_BASE}/w/${id}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching wallpaper:', error);
      return getPlaceholderWallpaper(id) as WallpaperData;
    }
  },

  async searchWallpapers(params: SearchParams = {}): Promise<SearchResponse> {
    try {
      const response = await axiosInstance.get<SearchResponse>(`${API_BASE}/search`, {
        params
      });
      
      if (!response.data || !response.data.data) {
        return {
          data: [],
          meta: {
            current_page: 1,
            last_page: 1,
            per_page: 24,
            total: 0
          }
        };
      }
      
      return response.data;
    } catch (error) {
      console.error('Error searching wallpapers:', error);
      return {
        data: [],
        meta: {
          current_page: 1,
          last_page: 1,
          per_page: 24,
          total: 0
        }
      };
    }
  }
}

// Helper function to provide fallback data
function getPlaceholderWallpaper(id: string): WallpaperData | null {
  return {
    id,
    url: '',
    short_url: '',
    views: 0,
    favorites: 0,
    source: '',
    purity: 'sfw',
    category: 'anime',
    dimension_x: 1920,
    dimension_y: 1080,
    resolution: '1920x1080',
    ratio: '16:9',
    file_size: 0,
    file_type: 'image/jpeg',
    created_at: new Date().toISOString(),
    colors: ['#000000'],
    path: '',
    thumbs: {
      large: '/assets/placeholder-image.jpg',
      original: '/assets/placeholder-image.jpg',
      small: '/assets/placeholder-image.jpg',
    }
  };
}