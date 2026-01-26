import SectionText from "@/components/common/section/SectionText.tsx";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import ContactForm from "@/components/layout/main_content/contact/ContactForm.tsx";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col gap-8 w-full justify-center items-center p-2"
    >
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <SectionText text="Contact me" />
        <p>Have a project in mind? Let's build something great together.</p>

        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Information</h2>
            <div>
              <p>Agnieszka Siwek</p>
              <div>
                <Mail />
                <a
                  href="mailto:kontakt@twojadomena.pl"
                  className="hover:text-primary transition-colors"
                >
                  kontakt@twojadomena.pl
                </a>
              </div>
              <div>
                <Phone />
                <p>600 373 323</p>
              </div>
            </div>
            <div>
              <form></form>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
