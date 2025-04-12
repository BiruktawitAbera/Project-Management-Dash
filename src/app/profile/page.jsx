'use client';

import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-xl p-6 shadow max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>

        {/* Profile Information */}
        <div className="flex flex-col gap-6">
          {/* Avatar + Name */}
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-600">
              JD
            </div>
            <div>
              <h2 className="text-lg font-semibold">John Doe</h2>
              <p className="text-gray-500 text-sm">Software Engineer</p>
            </div>
          </div>

          {/* Editable Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border rounded-lg px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border rounded-lg px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone</label>
              <input
                type="tel"
                placeholder="+1234567890"
                className="w-full border rounded-lg px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Role</label>
              <input
                type="text"
                placeholder="Your role"
                disabled
                className="w-full bg-gray-100 border rounded-lg px-4 py-2 text-sm"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
