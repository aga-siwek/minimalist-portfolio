import SectionText from "@/components/common/section/SectionText.tsx";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col gap-8 w-full justify-center items-center p-2"
    >
      <div className="w-full">
        <SectionText text="About me" />
      </div>
    </div>
  );
}
export default About;
