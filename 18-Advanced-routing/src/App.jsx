import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CourseDetails from "./pages/CourseDetails";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Kids from "./pages/Kids";
import Men from "./pages/Men";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Women from "./pages/Women";
const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* usenavigate used in about section */}
        <Route path="/about" element={<About />} />
        {/* Dynamic routing start */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:CourseId" element={<CourseDetails />} />
        {/* Dynamic routing end */}
        <Route path="/contact" element={<Contact />} />
        {/* nested routing for route */}
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
