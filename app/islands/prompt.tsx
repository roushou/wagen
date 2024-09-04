import { useState } from "hono/jsx";

export default function Prompt() {
  const [prompt, setPrompt] = useState("");

  async function generateImage() {
    const res = await fetch("/api/health");
    console.log(res);
  }

  function handleChange(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    setPrompt(target.value);
  }

  return (
    <div class="flex flex-col">
      <textarea
        value={prompt}
        name="prompt"
        rows={3}
        onChange={handleChange}
        class="w-full resize-none rounded border border-gray-300 p-2 outline-none focus:border-gray-500"
      />
      <button
        type="button"
        onClick={generateImage}
        class="mt-4 rounded bg-black p-2 text-white"
      >
        Generate
      </button>
    </div>
  );
}
