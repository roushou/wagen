import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

const router = new Hono();

const schema = z.object({
  prompt: z.string(),
});

router.post("/", zValidator("json", schema), async (ctx) => {
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
});

export default router;
