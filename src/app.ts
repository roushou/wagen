import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { fluxMiddleware } from "./middlewares/flux";
import type { Variables } from "./types";

const app = new Hono<{ Variables: Variables }>();

app.use(fluxMiddleware);

app.get("/_health", (ctx) => {
  return ctx.text("healthy");
});

app.post(
  "/generate",
  zValidator(
    "json",
    z.object({
      prompt: z.string(),
    }),
  ),
  async (ctx) => {
    const payload = ctx.req.valid("json");
    try {
      const image = await ctx.var.flux.generate({
        prompt: payload.prompt,
        response_format: "b64",
      });
      return ctx.json(image);
    } catch (err) {
      throw new HTTPException(500, { message: "Failed to generate image" });
    }
  },
);

const port = process.env.PORT || "8080";

export default {
  port,
  fetch: app.fetch,
};
