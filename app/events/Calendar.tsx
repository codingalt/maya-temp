"use client";

import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import timelinePlugin from "@fullcalendar/timeline";
import Toolbar from "./Toolbar";
import EventModal from "./EventModal";
import { format, isSameDay } from "date-fns";
import { useMediaQuerySafe } from "@/hooks/useMediaQuery";
import { updateUrlWithDate, getDateFromUrl } from "@/utils/urlUtils";

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

// Sample events - replace with your API call
const sampleEvents: Event[] = [
  {
    id: "1",
    title: "Meeting with Team",
    description: "Discuss project progress",
    textColor: "#ffffff",
    allDay: false,
    start: new Date(2025, 3, 12, 10, 0),
    end: new Date(2025, 3, 12, 12, 0),
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

interface CalendarProps {
  onDaySelect: (date: Date, events: Event[]) => void;
}

export default function Calendar({ onDaySelect }: CalendarProps) {
  // State hooks
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>();
  const [calendarView, setCalendarView] = useState<string>("dayGridMonth");
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<Event[]>(sampleEvents);

  const isMediumDevice = useMediaQuerySafe(
    "only screen and (max-width : 992px)",
    false
  );

  // Use a ref to track if the initial update has been sent
  const initialUpdateSent = useRef(false);
  const initialUrlCheckDone = useRef(false);

  const calendarRef = useRef<FullCalendar | null>(null);

  // Check for date in URL on first render and set selected date if present
  useEffect(() => {
    if (!initialUrlCheckDone.current && typeof window !== "undefined") {
      const urlDate = getDateFromUrl();
      if (urlDate) {
        setSelectedDate(urlDate);
        setDate(urlDate);

        // If we have a calendar reference, navigate to this date
        if (calendarRef.current) {
          const calendarApi = calendarRef.current.getApi();
          calendarApi.gotoDate(urlDate);
        }
      }
      initialUrlCheckDone.current = true;
    }
  }, []);

  // Change view based on screen size
  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      const newView = isMediumDevice ? "dayGridMonth" : "dayGridMonth"; // Keep as month view for mobile
      calendarApi.changeView(newView);
      setCalendarView(newView);
    }
  }, [isMediumDevice]);

  // Handle styling for today and selected dates
  useEffect(() => {
    if (!calendarRef.current) return;

    // This code should only run on client side
    if (typeof window === "undefined") return;

    // Use setTimeout to ensure this runs after FullCalendar has updated the DOM
    setTimeout(() => {
      try {
        const today = new Date();

        // Reset all selected-day classes first
        document.querySelectorAll(".selected-day").forEach((element) => {
          element.classList.remove("selected-day");
        });

        // Get all day cells
        const dayCells = document.querySelectorAll(".fc-daygrid-day");

        // Apply styling to the selected date
        dayCells.forEach((cell) => {
          const dateAttr = cell.getAttribute("data-date");
          if (dateAttr) {
            const cellDate = new Date(dateAttr);

            // Check if this cell is the selected date
            if (isSameDay(cellDate, selectedDate)) {
              cell.classList.add("selected-day");

              // Apply background color to the frame inside selected day
              const dayFrame = cell.querySelector(".fc-daygrid-day-frame");
              if (dayFrame) {
              }
            }

            // If the cell is today (and not the selected day), apply today styling
            if (
              isSameDay(cellDate, today) &&
              !isSameDay(cellDate, selectedDate)
            ) {
              const dayFrame = cell.querySelector(".fc-daygrid-day-frame");
              if (dayFrame) {
              }
            }
          }
        });
      } catch (error) {
        console.error("Error updating day styling:", error);
      }
    }, 0);
  }, [selectedDate, date]);

  // Initial load of selected date events
  useEffect(() => {
    if (!initialUpdateSent.current) {
      // Filter events for the selected date
      const dateString = format(selectedDate, "yyyy-MM-dd");
      const dateEvents = events.filter((event) => {
        const eventDateStr = format(new Date(event.start), "yyyy-MM-dd");
        return eventDateStr === dateString;
      });

      // Send the initial update
      onDaySelect(selectedDate, dateEvents);
      initialUpdateSent.current = true;
    }
  }, [selectedDate, events, onDaySelect]);

  // Calendar toolbar event handlers
  const handleDateToday = () => {

    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      // Navigate to today's date
      calendarApi.today();

      // Get today's date
      const todayDate = new Date();

      // Update state to match
      setDate(todayDate);
      setSelectedDate(todayDate);

      // Update the URL with today's date
      updateUrlWithDate(todayDate);

      // Filter events for today
      const todayDateStr = format(todayDate, "yyyy-MM-dd");
      const todayEvents = events.filter((event) => {
        const eventDateStr = format(new Date(event.start), "yyyy-MM-dd");
        return eventDateStr === todayDateStr;
      });

      // Send update to parent component
      onDaySelect(todayDate, todayEvents);
    }
  };

  const handleViewChange = (newView: string) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.changeView(newView);
      setCalendarView(newView);
    }
  };

  const handleDatePrev = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  };

  const handleDateNext = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  // Calendar event handlers - UPDATED FUNCTION
  const handleDateClick = (arg: any) => {
    // Update selected date
    setSelectedDate(arg.date);
    setDate(arg.date);

    // Update URL with the selected date
    updateUrlWithDate(arg.date);

    // Filter events for this date
    const clickedDate = format(arg.date, "yyyy-MM-dd");
    const dateEvents = events.filter((event) => {
      const eventDateStr = format(new Date(event.start), "yyyy-MM-dd");
      return eventDateStr === clickedDate;
    });

    // Send update to parent component
    onDaySelect(arg.date, dateEvents);
  };

  const handleEventSelect = (arg: any) => {
    if (arg?.event?.id) {
      const event = events.find((event) => event.id === arg.event.id);
      setSelectedEvent(event);
      setModalOpen(true);
    }
  };

  // Modal handlers
  const handleCloseModal = () => {
    setSelectedEvent(undefined);
    setModalOpen(false);
  };

  // Custom view class helper
  const customViewClassNames = () => {
    return {
      "calendar-custom-view": true,
    };
  };

  return (
    <div className="relative w-full">
      {/* Calendar container */}
      <div className="bg-transparent overflow-hidden">
        {
          <Toolbar
            date={date}
            view={calendarView}
            onClickNext={handleDateNext}
            onClickPrev={handleDatePrev}
            onClickToday={handleDateToday}
            onChangeView={handleViewChange}
          />
        }

        <div className="calendar-wrapper w-full bg-transparent">
          <FullCalendar
            plugins={[
              listPlugin,
              dayGridPlugin,
              timelinePlugin,
              timeGridPlugin,
              interactionPlugin,
            ]}
            ref={calendarRef}
            initialView={calendarView}
            initialDate={date}
            headerToolbar={false}
            editable={false} // Events are not editable
            selectable={true}
            selectMirror={false}
            dayMaxEvents={isMediumDevice ? 1 : 2} // Limit visible events before "+more"
            weekends={true}
            events={events}
            dateClick={handleDateClick}
            eventClick={handleEventSelect}
            height={isMediumDevice ? "auto" : "88vh"}
            showNonCurrentDates={true} // Show other month dates with different styling
            fixedWeekCount={false} // Don't force 6 weeks display
            contentHeight="auto"
            stickyHeaderDates={true}
            eventDisplay="block"
            allDayMaintainDuration={true}
            eventResizableFromStart={false}
            // viewClassNames={customViewClassNames}
            moreLinkClick="week"
          />
        </div>
      </div>

      {/* Event View Modal */}
      {isModalOpen && selectedEvent && (
        <EventModal event={selectedEvent} onClose={handleCloseModal} />
      )}
    </div>
  );
}
