import Navbar from "./components/navbar";
import Intro from './components/intro/intro'
import Skills from "./components/skills/skills";
import Works from "./components/works/work";
import Contact from "./components/Contact/contact";
import Footer from './components/Footer/footer'
import Hero from './components/Hero/hero'
import Project from './components/Projects/project'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
