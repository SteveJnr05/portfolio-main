import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

function FadeInSection({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "import.meta.env.SERVICE_ID",
        "import.meta.env.TEMPLATE_ID",
        formRef.current,
        "import.meta.env.PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false)); // ✅ Stop loading
  };

  return (
    <section className="min-h-screen bg-[#050816] text-white px-6 md:px-20 py-24">
      {/* Heading */}
      <FadeInSection>
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Get In Touch
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>
      </FadeInSection>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* LEFT - FORM */}
        <FadeInSection>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
                className="w-full mt-2 p-4 rounded-xl bg-[#0f0f1a] border border-purple-500/20 focus:border-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="your@email.com"
                required
                className="w-full mt-2 p-4 rounded-xl bg-[#0f0f1a] border border-purple-500/20 focus:border-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                required
                className="w-full mt-2 p-4 rounded-xl bg-[#0f0f1a] border border-purple-500/20 focus:border-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
                className="w-full mt-2 p-4 rounded-xl bg-[#0f0f1a] border border-purple-500/20 focus:border-purple-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                  ></path>
                </svg>
              ) : (
                <Send size={18} />
              )}
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="text-center text-gray-400 mt-2">{status}</p>}
          </form>
        </FadeInSection>

        {/* RIGHT SIDE */}
        <FadeInSection>
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0f0f1a] border border-purple-500/20">
                  <Mail className="text-purple-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p>swantastephen@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0f0f1a] border border-purple-500/20">
                  <Phone className="text-purple-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p>+234 901-078-4720</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0f0f1a] border border-purple-500/20">
                  <MapPin className="text-purple-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p>Abuja, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Connect With Me</h2>

              <div className="flex gap-4">
                <div className="p-4 rounded-xl bg-[#0f0f1a] border border-purple-500/20 hover:bg-purple-500/20 transition cursor-pointer">
                  <Github size={20} />
                </div>
                <div className="p-4 rounded-xl bg-[#0f0f1a] border border-purple-500/20 hover:bg-purple-500/20 transition cursor-pointer">
                  <Linkedin size={20} />
                </div>
                <div className="p-4 rounded-xl bg-[#0f0f1a] border border-purple-500/20 hover:bg-purple-500/20 transition cursor-pointer">
                  <Twitter size={20} />
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/20">
              <h3 className="text-lg font-semibold mb-3">
                Available for Freelance
              </h3>
              <p className="text-gray-400 text-sm">
                I'm currently available for freelance projects. Whether you need
                design, video production, or development work, let's create something amazing together.
              </p>

              <button className="mt-6 px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition">
                Open to Opportunities
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}