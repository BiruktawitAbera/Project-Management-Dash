'use client';

import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function FAQPage() {
  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click on "Forgot Password". Follow the instructions sent to your registered email.',
    },
    {
      question: 'Can I change my role?',
      answer: 'Roles are assigned by admins. Please contact your system administrator to request a role change.',
    },
    {
      question: 'Where can I view my assigned tasks?',
      answer: 'You can view your tasks on the Dashboard under the "Task Overview" section.',
    },
    {
      question: 'How do I contact support?',
      answer: 'You can reach out to our support team via the "Contact Us" link found at the bottom of the sidebar.',
    },
  ];

  return (
    <DashboardLayout>
      <div className="bg-white rounded-xl p-6 shadow">
        <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-sm transition">
              <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
              <p className="text-gray-600 mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
