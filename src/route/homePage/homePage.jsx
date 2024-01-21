import Hero from "../../components/hero/hero";
import Qualification from "../../components/Qualification/qualification";
import Skills from "../../components/skills/skills";
import Projects from "../../components/projects/projects";
import Footer from "../../components/footer/footer";
import ScrollUp from "../../components/scroll-up/scroll-up";
import Test from "../../components/testing/test";

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
