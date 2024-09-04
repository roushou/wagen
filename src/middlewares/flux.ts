import { env } from "hono/adapter";
import { createMiddleware } from "hono/factory";
import { createFluxClient } from "../flux";
import type { Env } from "../types";

export const fluxMiddleware = createMiddleware(async (ctx, next) => {
  const envVars = env<Env>(ctx);

  const flux = createFluxClient({
    apiKey: envVars.FLUX_API_KEY,
    baseUrl: envVars.FLUX_BASE_URL,
  });

  ctx.set("flux", flux);

  await next();
});
