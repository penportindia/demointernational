import config from "./schoolConfig.js";

export function pageMetadata(pathname) {
  const route = pathname === "/index.html" ? "/" : pathname;
  const page = config.seo[route];
  const provider = config.footer.partnerBranding;
  const brand = `${provider.primaryName} ${provider.secondaryName}`;
  const siteUrl = config.search.siteUrl.trim();
  const base = siteUrl
    ? new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`)
    : null;
  if (base && (!/^https?:$/.test(base.protocol) || base.search || base.hash)) {
    throw new Error(
      "search.siteUrl must be an HTTP or HTTPS website URL without a query or fragment.",
    );
  }
  const absolute = (path) =>
    base ? new URL(path.replace(/^\//, ""), base).href : undefined;
  const title = page
    ? `${page.title}${route === "/" ? "" : ` | ${config.search.titleSuffix}`}`
    : `Page not found | ${config.search.titleSuffix}`;
  const description = page?.description || config.search.brandDescription;
  const canonical = page ? absolute(route === "/" ? "" : route) : undefined;
  const providerData = { "@type": "Organization", name: brand };
  const website = {
    "@type": "WebSite",
    name: config.search.siteName,
    description: config.search.brandDescription,
    inLanguage: config.search.language,
    creator: providerData,
    ...(base ? { "@id": `${base.href}#website`, url: base.href } : {}),
  };
  const webpage = {
    "@type": "WebPage",
    name: title,
    description,
    inLanguage: config.search.language,
    ...(canonical
      ? {
          url: canonical,
          "@id": `${canonical}#webpage`,
          isPartOf: { "@id": `${base.href}#website` },
        }
      : {}),
  };
  return {
    title,
    description,
    canonical,
    robots: page ? "index, follow, max-image-preview:large" : "noindex, follow",
    image: absolute(config.search.socialImage),
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [website, webpage],
    },
    brand,
  };
}

export function updatePageMetadata(pathname) {
  const metadata = pageMetadata(pathname);
  document.title = metadata.title;
  document.documentElement.lang = config.search.language;
  function meta(attribute, key, value) {
    let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
    if (!value) {
      element?.remove();
      return;
    }
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, key);
      document.head.appendChild(element);
    }
    element.content = value;
  }
  meta("name", "description", metadata.description);
  meta("name", "robots", metadata.robots);
  meta("name", "author", metadata.brand);
  meta("name", "theme-color", config.search.themeColor);
  for (const [key, value] of Object.entries({
    "og:type": "website",
    "og:site_name": config.search.siteName,
    "og:title": metadata.title,
    "og:description": metadata.description,
    "og:locale": config.search.locale,
    "og:url": metadata.canonical,
    "og:image": metadata.image,
    "og:image:alt": metadata.image ? config.search.socialImageAlt : undefined,
  }))
    meta("property", key, value);
  for (const [key, value] of Object.entries({
    "twitter:card": metadata.image ? "summary_large_image" : "summary",
    "twitter:title": metadata.title,
    "twitter:description": metadata.description,
    "twitter:image": metadata.image,
  }))
    meta("name", key, value);
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (metadata.canonical) {
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = metadata.canonical;
  } else canonical?.remove();
  let structured = document.getElementById("structured-data");
  if (!structured) {
    structured = document.createElement("script");
    structured.id = "structured-data";
    structured.type = "application/ld+json";
    document.head.appendChild(structured);
  }
  structured.textContent = JSON.stringify(metadata.structuredData).replace(
    /</g,
    "\\u003c",
  );
}
