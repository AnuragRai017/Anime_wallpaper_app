import axios from 'axios';

// Create an axios instance with a base URL that works in both dev and prod
const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV 
    ? 'http://localhost:4321'
    : 'https://wallhaven.cc',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// Remove redundant BASE_DOMAIN definition
const API_BASE = import.meta.env.DEV 
  ? '/api/wallhaven'
  : '/api/v1';

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
  // Update the endpoint paths to use API_BASE
  async getWallpaper(id: string): Promise<WallpaperData> {
    try {
      const response = await axiosInstance.get<WallpaperResponse>(`${API_BASE}/w/${id}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching wallpaper:', error);
      throw error;
    }
  },

  // Search for wallpapers
  async searchWallpapers(params: SearchParams = {}): Promise<SearchResponse> {
    try {
      const response = await axiosInstance.get<SearchResponse>(`${API_BASE}/search`, {
        params
      });
      return response.data;
    } catch (error) {
      console.error('Error searching wallpapers:', error);
      throw error;
    }
  },

  // Get tag information
  async getTagInfo(tagId: number): Promise<any> {
    try {
      const response = await axiosInstance.get(`/api/wallhaven/tag/${tagId}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching tag info:', error);
      throw error;
    }
  }
}