import { type FC, useState } from "hono/jsx";

export const HomePage: FC = () => {
  const [prompt, setPrompt] = useState("hello");
  return (
    <main class="flex justify-center px-12 pt-6">
      <div class="flex w-[512px] flex-col">
        <h1 class="text-center font-semi text-3xl">Welcome to Wagen</h1>
        <div class="mt-6 flex justify-center p-2 border border-gray-300 bg-gray-200 bg-opacity-10 rounded">
          <img
            width="512"
            height="512"
            src="data:image/png;base64, "
            alt="Generated image"
            class="border border-gray-300 rounded"
          />
        </div>
        <div class="mt-4 flex flex-col rounded border border-gray-300 bg-gray-500 bg-opacity-10 p-2">
          <textarea
            value={prompt}
            rows={3}
            onChange={(event) => {
              setPrompt(event.target.value);
            }}
            class="w-full resize-none rounded border border-gray-300"
          />
          <button type="button" class="mt-4 rounded bg-black p-2 text-white">
            Generate
          </button>
          <div class="mt-2 text-center text-gray-600 text-sm">
            0.05 USDC per image
          </div>
        </div>
      </div>
    </main>
  );
};
