import SectionText from "@/components/common/section/SectionText.tsx";
import TechnologySection from "@/components/layout/main_content/about/TechnologySection.tsx";
import SkillsSection from "@/components/layout/main_content/about/SkillsSection.tsx";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col gap-8 w-full justify-center items-center p-2"
    >
      <div className="flex flex-col w-full gap-8">
        <div className="w-full flex-col">
          <SectionText text="About me" />
        </div>
        <div className="lg:px-24">
          <p className="text-lg">
            I create end-to-end web projects – from frontend layers to backend
            logic. I combine many years of analytical and data-driven experience
            with newly developed programming skills. I have worked in Agile
            environments and in close cooperation with IT teams, which allows me
            to navigate development processes efficiently. I am looking for a
            role where I can further grow my skills in web technologies and
            application architecture.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col gap-8">
          <SectionText text="Technology" />
          <div className="hidden lg:block">
            <TechnologySection />
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex w-full flex-col gap-8">
          <SectionText text="Skils" />
          <SkillsSection />
        </div>
      </div>
    </div>
  );
}
export default About;
