import React from 'react';

const View3 = () => {
  return (
    <div className="text-center p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Ready to Transform Your Practice?</h1>
      <p className="text-xl text-gray-600 mb-8">
        Join thousands of doctors who have already enhanced their efficiency with Leadia.
      </p>
      <div className="mb-10">
        <p className="text-lg text-gray-700 mb-4">
          Join leading medical professionals who have transformed their practice with AI. Experience the future of healthcare administration today.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our secure, HIPAA-compliant platform ensures your patient data remains protected while dramatically improving your operational efficiency.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Get Started
        </button>
        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition duration-300">
          Schedule Demo
        </button>
      </div>
    </div>
  );
};

export default View3;