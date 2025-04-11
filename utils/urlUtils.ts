"use client";

import { format } from "date-fns";

/**
 * Updates the URL with a date query parameter
 * @param date The date to set in the URL
 */
export const updateUrlWithDate = (date: Date) => {
  if (typeof window === "undefined") return;

  const formattedDate = format(date, "yyyy-MM-dd");
  const url = new URL(window.location.href);
  url.searchParams.set("date", formattedDate);

  // Update the URL without reloading the page
  window.history.pushState({}, "", url.toString());
};

/**
 * Gets a date from the URL query parameters
 * @returns The date from the URL or undefined if not present
 */
export const getDateFromUrl = (): Date | undefined => {
  if (typeof window === "undefined") return undefined;

  const url = new URL(window.location.href);
  const dateParam = url.searchParams.get("date");

  if (dateParam) {
    try {
      // Try to parse the date
      const parsedDate = new Date(dateParam);

      // Check if it's a valid date
      if (!isNaN(parsedDate.getTime())) {
        return parsedDate;
      }
    } catch (error) {
      console.error("Failed to parse date from URL", error);
    }
  }

  return undefined;
};
