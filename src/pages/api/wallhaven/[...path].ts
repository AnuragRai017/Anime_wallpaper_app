import type { APIRoute } from 'astro';
import axios from 'axios';

const WALLHAVEN_API_BASE = 'https://wallhaven.cc/api/v1';
const API_KEY = 'C9SYwMqQEVm6Bv1FseMMDKprt0NV3jsz';

// Configure this route for server-side rendering
export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  try {
    // Get the target path from the URL
    const path = params.path;
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    
    // Add API key if not present
    if (!searchParams.has('apikey')) {
      searchParams.set('apikey', API_KEY);
    }

    // Make the request to Wallhaven
    const response = await axios.get(`${WALLHAVEN_API_BASE}/${path}?${searchParams.toString()}`, {
      headers: {
        'Accept': 'application/json',
      }
    });

    // Return the response with appropriate headers
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  } catch (error: any) {
    console.error('Proxy error:', error.response?.data || error.message);
    
    // Return a properly formatted error response
    return new Response(JSON.stringify({
      error: error.response?.data || error.message || 'An error occurred while fetching data'
    }), {
      status: error.response?.status || 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }
};