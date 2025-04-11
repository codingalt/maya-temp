"use client";

import { useContext, useCallback, useEffect, useState } from "react";
import Calendar from "./Calendar";
import { CalendarContext } from "./layout";
import { getDateFromUrl } from "@/utils/urlUtils";

// Define the event type
interface Event {
  id: string;
  title: string;
  description?: string;
  color: string;
  textColor: string;
  allDay: boolean;
  start: Date;
  end: Date;
}

export default function EventsPage() {
  // Get context from layout
  const { setSelectedDate, setSelectedEvents } = useContext(CalendarContext);
  const [initialDate, setInitialDate] = useState<Date | null>(null);

  // Check for date in URL on first render
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlDate = getDateFromUrl();
      if (urlDate) {
        setInitialDate(urlDate);
        // Update context with the date from URL
        setSelectedDate(urlDate);
      }
    }
  }, [setSelectedDate]);

  // Handler for day selection from calendar
  const handleDaySelect = useCallback(
    (date: Date, events: Event[]) => {
      setSelectedDate(date);
      setSelectedEvents(events);
    },
    [setSelectedDate, setSelectedEvents]
  );

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <Calendar onDaySelect={handleDaySelect} />
      </div>
    </div>
  );
}
