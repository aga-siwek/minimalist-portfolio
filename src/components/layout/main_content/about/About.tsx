import SectionText from "@/components/common/section/SectionText.tsx";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col gap-8 w-full justify-center items-center p-2"
    >
      <div>
        <div className="w-full">
          <SectionText text="About me" />
        </div>
        <div>
          <p>
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
      <div>
        <div>
      <SectionText text="Skills and experience" />
        </div>
      </div>
      <div>
        <div>
          <SectionText text="Random fact" />
        </div>
      </div>
    </div>
  );
}
export default About;
