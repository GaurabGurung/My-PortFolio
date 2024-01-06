import styles from "./App.module.css";
import Hero from "./components/hero/hero";
import Education from "./components/education/education";
import Navbar from "./components/nav-bar/nav-bar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Education />
    </div>
  );
}

export default App;
