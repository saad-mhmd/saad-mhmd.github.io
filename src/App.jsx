import React, { useState, useEffect } from "react";
import { AnimatePresence } from 'framer-motion';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import retroCar from "./assets/retro_car.mp4";
import GitHubStats from "./components/GitHubStats";
import ExitIntentModal from "./components/ExitIntentModal";

function App() {
  // State for Exit Intent Modal
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  const handleCloseExitModal = () => {
    setIsExitModalOpen(false);
    // the modal will be showed once per user on the browser (until localStorage is cleared)
  };

  // Exit Intent Detection Logic
  useEffect(() => {
    // Function to handle the mouse leaving the viewport towards the top
    const handleMouseLeave = (e) => {
      // Check if the mouse Y coordinate is near the top edge
      const shouldShow = e.clientY < 15; // Sensitivity (pixels)

      if (shouldShow) {
        // Check localStorage
        const alreadyShown = localStorage.getItem("exitIntentShown");

        if (!alreadyShown) {
          // If not shown before, open the modal and mark it as shown
          setIsExitModalOpen(true);
          localStorage.setItem("exitIntentShown", "true");

          // Remove the listener immediately after showing the modal to prevent it from triggering again if the user moves the mouse
          // back into the window and then out again near the top quickly.
          document.removeEventListener("mouseout", handleMouseLeave);
        } else {
          console.log("Exit intent detected, but modal already shown."); // debugging
        }
      }
    };

    // Add the event listener only if the modal hasn't been shown yet
    const alreadyShown = localStorage.getItem("exitIntentShown");
    if (!alreadyShown) {
      // We add the listener to the 'document' because 'mouseleave' on 'window' or 'body' can be unreliable when the cursor leaves quickly.
      // 'mouseout' on document catches the event when moving from document to outside.
      document.addEventListener("mouseout", handleMouseLeave);
    }

    // Cleanup function: Remove the listener when the App component unmounts
    // This covers the case where the listener is still active (modal never shown)
    return () => {
      document.removeEventListener("mouseout", handleMouseLeave);
      console.log("Cleanup: Removed exit intent listener."); // debugging
    };
  }, []); // Empty dependency array ==> this effect runs only once on mount

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={retroCar}
        >
          {/* Fallback text if video isn't supported */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>

      <GitHubStats />

      <AnimatePresence>
        {isExitModalOpen && ( // Conditionally render
          <ExitIntentModal
            key="exit-intent-modal"
            isOpen={isExitModalOpen}
            onClose={handleCloseExitModal}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
