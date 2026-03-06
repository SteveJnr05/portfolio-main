import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function FadeInSection({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        hidden: { opacity: 0, y: 40 },
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section className="relative min-h-screen bg-[#050816] text-white px-6 py-20 max-w-7xl mx-auto">
      {/* About Me */}
      <FadeInSection>
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h1 className="text-5xl font-bold text-purple-400 mb-6">About Me</h1>
            <p className="text-gray-300 mb-4">
              I'm a multi-disciplinary creative professional with a passion for combining
              design, motion, and code to create exceptional digital experiences. With expertise
              spanning graphic design, UI/UX, videography, and web development, I bring a unique
              perspective to every project.
            </p>
            <p className="text-gray-400 mb-6">
              My journey began with a love for visual storytelling, which evolved into a
              comprehensive skill set that allows me to tackle projects from concept to
              execution. Whether it's crafting a brand identity, producing a video campaign,
              or building a web application, I approach each challenge with creativity and
              technical precision.
            </p>
            <button className="mt-4 px-6 py-3 bg-purple-400 rounded-lg hover:scale-105 transition-transform">
              <a href="/Resume.pdf" download className="w-full h-full block">
              Download Resume
              </a>
            </button>
          </div>
          <div className="bg-gradient-to-br from-purple-700/20 to-cyan-700/20 p-10 rounded-xl flex flex-col items-center justify-center">
            <div className="text-purple-400 text-6xl mb-4">🏆</div>
            <h2 className="text-2xl font-semibold">5+ Years</h2>
            <p className="text-gray-400">Experience</p>
          </div>
        </div>
      </FadeInSection>

      {/* Experience & Education */}
      <FadeInSection>
        <h2 className="text-3xl font-semibold text-purple-400 mb-8">Experience & Education</h2>
        <div className="space-y-6">
          <div className="p-6 bg-[#0a0c1f] rounded-xl border border-purple-700 hover:bg-[#121429] transition">
            <h3 className="font-semibold text-lg">Design Intern </h3>
            <p className="text-purple-400">Greysoft Technolgy x Freelancing</p>
            <p className="text-gray-400 text-sm">2022</p>
            <p className="text-gray-400 text-sm mt-2">
              Real work experience gained in Product Design and Branding
            </p>
          </div>
          <div className="p-6 bg-[#0a0c1f] rounded-xl border border-purple-700 hover:bg-[#121429] transition">
            <h3 className="font-semibold text-lg">Videographer & Editor</h3>
            <p className="text-purple-400">Freelancing</p>
            <p className="text-gray-400 text-sm">2021 - till date</p>
            <p className="text-gray-400 text-sm mt-2">
              Created compelling video content for brands and businesses
            </p>
          </div>
          <div className="p-6 bg-[#0a0c1f] rounded-xl border border-purple-700 hover:bg-[#121429] transition">
            <h3 className="font-semibold text-lg">Web Development and Smart Contracts</h3>
            <p className="text-purple-400">Training</p>
            <p className="text-gray-400 text-sm">2025 - In Progress</p>
            <p className="text-gray-400 text-sm mt-2">
              
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Skills & Tools */}
      <FadeInSection>
        <h2 className="text-3xl font-semibold text-purple-400 mt-20 mb-8">Skills & Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#0a0c1f] rounded-xl p-6 space-y-2">
            <h3 className="text-purple-400 font-semibold mb-2">Design</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Figma</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Canva</li>
            </ul>
          </div>
          <div className="bg-[#0a0c1f] rounded-xl p-6 space-y-2">
            <h3 className="text-purple-400 font-semibold mb-2">Video</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Adobe Premiere Pro</li>
              <li>After Effects</li>
              <li>Filmora</li>
              <li>Capcut</li>
            </ul>
          </div>
          <div className="bg-[#0a0c1f] rounded-xl p-6 space-y-2">
            <h3 className="text-purple-400 font-semibold mb-2">Development</h3>
            <ul className="text-gray-400 space-y-1">
              <li>React</li>
              <li>JavaScript syntax</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>Sui Move</li>
            </ul>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
