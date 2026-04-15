import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// --- IMPORT REACT ICON ---
import { IoClose } from "react-icons/io5";

// --- IMPORT YOUR IMAGES HERE ---
import image1 from '../assets/image1.JPG';
import ML from '../assets/ML.png'; 
import tahoeImg from '../assets/tahoe.png'; 
import oldImg from '../assets/Old.png'; 
import lv1 from '../assets/Lv1.png';
import lv2 from '../assets/Lv2.png';
import lv3 from '../assets/Lv3.png';
import SU1 from '../assets/Su1.png';
import SU2 from '../assets/Su2.png';
import SU3 from '../assets/Su3.png';
import La1 from '../assets/La1.png';
import La2 from '../assets/La2.png';
import La3 from '../assets/La3.png';
import HK from '../assets/HK.png';
import K1 from '../assets/K1.png';
import K2 from '../assets/K2.png';
import P1 from '../assets/P1.png';
import P2 from '../assets/P2.png';
import P3 from '../assets/P3.png';
import P4 from '../assets/P4.png';
import P5 from '../assets/P5.png';
import P6 from '../assets/P6.png';
import P7 from '../assets/P7.png';
import P8 from '../assets/P8.png';
const TravelCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);

  // Updated helper to handle arrays of images
  const createAdaptivePages = (location, total, stamp, imageArray = [image1]) => {
    const pages = [];
    for (let i = 0; i < total; i += 4) {
      const remaining = total - i;
      const onThisPage = Math.min(4, remaining);
      
      let layoutType = "grid"; 
      if (onThisPage === 1) layoutType = "full";
      if (onThisPage === 2) layoutType = "stack";

      // Select slice of images for this page
      const pageImages = imageArray.slice(i, i + onThisPage);

      pages.push({
        type: "gallery",
        title: `STAMP: ${location.toUpperCase()}`,
        location: location,
        count: onThisPage,
        startIdx: i + 1,
        stamp: stamp,
        layout: layoutType,
        images: pageImages // Pass the specific images
      });
    }
    return pages;
  };

  const pages = [
    {
      type: "qa_hero",
      title: "I. MISSION & REWARD",
      q: "What do you find most rewarding about your work?",
      a: "Getting paid while being able to help the community.",
      icon: "🤝",
      color: "text-blue-600"
    },
    {
      type: "qa_hobby",
      title: "II. THE HIDDEN PLAYER",
      q: "What’s a hobby/passion people wouldn't guess?",
      a: "I play Mobile Legends almost everyday; I’m a late bloomer, I’m always curious about what my children are playing... I’m still stuck with the last one.",
      img: ML 
    },
    {
      type: "qa_hero",
      title: "III. FUTURE DREAMS",
      q: "What’s a 'bucket list' goal for the next five years?",
      a: "Work, Live or Retire in another country.",
      icon: "✈️",
      color: "text-amber-600"
    },
    {
      type: "reflection",
      title: "MEMORABLE LOG",
      text: "Most memorable Lake Tahoe since it’s my first time to see snow.",
      subText: "“Me” time is as important as time with family. We should not feel guilty spending time for ourselves.",
      stamp: "❄️",
      img: tahoeImg 
    },
    ...createAdaptivePages("Old Nile, SF", 1, "🌉", [oldImg]),
    ...createAdaptivePages("Las Vegas", 2, "🎰", [lv1, lv2]),
    ...createAdaptivePages("Singapore", 1, "🦁", [lv3]),
    ...createAdaptivePages("Stanford University", 3, "🎓", [SU1, SU2, SU3]),
    ...createAdaptivePages("Los Angeles", 2, "🎬", [La1, La2]),
    ...createAdaptivePages("Macau", 1, "🇲🇴", [La3]),
    ...createAdaptivePages("Hong Kong", 1, "🏙️", [HK]),
    ...createAdaptivePages("Korea", 2, "🇰🇷", [K1, K2]),
    ...createAdaptivePages("Philippines", 8, "🇵🇭", [P1, P2, P3, P4, P5, P6, P7, P8]),
    {
      type: "quote",
      title: "Favorite Quotes",
      quotes: [
        "Sometimes, you have to stop thinking so much and just go where your hearts takes you.",
      ]
    },
    {
      type: "quote2",
      title: "Favortie Quotes",
      quotes: [
        "Make everything as simple as possible, but not simpler.",
      ]
    }
  ];

  const next = () => setCurrentPage((c) => (c + 1) % pages.length);
  const prev = () => setCurrentPage((c) => (c - 1 + pages.length) % pages.length);

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[450px] md:max-w-[500px] aspect-[1/1.4] [perspective:2500px] flex items-center justify-center font-sans mx-auto mb-20">
      
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-6 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img 
              initial={{ scale: 0.8 }} animate={{ scale: 1 }}
              src={selectedImg} className="max-w-full max-h-full rounded shadow-2xl border-2 sm:border-4 border-white" 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-[#fdfcf8] rounded-r-2xl shadow-2xl border-l-[15px] sm:border-l-[25px] border-[#3a1d1d] overflow-hidden flex flex-col">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute top-5 right-5 z-[70] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-900/10 shadow-[2px_2px_5px_rgba(0,0,0,0.1)] hover:shadow-[1px_1px_3px_rgba(0,0,0,0.2)] hover:from-red-50 hover:to-red-100 hover:border-red-900/20 transition-all group active:scale-95"
            >
              <IoClose className="text-lg sm:text-xl text-amber-900/60 group-hover:text-red-900/60" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentPage}
            initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }}
            className="relative flex-1 p-6 sm:p-10 flex flex-col min-h-0"
          >
            <div className="flex justify-between items-end border-b border-black/5 pb-2 sm:pb-4 mb-3 sm:mb-6 mr-10">
              <h3 className="text-sm sm:text-lg font-serif italic font-black text-zinc-800 tracking-tight leading-none uppercase">{pages[currentPage].title}</h3>
              <span className="text-[7px] sm:text-[9px] font-mono text-zinc-300 tracking-widest uppercase">Pg {currentPage + 1}</span>
            </div>

            <div className="flex-1 flex flex-col justify-center min-h-0 overflow-hidden">
              {pages[currentPage].type === "qa_hobby" && (
                <div className="flex flex-col h-full space-y-3 sm:space-y-4">
                  <h4 className="font-serif italic text-zinc-800 text-xs sm:text-base leading-tight pr-4">
                    "{pages[currentPage].q}"
                  </h4>
                  <div 
                    onClick={() => setSelectedImg(pages[currentPage].img)}
                    className="relative w-full aspect-video bg-white p-1 shadow-md rotate-1 cursor-zoom-in group shrink-0"
                  >
                    <img src={pages[currentPage].img} className="w-full h-full object-cover rounded-sm" />
                  </div>
                  <div className="overflow-y-auto pr-1">
                    <p className="text-[11px] sm:text-sm text-zinc-600 font-serif leading-relaxed italic border-t border-black/5 pt-2">
                      "{pages[currentPage].a}"
                    </p>
                  </div>
                </div>
              )}

              {pages[currentPage].type === "qa_hero" && (
                <div className="text-center space-y-3 sm:space-y-6">
                  <span className="text-5xl sm:text-7xl block">{pages[currentPage].icon}</span>
                  <p className="text-sm sm:text-xl font-serif italic text-zinc-900 leading-snug px-2 italic">"{pages[currentPage].q}"</p>
                  <p className={`text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] pt-4 border-t border-black/5 ${pages[currentPage].color}`}>
                    {pages[currentPage].a}
                  </p>
                </div>
              )}

              {pages[currentPage].type === "gallery" && (
                <div className="h-full flex flex-col min-h-0">
                  {pages[currentPage].layout === "full" && (
                    <div onClick={() => setSelectedImg(pages[currentPage].images[0])} className="flex-1 bg-white p-2 sm:p-3 shadow-2xl border border-zinc-100 cursor-zoom-in rotate-[-1deg] min-h-0">
                      <img src={pages[currentPage].images[0]} className="w-full h-full object-cover" />
                    </div>
                  )}
                  {pages[currentPage].layout === "stack" && (
                    <div className="flex-1 grid grid-rows-2 gap-2 sm:gap-4 min-h-0">
                      {pages[currentPage].images.map((img, i) => (
                        <div key={i} onClick={() => setSelectedImg(img)} className={`bg-white p-1 sm:p-2 shadow-lg cursor-zoom-in overflow-hidden ${i % 2 === 0 ? 'rotate-[1deg]' : '-rotate-[1deg]'}`}>
                          <img src={img} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                  {pages[currentPage].layout === "grid" && (
                    <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-3 content-center min-h-0">
                      {pages[currentPage].images.map((img, i) => (
                        <div key={i} onClick={() => setSelectedImg(img)} className={`bg-white p-1.5 pb-4 shadow-md cursor-zoom-in ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
                          <img src={img} className="w-full aspect-square object-cover" />
                          <p className="text-[6px] sm:text-[8px] mt-1 text-center text-zinc-400 font-bold uppercase">{pages[currentPage].location}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {pages[currentPage].type === "reflection" && (
                <div className="text-center space-y-4">
                   <p className="text-lg sm:text-xl font-serif italic text-zinc-900 leading-relaxed italic">"{pages[currentPage].text}"</p>
                   {pages[currentPage].img && (
                     <div 
                       onClick={() => setSelectedImg(pages[currentPage].img)}
                       className="relative w-40 sm:w-52 aspect-video mx-auto bg-white p-1 shadow-lg -rotate-1 cursor-zoom-in"
                     >
                       <img src={pages[currentPage].img} className="w-full h-full object-cover rounded-sm" />
                     </div>
                   )}
                   <p className="text-[9px] sm:text-xs font-bold text-zinc-400 uppercase tracking-[0.4em]">{pages[currentPage].subText}</p>
                </div>
              )}

              {pages[currentPage].type === "quote" && (
                <div className="space-y-10 text-center">
                  {pages[currentPage].quotes.map((q, i) => (
                    <p key={i} className="text-sm sm:text-xl font-serif italic text-zinc-700 leading-snug">"{q}"</p>
                  ))}
                </div>
              )}

              {pages[currentPage].type === "quote2" && (
                <div className="space-y-10 text-center">
                  {pages[currentPage].quotes.map((q, i) => (
                    <p key={i} className="text-sm sm:text-xl font-serif italic text-zinc-700 leading-snug">"{q}"</p>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-auto pt-4 flex justify-between items-center border-t border-black/5">
              <button onClick={prev} className="text-[9px] sm:text-[10px] font-bold text-zinc-300 hover:text-zinc-900 uppercase">Prev</button>
              <div className="flex gap-1.5">
                {pages.map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-300 ${currentPage === i ? 'w-5 sm:w-8 bg-zinc-800' : 'w-1 bg-zinc-200'}`} />
                ))}
              </div>
              <button onClick={next} className="text-[9px] sm:text-[10px] font-bold text-red-800 hover:text-red-500 uppercase">Next</button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute inset-0 z-50 origin-left cursor-pointer"
        animate={{ rotateY: isOpen ? -115 : 0 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 40, damping: 15 }}
        style={{ transformStyle: 'preserve-3d' }}
        onClick={() => !isOpen && setIsOpen(true)}
      >
        <div className="absolute inset-0 bg-[#422218] rounded-2xl flex flex-col items-center justify-between py-12 px-8 [backface-visibility:hidden] border-r-[4px] sm:border-r-[8px] border-black/30 shadow-2xl">
          <div className="w-full flex justify-between opacity-30 text-[7px] sm:text-[9px] font-bold text-amber-200 tracking-[0.3em] uppercase">
             <span>Mabuhay Miles</span>
             <span>Elite Platinum</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border border-amber-500/20 p-1 mb-6 shadow-inner">
               <img src={image1} className="w-full h-full rounded-full object-cover" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif italic font-black text-amber-500 uppercase tracking-tight">Pasaporte</h2>
            <p className="text-white text-sm sm:text-lg font-serif italic tracking-widest mt-2">Ms. Marry Ann Dealo</p>
          </div>

          <div className="text-center">
            <p className="text-amber-200/50 text-[8px] font-bold tracking-[0.2em] mb-2 uppercase">Touch to Open</p>
            <div className="w-1 h-1 bg-amber-500 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>

        <div className="absolute inset-0 bg-[#fdfcf8] rounded-2xl p-8 [backface-visibility:hidden] flex flex-col items-center justify-center border-l-4 sm:border-l-8 border-[#2d1b14]" style={{ transform: 'rotateY(180deg)' }}>
            <h4 className="text-2xl sm:text-3xl font-serif italic font-bold text-zinc-800">Mabuhay</h4>
            <p className="text-red-800 text-[10px] font-bold tracking-widest uppercase mt-4">Personal Dossier</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TravelCard;