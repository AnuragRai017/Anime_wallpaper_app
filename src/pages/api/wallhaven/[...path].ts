import type { APIRoute } from 'astro';
import axios from 'axios';

const WALLHAVEN_API_BASE = 'https://wallhaven.cc/api/v1';
const API_KEY = import.meta.env.WALLHAVEN_API_KEY || 'C9SYwMqQEVm6Bv1FseMMDKprt0NV3jsz';

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  try {
    // Handle the path parameter more robustly
    const pathSegments = params.path ? params.path.split('/') : [];
    
    // If path is empty or undefined, default to 'search'
    const endpoint = pathSegments.length > 0 ? pathSegments.join('/') : 'search';
    
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    
    if (!searchParams.has('apikey')) {
      searchParams.set('apikey', API_KEY);
    }

    // Ensure proper categories and purity are set if not provided
    if (endpoint === 'search' && !searchParams.has('categories')) {
      searchParams.set('categories', '010');  // Default to general
    }
    
    if (endpoint === 'search' && !searchParams.has('purity')) {
      searchParams.set('purity', '100');  // Default to SFW
    }
    
    console.log(`Making request to: ${WALLHAVEN_API_BASE}/${endpoint}?${searchParams.toString()}`);

    const response = await axios.get(`${WALLHAVEN_API_BASE}/${endpoint}?${searchParams.toString()}`, {
      headers: {
        'Accept': 'application/json',
      }
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600' // Add caching
      }
    });
  } catch (error: any) {
    console.error('Proxy error:', error);
    
    // More detailed error response
    const status = error.response?.status || 500;
    const errorMessage = error.response?.data?.error || error.message || 'An error occurred while fetching data';
    
    return new Response(JSON.stringify({
      error: errorMessage,
      status: status,
      path: params.path || 'root'
    }), {
      status: status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};