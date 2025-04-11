"use client";

import { useEffect } from "react";

/**
 * Custom hook to apply additional styling to the calendar
 * This is a workaround for when direct CSS isn't enough
 */
export const useCustomCalendarStyles = () => {
  useEffect(() => {
    // Function to apply styles to calendar elements
    const applyCustomStyles = () => {
      // Fix spacing between cells
      const tables = document.querySelectorAll(".fc-scrollgrid-sync-table");
      tables.forEach((table) => {
        if (table instanceof HTMLElement) {
          table.style.borderCollapse = "separate";
          table.style.borderSpacing = "8px";
        }
      });

      // Ensure ".more" links stay inside cell boundaries
      const moreLinks = document.querySelectorAll(".fc-daygrid-more-link");
      moreLinks.forEach((link) => {
        if (link instanceof HTMLElement) {
          const cell = link.closest(".fc-daygrid-day-frame");
          if (cell instanceof HTMLElement) {
            link.style.position = "absolute";
            link.style.bottom = "8px";
            link.style.left = "8px";
          }
        }
      });

      // Make sure event bars have proper styling
      const events = document.querySelectorAll(".fc-daygrid-event");
      events.forEach((event) => {
        if (event instanceof HTMLElement) {
          if (event.classList.contains("fc-daygrid-block-event")) {
            event.style.backgroundColor = "#f97316";
            event.style.height = "6px";
            event.style.borderRadius = "3px";

            // Hide event text for clean bars
            const eventTexts = event.querySelectorAll(
              ".fc-event-title, .fc-event-time"
            );
            eventTexts.forEach((text) => {
              if (text instanceof HTMLElement) {
                text.style.display = "none";
              }
            });
          }
          // Dot events
          else if (event.classList.contains("fc-daygrid-dot-event")) {
            const dot = document.createElement("span");
            dot.className = "event-dot";
            dot.style.display = "inline-block";
            dot.style.width = "6px";
            dot.style.height = "6px";
            dot.style.backgroundColor = "#f97316";
            dot.style.borderRadius = "50%";
            dot.style.marginRight = "4px";

            // Only add if not already there
            if (!event.querySelector(".event-dot")) {
              event.prepend(dot);
            }

            // Hide event text for clean dots
            const eventTexts = event.querySelectorAll(".fc-event-title");
            eventTexts.forEach((text) => {
              if (text instanceof HTMLElement) {
                text.style.display = "none";
              }
            });
          }
        }
      });
    };

    // Apply styles immediately
    applyCustomStyles();

    // Apply styles when view changes
    const observer = new MutationObserver(() => {
      applyCustomStyles();
    });

    // Observe the entire calendar container
    const calendarElement = document.querySelector(".calendar-wrapper");
    if (calendarElement) {
      observer.observe(calendarElement, {
        childList: true,
        subtree: true,
      });
    }

    // Clean up observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);
};
