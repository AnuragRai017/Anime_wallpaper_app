import type { APIRoute } from 'astro';
import axios from 'axios';

const WALLHAVEN_API_BASE = 'https://wallhaven.cc/api/v1';
const API_KEY = import.meta.env.WALLHAVEN_API_KEY || 'C9SYwMqQEVm6Bv1FseMMDKprt0NV3jsz';

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  try {
    const path = params.path;
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    
    if (!searchParams.has('apikey')) {
      searchParams.set('apikey', API_KEY);
    }

    const response = await axios.get(`${WALLHAVEN_API_BASE}/${path}?${searchParams.toString()}`, {
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
    
    return new Response(JSON.stringify({
      error: 'An error occurred while fetching data'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};