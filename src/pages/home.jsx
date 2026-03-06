import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedBackground from "../components/animatedBg";

export default function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target); // stop observing once visible
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Helper to attach ref
  const setSectionRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="bg-[#050816] text-white overflow-hidden">
      
      {/* HERO SECTION */}
      <section
        ref={setSectionRef}
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <AnimatedBackground />

        <div className="z-10">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Creative Innovator
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Graphic Designer • UI/UX Designer • Videographer • Developer
          </p>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Transforming ideas into stunning visual experiences through design, motion, and code.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <Link
              to="/design"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-105 transition transform duration-300"
            >
              View My Work →
            </Link>

            <Link
              to="/about"
              className="px-8 py-3 rounded-xl border border-purple-500 hover:bg-purple-500/20 transition duration-300"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT I DO SECTION */}
      <section
        ref={setSectionRef}
        className="max-w-6xl mx-auto px-6 py-32 text-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <h2 className="text-4xl font-semibold text-blue-400">What I Do</h2>
        <p className="mt-2 text-gray-400">
          Combining multiple disciplines to deliver exceptional results
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/design"
            className="p-6 rounded-xl bg-[#0a0c1f] hover:bg-[#121429] transition block"
          >
            <div className="w-12 h-12 mb-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
              🎨
            </div>
            <h3 className="text-lg font-semibold">Graphic & UI/UX Design</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Creating stunning visual experiences and user-centered designs
            </p>
            <span className="mt-2 text-purple-400 inline-block hover:underline">
              Explore →
            </span>
          </Link>

          <Link
            to="/videography"
            className="p-6 rounded-xl bg-[#0a0c1f] hover:bg-[#121429] transition block"
          >
            <div className="w-12 h-12 mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              🎥
            </div>
            <h3 className="text-lg font-semibold text-purple-400">Videography</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Capturing and editing compelling visual stories
            </p>
            <span className="mt-2 text-purple-400 inline-block hover:underline">
              Explore →
            </span>
          </Link>

          <Link
            to="/development"
            className="p-6 rounded-xl bg-[#0a0c1f] hover:bg-[#121429] transition block"
          >
            <div className="w-12 h-12 mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-lg flex items-center justify-center">
              💻
            </div>
            <h3 className="text-lg font-semibold">Development</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Building modern, responsive web applications
            </p>
            <span className="mt-2 text-purple-400 inline-block hover:underline">
              Explore →
            </span>
          </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        ref={setSectionRef}
        className="max-w-4xl mx-auto px-6 pb-32 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="bg-[#0a0c1f]/90 p-10 rounded-xl text-center">
          <h3 className="text-2xl font-semibold">Let's Work Together</h3>
          <p className="mt-2 text-gray-400">
            Have a project in mind? I'd love to hear about it.
          </p>

          <Link
            to="/contact"
            className="mt-6 px-6 py-3 bg-purple-400 text-white rounded-lg hover:scale-105 transition-transform inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}