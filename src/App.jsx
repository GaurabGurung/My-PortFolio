import styles from "./App.module.css";
import Hero from "./components/hero/hero";
import Education from "./components/education/education";
import Navbar from "./components/nav-bar/nav-bar";
import Skills from "./components/skills/skills";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
