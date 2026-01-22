import SectionText from "@/components/common/section/SectionText.tsx";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col gap-8 w-full justify-center items-center p-2"
    >
      <div className="w-full">
        <SectionText text="Contact me" />
      </div>
    </div>
  );
}
export default Contact;
