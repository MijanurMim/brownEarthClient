import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/animatedRoutes/AnimatedRoutes";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/scrolToTop/ScrollToTop";

function App() {
  return (
    <Router>
      {/* common  */}
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      {/* Common */}
      <Footer />
    </Router>
  );
}

export default App;
