import { Hono } from "hono";

const router = new Hono();

router.get("/_health", (ctx) => {
  return ctx.text("healthy");
});

export { router as healthRouter };
