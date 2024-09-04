import { Hono } from "hono";

const app = new Hono();

app.get("/_health", (ctx) => {
  return ctx.text("healthy");
});

export default {
  port: 8080,
  fetch: app.fetch,
};
