// Thank you Onyx Cheyne for your code.

export function smoothScrollToHash(href, options = {}) {
  if (typeof window === "undefined" || typeof document === "undefined") return false;
  if (!href || !href.startsWith("#")) return false;

  const id = decodeURIComponent(href.slice(1));
  const element = document.getElementById(id);
  if (!element) return false;

  element.scrollIntoView({
    behavior: options.behavior ?? "smooth",
    block: options.block ?? "start",
  });

  if (options.updateHistory !== false) {
    // Update URL hash without triggering a scroll
    window.history.pushState(null, "", `#${id}`);
  }

  return true;
}
