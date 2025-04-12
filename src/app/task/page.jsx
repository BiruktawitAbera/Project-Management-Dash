'use client';

import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function CalendarPage() {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-xl p-6 shadow">
        <h1 className="text-2xl font-bold mb-2">Task</h1>
        <p className="text-gray-600">This is the task page.</p>
      </div>
    </DashboardLayout>
  );
}
