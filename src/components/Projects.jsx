import imagePoly from "/public/poly.jpg";
import donationWebsite from "/public/donation-website.jpg";
import imageFlexicoin from "/public/Flexicoin.jpg";
import imagePillPal from "/public/PillPal.jpg";
import imageIoTMonitoring from "/public/iot_monitoring.jpg";
import imageRomain from "/public/romain.jpg";

import { motion } from "framer-motion";

const projectsData = [
  {
    image: imageRomain,
    title: (
      <>
        ROMAIN (
        <a
          href="https://iavc.fr/romain/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-orbitron text-[rgb(8,156,163)]"
        >
          for iAVC
        </a>
        )
      </>
    ),
    description:
      "Collaborated on enhancing ROMAIN, a healthcare-focused platform built with Angular, NestJS, PostgreSQL, and Flutter, designing and integrating new features for stroke patient care management.",
    technologies: ["Angular", "NestJS", "Flutter", "PostgreSQL"],
  },
  {
    image: imagePoly,
    title: "MAS Polymorphic Simluation",
    description:
      "Developed a Java-based multi-agent simulation to visualize interactions between four competing agent groups, employing object-oriented principles and effectively utilizing the Singleton design pattern.",
    technologies: ["Java"],
  },
  {
    image: donationWebsite,
    title: "Donation Website",
    description:
      "Built a secure, responsive donation webpage during my internship at Openmind Projects, using Node.js, ExpressJS, and Stripe API to enhance funding for global education and empowerment initiatives.",
    technologies: ["Javascript", "Node.js", "ExressJS"],
  },
  {
    image: imagePillPal,
    title: "PillPal",
    description:
      "Collaborated in a team to create PillPal, a dual-platform pharmaceutical app built with Java, Firebase, and web technologies, significantly enhancing pharmacy-customer interactions and experience.",
    technologies: ["Java", "Firebase", "JavaScript"],
  },
  {
    image: imageFlexicoin,
    title: "Flexicoin",
    description:
      "Created an Android crypto-trading simulation app using Java, featuring live cryptocurrency prices via API, secure login/signup through Firebase Authentication, and crypto transfers between users.",
    technologies: ["Java", "Firebase"],
  },
  {
    image: imageIoTMonitoring,
    title: "IoT Monitoring System",
    description:
      "Built a web-based IoT monitoring dashboard simulating real-time module data, database integration, and malfunction events, providing interactive controls and status visualization using PHP & MySQL.",
    technologies: ["PHP", "MySQL", "JavaScript (AJAX)"],
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="font-orbitron text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="font-orbitron text-sm rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="font-orbitron text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
