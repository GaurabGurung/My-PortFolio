import Hero from "../../components/hero/hero";
import Education from "../../components/education/education";
import Skills from "../../components/skills/skills";
import Projects from "../../components/projects/projects";
import Footer from "../../components/footer/footer";
import ScrollUp from "../../components/scroll-up/scroll-up";

const Home = () => {
  return (
    <>
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Footer />
      <ScrollUp />
    </>
  );
};

export default Home;
