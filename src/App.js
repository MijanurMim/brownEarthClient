import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/animatedRoutes/AnimatedRoutes";
import Footer from "./components/footer/Footer";
import GoToTop from "./components/goToTop/GoToTop";
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

      <GoToTop />
      <Footer />
    </Router>
  );
}

export default App;
