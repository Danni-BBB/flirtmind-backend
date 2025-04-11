// pages/landing-page.js
import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="flex justify-between p-6 bg-blue-600 text-white">
        <div className="font-bold text-xl">FlirtMind</div>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-700 rounded">Login</button>
          <button className="px-4 py-2 bg-blue-700 rounded">Sign Up</button>
        </div>
      </header>

      {/* Main Section */}
      <section className="flex flex-col items-center justify-center flex-grow bg-white text-center py-16">
        <h1 className="text-5xl font-semibold text-blue-600">Master the art of flirting with AI</h1>
        <p className="mt-4 text-lg text-gray-700">Join thousands of users who have improved their dating skills with our AI-powered flirting coach!</p>
        <button className="mt-6 px-8 py-4 bg-green-500 text-white rounded">Get Started</button>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2025 FlirtMind. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
