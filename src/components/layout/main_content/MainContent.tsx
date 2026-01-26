import Portfolio from "@/components/layout/main_content/portfolio/Portfolio.tsx";
import Intro from "@/components/layout/main_content/intro/Intro.tsx";
import About from "@/components/layout/main_content/about/About.tsx";
import Contact from "@/components/layout/main_content/contact/Contact.tsx";

function MainContent() {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 justify-center items-center px-8 lg:px-24 max-w-7xl">
      <Intro />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default MainContent;
