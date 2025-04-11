"use client";

import { useContext, useCallback, useEffect } from "react";
import Calendar from "./Calendar";
import { CalendarContext } from "./layout";
import { getDateFromUrl } from "@/utils/urlUtils";
import { format } from "date-fns";

// Define the event type
interface Event {
  id: string;
  title: string;
  description?: string;
  textColor: string;
  allDay: boolean;
  start: Date;
  end: Date;
}

const sampleEvents: Event[] = [
  {
    id: "1",
    title: "Meeting with Team",
    description: "Discuss project progress",
    textColor: "#ffffff",
    allDay: false,
    start: new Date(2025, 3, 13, 10, 0),
    end: new Date(2025, 3, 13, 12, 0),
  },
  {
    id: "2",
    title: "Lunch with Client",
    description: "Discuss new requirements",
    textColor: "#ffffff",
    allDay: false,
    start: new Date(2025, 3, 9, 12, 30),
    end: new Date(2025, 3, 9, 14, 0),
  },
  {
    id: "3",
    title: "Lunch with Client",
    description: "Discuss new requirements",
    textColor: "#ffffff",
    allDay: false,
    start: new Date(2025, 3, 9, 12, 30),
    end: new Date(2025, 3, 9, 14, 0),
  },
  {
    id: "4",
    title: "Lunch with Client",
    description: "Discuss new requirements",
    textColor: "#ffffff",
    allDay: false,
    start: new Date(2025, 3, 9, 12, 30),
    end: new Date(2025, 3, 9, 14, 0),
  },
];

export default function EventsPage() {
  const { setSelectedDate, setSelectedEvents } = useContext(CalendarContext);

  // Helper function to get events for a specific date
  const getEventsForDate = (date: Date) => {
    const dateString = format(date, "yyyy-MM-dd");
    return sampleEvents.filter((event) => {
      const eventDateStr = format(new Date(event.start), "yyyy-MM-dd");
      return eventDateStr === dateString;
    });
  };

  // Check for date in URL on first render and update context directly
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlDate = getDateFromUrl();
      if (urlDate) {
        // Update the context date
        setSelectedDate(urlDate);

        // IMPORTANT: Filter and set the events for this date immediately
        const dateEvents = getEventsForDate(urlDate);
        setSelectedEvents(dateEvents);
      }
    }
  }, [setSelectedDate, setSelectedEvents]);

  // Handler for day selection from calendar
  const handleDaySelect = useCallback(
    (date: Date, events: Event[]) => {
      setSelectedDate(date);
      setSelectedEvents(events);
    },
    [setSelectedDate, setSelectedEvents]
  );

  return (
    <div className="h-full flex flex-col overflow-y-auto lg:overflow-y-hidden">
      <div className="flex-1">
        <Calendar onDaySelect={handleDaySelect} />
      </div>
    </div>
  );
}
