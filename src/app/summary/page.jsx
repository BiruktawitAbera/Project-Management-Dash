'use client';

import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function SummaryPage() {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-xl p-6 shadow max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Weekly Summary</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-1">Tasks Completed</h2>
            <p className="text-gray-600 text-sm">12 tasks completed this week.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-1">Meetings Attended</h2>
            <p className="text-gray-600 text-sm">5 meetings participated.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-1">Hours Worked</h2>
            <p className="text-gray-600 text-sm">38 hours logged.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-1">Upcoming Deadlines</h2>
            <p className="text-gray-600 text-sm">2 deadlines due next week.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
