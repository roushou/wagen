import { createRoute } from "honox/factory";
import Prompt from "../islands/prompt";

function HomePage() {
  return (
    <main class="flex justify-center px-12 pt-6">
      <div class="flex w-[512px] flex-col">
        <h1 class="text-center font-semi text-3xl">Welcome to Wagen</h1>
        <div class="mt-6 flex justify-center rounded border border-gray-300 bg-gray-200 bg-opacity-10 p-2">
          <img
            width="512"
            height="512"
            src="data:image/png;base64, "
            alt="Generated asset"
            class="rounded border border-gray-300"
          />
        </div>
        <div class="mt-4 flex flex-col rounded border border-gray-300 bg-gray-500 bg-opacity-10 p-2">
          <Prompt />
          <div class="mt-2 text-center text-gray-600 text-sm">
            0.05 USDC per image
          </div>
        </div>
      </div>
    </main>
  );
}

export default createRoute((ctx) => {
  return ctx.render(<HomePage />);
});
