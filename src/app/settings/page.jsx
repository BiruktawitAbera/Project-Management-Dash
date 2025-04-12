'use client';

import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function SettingPage() {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-xl p-6 shadow max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
        <p className="text-gray-600 mb-6">Update your preferences and account configuration below.</p>

        <form className="space-y-6">
          {/* Language Preference */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Language</label>
            <select className="w-full border rounded-lg px-4 py-2 text-sm">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Amharic</option>
            </select>
          </div>

          {/* Notification Preference */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Notifications</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" defaultChecked />
                Email
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" />
                SMS
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" />
                Push
              </label>
            </div>
          </div>

          {/* Theme */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Theme</label>
            <select className="w-full border rounded-lg px-4 py-2 text-sm">
              <option>Light</option>
              <option>Dark</option>
              <option>System Default</option>
            </select>
          </div>

          {/* Save Settings */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
