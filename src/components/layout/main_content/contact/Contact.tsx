import SectionText from "@/components/common/section/SectionText.tsx";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import ContactForm from "@/components/layout/main_content/contact/ContactForm.tsx";
import SocialMediaBox from "@/components/common/socialmedia/SocialMediaBox.tsx";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col gap-8 w-full justify-center items-center p-2"
    >
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <SectionText text="Contact me" />
        <p>
          Open to new challenges. Let’s discuss how I can support your team.
        </p>

        <section className="flex flex-col md:flex-row gap-8 lg:gap-24 justify-center items-start w-full mx-auto scroll-mt-20 bg-card rounded-2xl border border-border/50 p-4 lg:p-8 shadow-lg">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold tracking-tight">Information</h2>
            <div className="flex flex-col gap-4 justify-start items-start">
              <div className="flex gap-4 justify-start items-start">
                <Mail />
                <a
                  href="mailto:siwek.dev@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  siwek.dev@gmail.com
                </a>
              </div>
              <div className="flex gap-4 justify-start items-start">
                <Phone />
                <a href="tel:+48600373323" className="hover:text-primary transition-colors">+48 600 373 323</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold tracking-tight">Follow me</h2>
            <SocialMediaBox fill="text-primary" size="w-8 h-8" />
          </div>
        </section>
        {/*<div>*/}
        {/*  <ContactForm />*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
export default Contact;
