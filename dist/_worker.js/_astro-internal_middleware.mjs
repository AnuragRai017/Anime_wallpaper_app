globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_ByHV7JiL.mjs';
import './chunks/astro/server_DPP3diHq.mjs';
import { s as sequence } from './chunks/index_DCROAYxM.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
