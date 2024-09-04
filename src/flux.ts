export type FluxClient = {
  generate: (payload: GeneratePayload) => Promise<Image>;
};

export type FluxClientConfig = {
  apiKey: string;
  baseUrl: string;
};

export function createFluxClient(config: FluxClientConfig): FluxClient {
  async function generate(payload: GeneratePayload): Promise<Image> {
    const res = await fetch(`${config.baseUrl}/flux-schnell/text-to-image`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error("failed to generate image");
    }
    return res.json();
  }

  return {
    generate,
  };
}

export type Image = {
  url: string;
  seed: number;
  cost: number;
};

export type GeneratePayload = {
  /**
   * Text input required to guide the image generation.
   */
  prompt: string;
  /**
   * The width of the generated image in pixels.
   * Defaults to 1024
   */
  width?: number;
  /**
   * The height of the generated image in pixels.
   * Defaults to 1024
   * */
  height?: number;
  /** The number of denoising steps. More steps usually can produce higher quality images, but take more time to generate. Defaults to 4.
   */
  steps?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Makes generation deterministic. Using the same seed and set of parameters will produce identical image each time.
   */
  seed?: number;
  /**
   * File format of the generated image.
   */
  output_format?: string;
  /**
   * The format in which the generated images are returned. Must be one of url or b64.
   * URLs are only valid for 1 hour after the image has been generated.
   */
  response_format?: "url" | "b64";
};
