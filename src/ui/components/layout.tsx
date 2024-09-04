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
  return <div class="bg-red-500">Wagen</div>;
};
