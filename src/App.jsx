import styles from "./App.module.css";
import Hero from "./components/Hero/hero";
import Navbar from "./components/nav-bar/nav-bar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
