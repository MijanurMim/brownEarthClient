import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import SingleProject from "./pages/singleProject/SingleProject";

function App() {
  return (
    <Router>
      {/* common  */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/projects" element={<SingleProject />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Common */}
      <Footer />
    </Router>
  );
}

export default App;
