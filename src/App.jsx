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
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Design" element={<Design />} />
          <Route path="/Videography" element={<Videography />} />
          <Route path="/Development" element={<Development />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App