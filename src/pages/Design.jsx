import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    category: "Branding",
    title: "Chicken Republic Rebranding",
    description: "New logo and mockups",
    thumbnail: "/thumb2.jpg",
    file: "/chicken-republic.pdf",
  },
  {
    id: 2,
    category: "Branding",
    title: "Helena's Collection",
    description: "Complete branding for a clothing line",
    thumbnail: "/thumb1.jpg",
    file: "/helenas-collection.pdf",
  },
];

// Reusable FadeInSection component
function FadeInSection({ children }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default function Design() {
  const [selectedProject, setSelectedProject] = useState(null);

  const isPDF = (file) => file.toLowerCase().endsWith(".pdf");

  // Lock scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  return (
    <section className="min-h-screen bg-[#050816] text-white px-6 md:px-20 py-24 relative">

      {/* Heading */}
      <FadeInSection>
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Graphic & UI/UX Design
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl">
            Creating visually stunning and user-centered design solutions
          </p>
        </div>
      </FadeInSection>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <FadeInSection key={project.id}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedProject(project)}
              className="relative bg-[#0f0f1a] rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500 transition cursor-pointer group"
            >

              {/* Thumbnail */}
              <div className="h-64 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-lg font-semibold tracking-wide">
                  Click to View Project
                </span>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10 bg-[#0f0f1a]">
                <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">
                  {project.category}
                </span>

                <h2 className="text-xl font-semibold mt-4">
                  {project.title}
                </h2>

                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          </FadeInSection>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f0f1a] w-full max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden relative border border-purple-500/30 shadow-2xl"
            >

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white hover:text-purple-400 transition z-10"
              >
                <X size={26} />
              </button>

              {/* Viewer */}
              <div className="h-[85vh] overflow-auto">
                {isPDF(selectedProject.file) ? (
                  <iframe
                    src={selectedProject.file}
                    title="PDF Viewer"
                    className="w-full h-full"
                  />
                ) : (
                  <img
                    src={selectedProject.file}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain p-8"
                  />
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}