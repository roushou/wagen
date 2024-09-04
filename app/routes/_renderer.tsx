import { jsxRenderer } from "hono/jsx-renderer";
import { HasIslands, Link } from "honox/server";
import { TopBar } from "../islands/topbar";

export default jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wagen</title>
        <link rel="icon" href="/favicon.ico" />
        <Link href="/app/style.css" rel="stylesheet" />
        {import.meta.env.PROD ? (
          <HasIslands>
            <script type="module" src="/static/client.js" />
          </HasIslands>
        ) : (
          <script type="module" src="/app/client.ts" />
        )}
      </head>
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  );
});
