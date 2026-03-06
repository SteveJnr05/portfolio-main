import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#050816] overflow-hidden px-10 py-6">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold">
          S
        </div>
        <span className="text-lg font-semibold">SteveJnr</span>
      </Link>

      <div className="flex gap-8 text-gray-300">
        {["/", "/about", "/design", "/videography", "/development", "/contact"].map((path, index) => {
          const labels = ["Home", "About", "Design", "Videography", "Development", "Contact"]

          return (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `relative hover:text-white transition duration-300 
                 ${isActive ? "text-white" : ""}`
              }
            >
              {labels[index]}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}