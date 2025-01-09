import React from 'react';
import Navbar from './components/Navigation/Navbar';
import LavaLamp from './components/Background/LavaLamp';
import RobloxProjects from './components/Projects/RobloxProjects';
import CommissionSection from './components/CommissionSection';

function App() {
  return (
    <div className="min-h-screen bg-[#1A0F0F] text-[#E0E0E0] relative">
      <LavaLamp />
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative" id="home">
        <div className="text-center space-y-6 p-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-[#FF4500] to-[#FFD700] text-transparent bg-clip-text">
            Kevin Mendez
          </h1>
          <p className="text-xl text-[#E0E0E0] max-w-2xl mx-auto">
            Im your average roblox scripter with a lil bit of UI knowledge
          </p>
        </div>
      </section>

      <RobloxProjects />
      <CommissionSection />
    </div>
  );
}

export default App;