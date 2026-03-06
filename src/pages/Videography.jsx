import { useState, useEffect } from "react";
import { X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const videos = [
  {
    id: 1,
    category: "Youtube",
    title: "Anime Edit",
    description: "Mashup clips from multiple animes",
    thumbnail: "/thumb3.jpg",
    file: "https://res.cloudinary.com/div5w2jov/video/upload/v1772766892/My_Video_y07zax.mp4",
  },
  {
    id: 2,
    category: "Music",
    title: "Music Video",
    description: "Creative direction and post-production",
    thumbnail: "/thumb4.jpg",
    file: "https://res.cloudinary.com/div5w2jov/video/upload/v1772767400/Miles_The_Mystical_-_Bad_Butterfly_Official_Music_Video_ihfsas.mp4",
  },
];

// Fade-in wrapper
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

export default function Videography() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "auto";
  }, [selectedVideo]);

  return (
    <section className="min-h-screen bg-[#050816] text-white px-6 md:px-20 py-24">

      {/* Heading */}
      <FadeInSection>
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Videography
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl">
            Cinematic storytelling through video production and editing
          </p>
        </div>
      </FadeInSection>

      {/* Video Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {videos.map((video) => (
          <FadeInSection key={video.id}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedVideo(video)}
              className="relative bg-[#0f0f1a] rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500 transition cursor-pointer group"
            >

              {/* Thumbnail */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play
                    size={60}
                    className="text-white opacity-80 group-hover:scale-110 transition"
                  />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-lg font-semibold">
                  Click to Watch
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">
                  {video.category}
                </span>

                <h2 className="text-xl font-semibold mt-4">{video.title}</h2>

                <p className="text-gray-400 text-sm mt-2">{video.description}</p>
              </div>
            </motion.div>
          </FadeInSection>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f0f1a] w-full max-w-5xl rounded-2xl overflow-hidden relative border border-purple-500/30 shadow-2xl"
            >

              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white hover:text-purple-400 transition z-10"
              >
                <X size={26} />
              </button>

              {/* Video Player */}
              <video
                src={selectedVideo.file}
                controls
                autoPlay
                className="w-full max-h-[80vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
