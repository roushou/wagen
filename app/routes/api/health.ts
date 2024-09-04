import { Hono } from "hono";

const router = new Hono();

router.get("/", (ctx) => {
  return ctx.text("healthy");
});

export default router;
