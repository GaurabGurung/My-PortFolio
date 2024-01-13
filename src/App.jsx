import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./route/contact-page/contact-page";
import Home from "./route/homePage/homePage";
import Navbar from "./components/nav-bar/nav-bar";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
