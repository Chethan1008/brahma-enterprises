import React from "react";

const SBIPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Intro Section */}
      <div className="bg-indigo-50 p-6 rounded-2xl shadow-md mb-10">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">SBI Account Opening Assistance</h1>
        <p className="text-lg text-gray-800">
          Open a new SBI account easily with our guidance. Whether you're a student or a working professional, we’ll help you get started with the right documentation.
        </p>
      </div>

      {/* Student Account Section */}
      <section className="mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">📘 Student Account</h2>
          <p className="text-gray-700 mb-4">Required documents for students:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Two recent passport-size photographs</li>
            <li>Student ID card or bonafide certificate from the institution</li>
            <li>Aadhar card linked to mobile number</li>
            <li>PAN card or Form 60 (if PAN not available)</li>
            <li>Guardian details (if minor)</li>
          </ul>
        </div>
      </section>

      {/* General Account Section */}
      <section className="mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-green-600 mb-2">🧾 New SBI Account (General)</h2>
          <p className="text-gray-700 mb-4">Required documents for a general savings account:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Two recent passport-size photographs</li>
            <li>Valid ID proof (Aadhar / Voter ID / Passport / Driving License)</li>
            <li>PAN card or Form 60</li>
            <li>Address proof (if not available in ID document)</li>
          </ul>
        </div>
      </section>

      {/* Additional Info Section */}
      <section>
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
          <h2 className="text-2xl font-bold text-purple-600 mb-2">🔍 Additional Information</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Aadhar must be linked with a mobile number for OTP verification.</li>
            <li>Applicants under 18 years must be accompanied by a guardian.</li>
            <li>Student accounts can be linked to scholarships and online transactions.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SBIPage;
