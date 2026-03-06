import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./pages/home"
import About from "./pages/about"
import Design from "./pages/design"
import Videography from "./pages/videography"
import Development from "./pages/development"
import Contact from "./pages/contact"

function App() {
  return (
    <Router>
      <div className="text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<Design />} />
          <Route path="/videography" element={<Videography />} />
          <Route path="/development" element={<Development />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App