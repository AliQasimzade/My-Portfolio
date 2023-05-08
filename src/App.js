import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Joyride from 'react-joyride';

const App = () => {

  const steps = [
    {
      target: '.about',
      content: 'Look about me'
    },
    {
      target: '.skills',
      content: 'Look my skills'
    },
    {
      target: '.work',
      content: 'Look my works'
    },
    {
      target: '.contact',
      content: 'Contact me'
    }
  ]
  return (
    <div>
      <Joyride steps={steps} continuous={true} />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
