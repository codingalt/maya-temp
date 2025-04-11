"use client";

import { format } from "date-fns";
import { X, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";

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

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  // State for animations
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Format date for display
  const formatDate = (date: Date) => {
    return format(date, "MMM d, yyyy");
  };

  // Format time for display
  const formatTime = (date: Date) => {
    return format(date, "h:mm a");
  };

  // Handle modal close with animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Match this timing with CSS transition duration
  };

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Trigger animation on mount
  useEffect(() => {
    // Small delay to ensure the component is mounted before animation starts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${isClosing ? "opacity-0" : ""}`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        } ${isClosing ? "scale-95 translate-y-4" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with color */}
        <div
          className="h-1.5 w-full bg-gradient-to-r from-[#9B87F5] to-purple-700"
          style={{ backgroundColor: event.color }}
        ></div>

        {/* Content */}
        <div className="p-6">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 cursor-pointer text-gray-400 hover:text-gray-500 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-800 mb-5">
            {event.title}
          </h2>

          {/* Date and time */}
          <div className="space-y-3 mb-5">
            <div className="flex items-center text-xs text-gray-600">
              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
              <span>
                {event.allDay
                  ? formatDate(event.start)
                  : `${formatDate(event.start)}${
                      formatDate(event.start) !== formatDate(event.end)
                        ? ` - ${formatDate(event.end)}`
                        : ""
                    }`}
              </span>
            </div>

            {!event.allDay && (
              <div className="flex items-center text-xs text-gray-600">
                <Clock className="w-4 h-4 mr-2 text-gray-400" />
                <span>{`${formatTime(event.start)} - ${formatTime(
                  event.end
                )}`}</span>
              </div>
            )}
          </div>

          {/* Description */}
          {event.description && (
            <div className="mt-4 text-gray-600">
              <p>{event.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
