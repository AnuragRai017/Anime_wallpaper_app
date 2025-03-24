globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as axios } from '../../../chunks/index_B4FnV-YZ.mjs';
export { renderers } from '../../../renderers.mjs';

const WALLHAVEN_API_BASE = "https://wallhaven.cc/api/v1";
const API_KEY = "C9SYwMqQEVm6Bv1FseMMDKprt0NV3jsz";
const prerender = false;
const GET = async ({ params, request }) => {
  try {
    const path = params.path;
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    if (!searchParams.has("apikey")) {
      searchParams.set("apikey", API_KEY);
    }
    const response = await axios.get(`${WALLHAVEN_API_BASE}/${path}?${searchParams.toString()}`, {
      headers: {
        "Accept": "application/json"
      }
    });
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("Proxy error:", error.response?.data || error.message);
    return new Response(JSON.stringify({
      error: error.response?.data || error.message || "An error occurred while fetching data"
    }), {
      status: error.response?.status || 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
