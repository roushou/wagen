import { zValidator } from "@hono/zod-validator";
import { HTTPException } from "hono/http-exception";
import { createRoute } from "honox/factory";
import { z } from "zod";

const schema = z.object({
  prompt: z.string(),
});

export const POST = createRoute(zValidator("json", schema), async (ctx) => {
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
