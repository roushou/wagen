import { env } from "hono/adapter";
import { createMiddleware } from "hono/factory";
import { createRoute } from "honox/factory";
import { createFluxClient } from "../../lib/flux";
import type { Env } from "../../types";

const fluxMiddleware = createMiddleware(async (ctx, next) => {
  const envVars = env<Env>(ctx);

  const flux = createFluxClient({
    apiKey: envVars.FLUX_API_KEY,
    baseUrl: envVars.FLUX_BASE_URL,
  });

  ctx.set("flux", flux);

  await next();
});

export default createRoute(fluxMiddleware);
