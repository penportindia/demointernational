import fs from "node:fs/promises";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { createServer } from "vite";
import config from "./src/schoolConfig.js";
import { pageMetadata } from "./src/seo.js";

const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
const tag = (attribute, key, value) =>
  value ? `<meta ${attribute}="${key}" content="${escape(value)}" />` : "";
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { default: App } = await server.ssrLoadModule("/src/main.jsx");
  const template = await fs.readFile("dist/index.html", "utf8");
  const routes = config.navigation.map((item) => item.path);
  for (const route of routes) {
    const metadata = pageMetadata(route);
    const content = renderToString(
      React.createElement(
        StaticRouter,
        { location: route },
        React.createElement(App),
      ),
    ).replace(/(href|src)="\/(?!\/)/g, '$1="./');
    const head = [
      `<title>${escape(metadata.title)}</title>`,
      tag("name", "description", metadata.description),
      tag("name", "robots", metadata.robots),
      tag("name", "author", metadata.brand),
      tag("name", "theme-color", config.search.themeColor),
      `<link rel="icon" href=".${escape(config.identity.favicon)}" />`,
      tag("property", "og:type", "website"),
      tag("property", "og:site_name", config.search.siteName),
      tag("property", "og:title", metadata.title),
      tag("property", "og:description", metadata.description),
      tag("property", "og:locale", config.search.locale),
      tag("property", "og:url", metadata.canonical),
      tag("property", "og:image", metadata.image),
      tag(
        "property",
        "og:image:alt",
        metadata.image ? config.search.socialImageAlt : undefined,
      ),
      tag(
        "name",
        "twitter:card",
        metadata.image ? "summary_large_image" : "summary",
      ),
      tag("name", "twitter:title", metadata.title),
      tag("name", "twitter:description", metadata.description),
      tag("name", "twitter:image", metadata.image),
      metadata.canonical
        ? `<link rel="canonical" href="${escape(metadata.canonical)}" />`
        : "",
      `<script id="structured-data" type="application/ld+json">${JSON.stringify(metadata.structuredData).replace(/</g, "\\u003c")}</script>`,
    ]
      .filter(Boolean)
      .join("\n    ");
    const html = template
      .replace('lang="en"', `lang="${escape(config.search.language)}"`)
      .replace("<title>School</title>", head)
      .replace('<div id="root"></div>', `<div id="root">${content}</div>`);
    await fs.writeFile(
      `dist/${route === "/" ? "index.html" : route.slice(1)}`,
      html,
    );
  }
  const siteUrl = config.search.siteUrl.trim();
  const base = siteUrl ? (siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`) : "";
  await fs.writeFile(
    "dist/robots.txt",
    `User-agent: *\nAllow: /\n${base ? `\nSitemap: ${base}sitemap.xml\n` : ""}`,
  );
  if (base) {
    const entries = routes
      .map(
        (route) =>
          `<url><loc>${escape(pageMetadata(route).canonical)}</loc></url>`,
      )
      .join("\n");
    await fs.writeFile(
      "dist/sitemap.xml",
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
    );
  }
  console.log(
    `Prerendered ${routes.length} static pages with SEO metadata.${base ? " Sitemap generated." : " Set search.siteUrl after deployment to generate canonical URLs and sitemap."}`,
  );
} finally {
  await server.close();
}
