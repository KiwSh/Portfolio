import Aboutme from "../Aboutme";
import Contact from "../Contact";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortofolio from "../MyPortofolio";
import Skill from "../Skill";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Skill />
      <Aboutme />
      <MyPortofolio />
      <Contact />
      <Footer />
    </>
  );
}