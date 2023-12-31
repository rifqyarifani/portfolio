import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Projects from "./components/projects";
import About from "./components/about";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
