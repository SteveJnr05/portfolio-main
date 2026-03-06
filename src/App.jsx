import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Design from "./pages/Design"
import Videography from "./pages/Videography"
import Development from "./pages/Development"
import Contact from "./pages/Contact"

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