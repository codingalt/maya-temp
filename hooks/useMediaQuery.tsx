"use client";

import { useState, useEffect } from "react";

/**
 * A safe version of media query hook that works with SSR
 * @param query The media query to check
 * @param defaultValue Default value to use during SSR
 * @returns Whether the media query matches
 */
export function useMediaQuerySafe(
  query: string,
  defaultValue = false
): boolean {
  const [matches, setMatches] = useState(defaultValue);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Create the media query list only on the client
    const mediaQuery = window.matchMedia(query);

    // Set the initial value
    setMatches(mediaQuery.matches);

    // Define the change handler
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add the event listener
    mediaQuery.addEventListener("change", handleChange);

    // Clean up
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  // During SSR and first render, return the default value
  // After hydration, return the actual match state
  return isClient ? matches : defaultValue;
}
