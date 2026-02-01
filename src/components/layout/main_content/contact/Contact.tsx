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
        <p>Open to new challenges. Let’s discuss how I can support your team.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <section className="flex flex-col gap-8 w-full max-w-2xl mx-auto scroll-mt-20 bg-card rounded-2xl border border-border/50 p-4 lg:p-8 shadow-lg">
            <h2 className="text-2xl font-bold tracking-tight">Information</h2>
            <div className="flex flex-col gap-4 justify-start items-start">
              <div className="flex gap-4 justify-start items-start">
                <Mail />
                <a
                  href="mailto:kontakt@twojadomena.pl"
                  className="hover:text-primary transition-colors"
                >
                  kontakt@twojadomena.pl
                </a>
              </div>
              <div className="flex gap-4 justify-start items-start">
                <Phone />
                <p>600 373 323</p>
              </div>

            </div>
            <h2 className="text-2xl font-bold tracking-tight">Follow me</h2>
            <SocialMediaBox fill="text-primary" size="w-8 h-8"/>

          </section>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
