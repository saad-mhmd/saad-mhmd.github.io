// src/components/ExitIntentModal.jsx
import React from 'react';
import { BiX } from 'react-icons/bi'; // Using react-icons for the close button

const ExitIntentModal = ({ isOpen, onClose }) => {
  // If the modal is not open, render nothing
  if (!isOpen) {
    return null;
  }

  // Prevent clicks inside the modal content from closing it
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // Fullscreen Overlay
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose} // Close modal if overlay is clicked
    >
      {/* Modal Content Container */}
      <div
        className="relative w-full max-w-md rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-2xl shadow-indigo-900/50 border border-indigo-700/50"
        onClick={handleContentClick} // Prevent clicks inside from closing
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors duration-200"
          aria-label="Close modal"
        >
          <BiX size={28} />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center text-center text-white gap-4">
           <h2 className="text-2xl font-orbitron font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
             Leaving So Soon?
          </h2>
           <p className="text-gray-300">
            Looks like you're about to head out! Before you go, why not connect?
          </p>
           <p className="text-sm text-gray-400">
            I'm always open to discussing new projects, tech ideas, or just chatting.
          </p>

           {/* Example Call to Action (using existing Contact button style) */}
          <a
             href="mailto:mksa4d@gmail.com" // Replace with your actual email or contact link
             className="mt-4 font-orbitron text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-600"
             onClick={onClose} // Also close modal when CTA is clicked
          >
            Say Hello!
          </a>
           {/* You could also add social links here */}
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;