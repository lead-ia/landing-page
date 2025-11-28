import React from 'react';

const View2 = () => {
  return (
    <div className="text-center p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Automate Your Documentation</h1>
      <p className="text-xl text-gray-600 mb-8">
        Spend more time with patients. Leadia handles clinical notes, prescriptions, and follow-up reminders.
      </p>
      <div className="mb-10">
        <p className="text-lg text-gray-700 mb-4">
          Experience seamless integration with your existing workflow. Leadia listens to your patient consultations and automatically generates accurate clinical notes in real-time.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our advanced AI understands medical terminology and context, ensuring that every detail is captured correctly and efficiently.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600">80%</div>
          <div className="text-sm text-gray-600">Time Saved</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600">95%</div>
          <div className="text-sm text-gray-600">Accuracy</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600">24/7</div>
          <div className="text-sm text-gray-600">Availability</div>
        </div>
      </div>
    </div>
  );
};

export default View2;