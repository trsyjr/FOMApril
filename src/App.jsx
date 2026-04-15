import React from 'react';
import TravelCard from "./components/TravelCard";

function App() {
  return (
    <div className="h-screen w-screen bg-[#0d0221] flex flex-col items-center justify-center overflow-hidden m-0 p-0 relative">
      
      {/* Radiant Purple Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/30 via-transparent to-black"></div>
        {/* Dynamic Glows */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Navigation Header */}
      <nav className="absolute top-0 w-full p-8 flex justify-between items-center z-50 px-12">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-8">
            <div className="absolute inset-0 bg-purple-600 rounded-sm skew-x-[-20deg]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-black text-sm italic tracking-tighter">PAL</span>
            </div>
          </div>
          <span className="text-purple-200 font-bold tracking-[0.2em] text-sm uppercase">Philippine Airlines</span>
        </div>
      </nav>

      {/* Main Feature Section */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-white text-5xl md:text-6xl font-black tracking-tighter uppercase italic pt-20 px-10">
            Feature 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-300 pr-4">
              {" "}of the Month
            </span>
          </h1>
          <div className="h-1 w-32 bg-purple-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        </div>

        <TravelCard />
        
        <p className="text-purple-300/30 text-[9px] tracking-[0.6em] uppercase mt-4">
          Exploring the Pearl of the Orient
        </p>
      </div>
    </div>
  );
}

export default App;