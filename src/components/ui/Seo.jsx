import { useEffect } from "react";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let node = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attr, key);
    document.head.appendChild(node);
  }
  node.setAttribute("content", content);
}

function Seo({ title, description, path = "/" }) {
  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("name", "twitter:card", "summary_large_image");
    const url = `${window.location.origin}${path}`;
    upsertMeta("property", "og:url", url);
  }, [title, description, path]);

  return null;
}

export default Seo;
