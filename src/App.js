import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
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
