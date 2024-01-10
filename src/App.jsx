import styles from "./App.module.css";
import Hero from "./components/hero/hero";
import Education from "./components/education/education";
import Navbar from "./components/nav-bar/nav-bar";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
