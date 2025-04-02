import React, { useState } from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { BiX, BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="font-orbitron bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Mohammad
      </a>

      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li className="font-orbitron">Home</li>
        </a>

        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li className="font-orbitron">Tech</li>
        </a>

        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li className="font-orbitron">Projects</li>
        </a>

        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li className="font-orbitron">Contact</li>
        </a>
      </ul>

      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
          <a href="https://wa.me/+33758642062" target="_blank" rel="noreferrer">
            <BsWhatsapp />
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100">
          <a
            href="https://www.instagram.com/mo7ammadsa3d"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a
            href="https://www.linkedin.com/in/mksa4d/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
          <a
            href="https://github.com/saad-mhmd"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </li>
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li className="font-orbitron">Home</li>
            </a>

            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li className="font-orbitron">Tech</li>
            </a>

            <a
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li className="font-orbitron">Projects</li>
            </a>

            <a
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li className="font-orbitron">Contact</li>
            </a>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100">
              <a
                href="https://wa.me/+33758642062"
                target="_blank"
                rel="noreferrer"
              >
                <BsWhatsapp />
              </a>
            </li>

            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <a
                href="https://www.instagram.com/mo7ammadsa3d"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </li>

            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
              <a
                href="https://www.linkedin.com/in/mksa4d/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>

            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
              <a
                href="https://github.com/saad-mhmd"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
