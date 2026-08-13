import DOMPurify from "isomorphic-dompurify";

/** Tags allowed in CMS blog HTML. Scripts, iframes, forms, event handlers excluded. */
const ALLOWED_TAGS = [
  "p",
  "br",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "s",
  "sub",
  "sup",
  "h1",
  "h2",
  "h3",
  "h4",
  "ul",
  "ol",
  "li",
  "a",
  "blockquote",
  "pre",
  "code",
  "img",
  "figure",
  "figcaption",
  "hr",
  "span",
  "div",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
];

const ALLOWED_ATTR = [
  "href",
  "target",
  "rel",
  "src",
  "alt",
  "title",
  "class",
  "id",
  "width",
  "height",
  "colspan",
  "rowspan",
  "start",
];

let hooksRegistered = false;

function ensureHooks() {
  if (hooksRegistered) return;
  hooksRegistered = true;

  DOMPurify.addHook("afterSanitizeAttributes", (node) => {
    if (node.nodeName !== "A") return;

    if (node.getAttribute("target") === "_blank") {
      node.setAttribute("rel", "noopener noreferrer");
    }

    const href = node.getAttribute("href");
    if (href && /^\s*javascript:/i.test(href)) {
      node.removeAttribute("href");
    }
  });
}

/**
 * Sanitize untrusted CMS HTML before `dangerouslySetInnerHTML`.
 * Strips scripts, event handlers, and unsafe URLs.
 */
export function sanitizeBlogHtml(dirty: string): string {
  if (!dirty.trim()) return "";

  ensureHooks();

  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    ALLOW_DATA_ATTR: false,
    ALLOWED_URI_REGEXP:
      /^(?:(?:https?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  });
}
