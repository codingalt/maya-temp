"use client";

import { format } from "date-fns";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import EventModal from "./EventModal";

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

interface MobileFooterProps {
  selectedDate: Date;
  events: Event[];
  showMobileFooter: boolean;
  setShowMobileFooter: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}

export default function MobileFooter({
  selectedDate,
  events,
  showMobileFooter,
  setShowMobileFooter,
  onClose,
}: MobileFooterProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Format date for display
  const formatDate = () => {
    return format(selectedDate, "MMMM d");
  };

  // Format time for display
  const formatTime = (date: Date) => {
    return format(date, "h:mm a");
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg z-50 pb-safe max-h-[35vh] overflow-auto transition-all ${
          showMobileFooter ? "h-full" : "h-[60px]"
        }`}
      >
        {/* Handle bar for dragging */}
        <div
          className="flex justify-center py-2"
          onClick={() => setShowMobileFooter(true)}
        >
          <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
        </div>

        {/* Header with date and close button */}
        <div className="flex justify-between items-center px-6 py-2">
          <h2 className="text-2xl font-bold">{formatDate()}</h2>
          <button onClick={onClose} className="p-1 rounded-full">
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Event list or no events message */}
        <div className="px-6 py-4 overflow-y-auto">
          {events.length === 0 ? (
            <div className="py-2">
              <p className="text-gray-500">No events today</p>

              <Link href="/" className="flex items-center mt-4 text-gray-600">
                <svg
                  className="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="2.76953"
                    y="2.76904"
                    width="20.3077"
                    height="18.4615"
                    fill="white"
                  ></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4ZM15.6331 13.5847C15.4366 13.4838 14.4576 13.0042 14.2755 12.9393C14.0934 12.8708 13.96 12.8383 13.8284 13.0403C13.695 13.2404 13.3164 13.6857 13.1974 13.8209C13.082 13.9543 12.9648 13.9706 12.7683 13.8714C11.6001 13.2873 10.8338 12.8293 10.064 11.5078C9.95079 11.3125 10.0263 11.2334 10.181 11.0716C10.3048 10.9421 10.4791 10.7597 10.6481 10.4225C10.713 10.2891 10.6806 10.1755 10.6301 10.0745C10.5965 10.0074 10.4098 9.55254 10.2397 9.13823L10.2396 9.13801L10.2393 9.13734C10.1538 8.9291 10.0726 8.73118 10.0171 8.59796C9.8762 8.25751 9.7311 8.2578 9.61603 8.25803H9.61602C9.60008 8.25806 9.58471 8.25809 9.57001 8.25721C9.45463 8.25 9.32302 8.25 9.1896 8.25C9.05619 8.25 8.84165 8.30048 8.65956 8.49699C8.64748 8.51027 8.63394 8.52478 8.61919 8.54059C8.41157 8.76315 7.96364 9.24329 7.96364 10.1556C7.96364 11.1086 8.64098 12.0325 8.7648 12.2014L8.77314 12.2127C8.78009 12.2219 8.79273 12.24 8.81088 12.2659C9.05641 12.6168 10.3114 14.4104 12.1698 15.2145C13.4318 15.759 13.9258 15.8059 14.5568 15.7121C14.9408 15.6544 15.7323 15.2326 15.8963 14.7656C16.0604 14.3005 16.0604 13.902 16.0117 13.8191C15.971 13.7452 15.8709 13.6977 15.7241 13.6282L15.7239 13.6282C15.6954 13.6146 15.6651 13.6003 15.6331 13.5847ZM17.7136 6.28666C18.4582 7.03305 19.0424 7.90204 19.4498 8.87019C19.8699 9.8726 20.0826 10.9381 20.0772 12.0361C20.0718 13.1286 19.8555 14.1869 19.43 15.1821C19.0207 16.143 18.4348 17.0048 17.6902 17.7422C16.9474 18.4796 16.0802 19.0565 15.1157 19.4585C14.1295 19.8678 13.082 20.0769 12.0021 20.0769H11.9642C10.713 20.0715 9.47085 19.7722 8.36028 19.2115H5.61809C5.16016 19.2115 4.78876 18.8401 4.78876 18.3822V15.6418C4.22807 14.5312 3.92879 13.2891 3.92338 12.0379C3.91797 10.9453 4.1271 9.88341 4.54177 8.88462C4.94201 7.92007 5.52073 7.05469 6.25811 6.3101C6.99549 5.5655 7.85727 4.98137 8.81821 4.57031C9.8134 4.14483 10.8717 3.92849 11.9642 3.92308H12.0003C13.0856 3.92308 14.1385 4.13401 15.1301 4.55048C16.1001 4.95613 16.9691 5.54207 17.7136 6.28666ZM12.0003 18.7067C13.7852 18.7067 15.4618 18.018 16.7257 16.7668C17.9949 15.5084 18.6998 13.8263 18.7106 12.0306C18.7142 11.1184 18.5394 10.235 18.1896 9.40204C17.8525 8.59796 17.3657 7.875 16.7473 7.25661C16.1271 6.63642 15.4059 6.15144 14.6019 5.8143C13.7779 5.46815 12.9035 5.29327 12.0021 5.29327H11.9715C10.174 5.30048 8.49189 6.00361 7.23347 7.27464C5.97326 8.54567 5.28636 10.2332 5.29357 12.0306C5.29898 13.1178 5.56941 14.1977 6.07782 15.1514L6.15895 15.3029V17.8413H8.69742L8.84886 17.9225C9.80258 18.4309 10.8825 18.7013 11.9697 18.7067H12.0003Z"
                    fill="#59CE59"
                  ></path>
                </svg>
                Chat with Dola to create events
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="p-3 border border-gray-200 rounded-lg flex items-start"
                  onClick={() => handleEventClick(event)}
                >
                  <div
                    className="w-1 h-full min-h-[24px] rounded-sm mr-3 self-stretch"
                    style={{ backgroundColor: event.color }}
                  ></div>
                  <div>
                    <h3 className="font-medium text-gray-900">{event.title}</h3>
                    <p className="text-gray-500 text-sm">
                      {event.allDay
                        ? "All day"
                        : `${formatTime(event.start)} - ${formatTime(
                            event.end
                          )}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={handleCloseModal} />
      )}
    </>
  );
}
