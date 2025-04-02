const Contact = () => {
  return (
    <div
      id="contact"
      className="flex min-h-[70vh] min-w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>

        <div className="flex flex-col gap-1">
          <p className="text-center text-lg font-semibold text-gray-500">
            Got a project, an idea, or just want to chat about tech, AI, or
            life?
          </p>
          <p className="text-center text-md font-light text-white">
            Feel free to reach out. I'm always happy to connect, learn something
            new, or share thoughts. Let’s explore something cool together.
          </p>
        </div>

        <a
          href="mailto:mksa4d@gmail.com"
          className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transtiion-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
