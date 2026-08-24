import React, { useEffect, useState } from "react";

/**
 * Minimal History-API router.
 *
 * The site is a single bundle, so every page is reachable without a reload while
 * still exposing real URLs (/profile, /quality, ...) that can be linked, shared,
 * and opened in a new tab.
 */

const ROUTE_CHANGE = "sb:routechange";

export function navigate(to: string, options?: { replace?: boolean }) {
  const target = new URL(to, window.location.origin);
  const next = target.pathname + target.search + target.hash;
  const current = window.location.pathname + window.location.search + window.location.hash;

  if (next === current) {
    scrollForLocation();
    return;
  }

  if (options?.replace) {
    window.history.replaceState({}, "", next);
  } else {
    window.history.pushState({}, "", next);
  }
  window.dispatchEvent(new Event(ROUTE_CHANGE));
}

export function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const sync = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", sync);
    window.addEventListener(ROUTE_CHANGE, sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener(ROUTE_CHANGE, sync);
    };
  }, []);

  return pathname;
}

/**
 * After a route change, land on the hash target when the URL carries one and at
 * the top of the document otherwise. Runs on the next frame so the incoming page
 * has been committed to the DOM before we look for the anchor.
 */
export function scrollForLocation() {
  const { hash } = window.location;
  requestAnimationFrame(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  });
}

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  onNavigate?: () => void;
};

/**
 * Renders a real anchor so middle-click, cmd-click, and "copy link address"
 * behave the way visitors expect; only plain left-clicks are handled in-app.
 */
export function Link({ to, onNavigate, onClick, children, ...rest }: LinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      rest.target === "_blank"
    ) {
      return;
    }
    event.preventDefault();
    onNavigate?.();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
