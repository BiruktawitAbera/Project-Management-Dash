'use client';

import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function MessagePage() {
  const messages = [
    { from: 'Lucas Garcia', content: 'Hey, have you checked the task update?', time: '10:24 AM' },
    { from: 'You', content: 'Yes, I reviewed it this morning.', time: '10:27 AM' },
    { from: 'Lucas Garcia', content: 'Great! Let’s proceed then.', time: '10:30 AM' },
  ];

  return (
    <DashboardLayout>
      <div className="bg-white rounded-xl shadow p-4 sm:p-6 flex flex-col h-[80vh]">
        <h1 className="text-2xl font-bold mb-4">Messages</h1>
        <div className="flex flex-1 overflow-hidden">
          {/* Contacts Sidebar */}
          <aside className="w-1/3 border-r pr-4 overflow-y-auto hidden sm:block">
            <h2 className="text-lg font-semibold mb-3">Contacts</h2>
            <ul className="space-y-3">
              <li className="p-2 bg-gray-100 rounded-lg cursor-pointer">Lucas Garcia</li>
              <li className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">Emma Wilson</li>
              <li className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">John Smith</li>
            </ul>
          </aside>

          {/* Chat Window */}
          <section className="flex-1 flex flex-col justify-between pl-0 sm:pl-6">
            <div className="space-y-4 overflow-y-auto max-h-[65vh] pr-2">
              {messages.map((msg, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-sm text-gray-500">{msg.from} - {msg.time}</span>
                  <div
                    className={`p-3 mt-1 max-w-[70%] rounded-lg text-sm ${
                      msg.from === 'You' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input box */}
            <div className="mt-4 flex items-center gap-2 border-t pt-4">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-4 py-2 text-sm"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                Send
              </button>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
