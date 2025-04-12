'use client';

import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
  isToday,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const getBlankDays = () => {
    const startWeekDay = startOfMonth(currentDate).getDay();
    return Array.from({ length: startWeekDay });
  };

  const goToPrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const goToNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  return (
    <aside className="w-full lg:w-80 bg-white p-4 rounded-xl shadow-md space-y-6 lg:sticky lg:top-24">

      {/* Calendar Section */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold text-gray-800">Calendar</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevMonth}
              className="p-1.5 rounded-full hover:bg-gray-200 transition"
              aria-label="Previous month"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-sm text-gray-600 font-medium">
              {format(currentDate, "MMMM yyyy")}
            </span>
            <button
              onClick={goToNextMonth}
              className="p-1.5 rounded-full hover:bg-gray-200 transition"
              aria-label="Next month"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Day Grid */}
        <div className="grid grid-cols-7 gap-y-1.5 text-sm text-center text-gray-600">
          {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
            <div key={d} className="font-medium py-1">{d}</div>
          ))}

          {/* Blank Days */}
          {getBlankDays().map((_, i) => (
            <div key={`blank-${i}`} />
          ))}

          {/* Actual Days */}
          {days.map((day) => (
            <div
              key={day.toISOString()}
              className={`w-9 h-9 mx-auto flex items-center justify-center rounded-full transition
                ${
                  isToday(day)
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
            >
              {format(day, "d")}
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Section */}
      <div>
        <h3 className="text-md font-semibold text-gray-800 mb-3">Schedule</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2 border-l-4 border-blue-500 pl-3">
            <div className="mt-1 w-2 h-2 bg-blue-500 rounded-full"></div>
            <div>
              <p className="font-medium text-gray-900">Team Meeting</p>
              <span className="text-xs text-gray-500">10:00 AM - Apr 12</span>
            </div>
          </li>
          <li className="flex items-start gap-2 border-l-4 border-green-500 pl-3">
            <div className="mt-1 w-2 h-2 bg-green-500 rounded-full"></div>
            <div>
              <p className="font-medium text-gray-900">Client Review</p>
              <span className="text-xs text-gray-500">2:00 PM - Apr 13</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Reminder Section */}
      <div>
        <h3 className="text-md font-semibold text-gray-800 mb-3">Reminder</h3>
        <div className="bg-blue-50 text-blue-700 p-4 rounded-xl text-sm shadow-sm">
          Prepare presentation for stakeholders.
        </div>
      </div>
    </aside>
  );
}
