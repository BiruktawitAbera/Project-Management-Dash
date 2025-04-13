'use client';

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header - Stacked on mobile, centered on larger screens */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-800 mb-3 sm:mb-4">
            Welcome to <span className="text-blue-600">Taskcore</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-md sm:max-w-xl lg:max-w-2xl">
            Your all-in-one project management solution
          </p>
        </div>

        {/* Stats Cards - 1 column mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {[
            { title: "Active Projects", value: "12", color: "blue" },
            { title: "Tasks Due", value: "5", color: "orange" },
            { title: "Team Members", value: "8", color: "green" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-xs border border-gray-100"
            >
              <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-1 sm:mb-2">{stat.title}</h3>
              <p className={`text-2xl sm:text-3xl font-bold ${
                stat.color === 'blue' ? 'text-blue-600' :
                stat.color === 'orange' ? 'text-orange-500' :
                'text-green-500'
              }`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions - 2 columns mobile, 4 larger screens */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-xs p-4 sm:p-6 border border-gray-100 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: "New Task", icon: "plus", color: "blue" },
              { label: "Schedule", icon: "calendar", color: "purple" },
              { label: "Team", icon: "users", color: "green" },
              { label: "Settings", icon: "cog", color: "orange" }
            ].map((action, index) => (
              <button 
                key={index}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-md hover:bg-gray-50 transition-colors"
              >
                <div className={`${
                  action.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  action.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  action.color === 'green' ? 'bg-green-100 text-green-600' :
                  'bg-orange-100 text-orange-600'
                } p-2 sm:p-3 rounded-full mb-2`}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {action.icon === 'plus' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    ) : action.icon === 'calendar' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    ) : action.icon === 'users' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    )}
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity - Full width on mobile, optimized spacing */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-xs p-4 sm:p-6 border border-gray-100">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Recent Activity</h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              { id: 1, action: 'Completed "Design Review"', time: '2 hours ago', icon: 'check' },
              { id: 2, action: 'New task: "Client Meeting"', time: 'Yesterday', icon: 'plus' },
              { id: 3, action: 'Updated "Website Redesign"', time: '2 days ago', icon: 'update' },
            ].map((item) => (
              <div key={item.id} className="flex items-start">
                <div className={`p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3 ${
                  item.icon === 'check' ? 'bg-green-100 text-green-600' : 
                  item.icon === 'plus' ? 'bg-blue-100 text-blue-600' : 
                  'bg-purple-100 text-purple-600'
                }`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon === 'check' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    ) : item.icon === 'plus' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    )}
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base text-gray-800">{item.action}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}