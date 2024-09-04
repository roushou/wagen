import type { FC, PropsWithChildren } from "hono/jsx";

export const Layout: FC = (props: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/static/style.css" />
      </head>
      <body>
        <TopBar />
        {props.children}
      </body>
    </html>
  );
};

const TopBar: FC = () => {
  return (
    <div class="flex h-12 items-center border-b border-b-gray-200 px-12">
      <div class="font-medium">Wagen</div>
    </div>
  );
};
