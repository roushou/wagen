import type { FC } from "hono/jsx";

export const TopBar: FC = () => {
  return (
    <div class="flex h-12 items-center border-b border-b-gray-200 px-12">
      <div class="font-medium">Wagen</div>
    </div>
  );
};
