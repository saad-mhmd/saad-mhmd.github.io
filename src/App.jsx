import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import retroCar from './assets/retro_car.mp4';


function App() {
  return (
    <>
      {/* <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}

      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={retroCar}
          
        >
          {/* <source src="/public/retro_car.mp4" type="video/mp4" /> */}
          {/* Fallback text/message if video isn't supported */}
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
    </>
  );
}

export default App;
