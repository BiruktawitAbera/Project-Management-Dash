'use client';

import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function CalendarPage() {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-xl p-6 shadow max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Calendar</h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Upcoming Schedule */}
          <div className="bg-gray-50 p-4 rounded-lg shadow w-full md:w-1/2">
            <h2 className="text-lg font-semibold mb-4">Upcoming Schedule</h2>
            <ul className="space-y-2 text-sm">
              <li className="border-l-4 border-blue-500 pl-3">Team Meeting — Apr 12, 10:00 AM</li>
              <li className="border-l-4 border-green-500 pl-3">Client Review — Apr 13, 2:00 PM</li>
              <li className="border-l-4 border-yellow-500 pl-3">Design Sprint — Apr 15, 9:00 AM</li>
            </ul>
          </div>

          {/* Calendar View */}
          <div className="bg-gray-50 p-4 rounded-lg shadow w-full md:w-1/2">
            <h2 className="text-lg font-semibold mb-4">Calendar View</h2>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {Array.from({ length: 31 }, (_, i) => (
                <div key={i} className="border rounded-lg py-2">{i + 1}</div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">* Static mockup — dynamic view coming soon</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
