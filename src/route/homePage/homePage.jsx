import Hero from "../../components/hero/hero.jsx";
import Qualification from "../../components/qualification/qualification.jsx";
import Skills from "../../components/skills/skills";
import Projects from "../../components/projects/projects";
import Footer from "../../components/footer/footer";
import ScrollUp from "../../components/scroll-up/scroll-up";

const Home = () => {
  return (
    <>
      <Hero />
      <Qualification />
      <Skills />
      <Projects />
      <Footer />
      <ScrollUp />
      {/* <Test /> */}
    </>
  );
};

export default Home;
