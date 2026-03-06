import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Modern animated portfolio built with React & Tailwind",
    thumbnail: "/thumb5.jpg",
    github: "https://github.com/SteveJnr05/Portfolio-II",
  },
];

// Fade-in wrapper
function FadeInSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default function Development() {
  return (
    <section className="min-h-screen bg-[#050816] text-white px-6 md:px-20 py-24">

      {/* Heading */}
      <FadeInSection>
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Development Projects
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl">
            Scalable, modern applications built with clean architecture and performance in mind.
          </p>
        </div>
      </FadeInSection>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <FadeInSection key={project.id} delay={index * 0.2}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative bg-[#0f0f1a] rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500 transition group"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold">{project.title}</h2>

                <p className="text-gray-400 text-sm mt-2">{project.description}</p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-purple-400 hover:text-purple-300 transition"
                >
                  View Repository
                </a>
              </div>
            </motion.div>
          </FadeInSection>
        ))}
      </div>

    </section>
  );
}
