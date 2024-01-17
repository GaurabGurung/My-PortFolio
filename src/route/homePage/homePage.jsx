import Hero from "../../components/hero/hero";
import Qualtification from "../../components/Qualtification/qualtification";
import Skills from "../../components/skills/skills";
import Projects from "../../components/projects/projects";
import Footer from "../../components/footer/footer";
import ScrollUp from "../../components/scroll-up/scroll-up";

const Home = () => {
  return (
    <>
      <Hero />
      <Qualtification />
      <Skills />
      <Projects />
      <Footer />
      <ScrollUp />
    </>
  );
};

export default Home;
