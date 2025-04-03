import React from "react";
import { BiX } from "react-icons/bi";
import { motion } from 'framer-motion';

// Animation variants for the overlay and modal content
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2, ease: "easeIn" } },
};


const ExitIntentModal = ({ isOpen, onClose }) => {

  // Prevent clicks inside the modal content from closing it
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // Fullscreen Overlay
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose} // Close modal if overlay is clicked
      variants={overlayVariants} // Apply overlay variants
      initial="hidden"
      animate="visible"
      exit="exit" // Define exit animation
    >
      {/* Modal Content Container */}
      <motion.div
        className="relative w-full max-w-md rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-2xl shadow-indigo-900/50 border border-indigo-700/50"
        onClick={handleContentClick}  // Prevent clicks inside from closing
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors duration-200 z-10"
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

          {/* Call to Action similar to the one in Contact component */}
          <a
            href="mailto:mksa4d@gmail.com"
            className="mt-4 font-orbitron text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-600"
            onClick={onClose}
          >
            Say Hello!
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExitIntentModal;
