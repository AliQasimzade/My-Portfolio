import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{overflow:"hidden"}}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
     <Footer />
    </div>
  );
}

export default App;
