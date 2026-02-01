import { BicepsFlexed } from "lucide-react";
import { HeartHandshake } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Presentation } from "lucide-react";
import { Clipboard } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Users } from "lucide-react";
import { PawPrint } from "lucide-react";
import { Coffee } from "lucide-react";

function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full ">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 border-solid bg-card rounded-2xl border border-border/50 p-4 lg:p-8 shadow-lg bg-[url('/skills-bg-1.png')] bg-cover bg-center">
          <div className="flex gap-4 justify-start items-center ">
            <GraduationCap />
            <h4 className="text-lg font-bold">Certificates</h4>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start">
            <div className="flex gap-2 justify-start items-start">
              <BookOpen />
              <p>Meta Front-End Developer</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <BookOpen />
              <p>Meta Back-End Developer</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <BookOpen />
              <p>Gynvael ColdWind – Python 10 Projects</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <BookOpen />
              <p>IPMA-D (International Project Management Association)</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-solid bg-card rounded-2xl border border-border/50 p-4 lg:p-8 shadow-lg bg-[url('/skills-bg-2.png')] bg-cover bg-center">
          <div className="flex gap-4 justify-start items-center">
            <Users />
            <h4 className="text-lg font-bold">Soft Skills</h4>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start">
            <div className="flex gap-2 justify-start items-start">
              <HeartHandshake />
              <p>Professional business relationship building</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <HeartHandshake />
              <p>Effective collaboration in Scrum teams
                </p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <HeartHandshake />
              <p>Strong algorithmic and analytical thinking</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <HeartHandshake />
              <p>Proactive problem solving and optimization</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 border-solid bg-card rounded-2xl border border-border/50 p-4 lg:p-8 shadow-lg bg-[url('/skills-bg-3.png')] bg-cover bg-center">
          <div className="flex gap-4 justify-start items-center">
            <BicepsFlexed />
            <h4 className="text-lg font-bold">Core Competencies</h4>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start">
            <div className="flex gap-2 justify-start items-start">
              <Clipboard />
              <p>Full-Stack development foundations</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <Clipboard />
              <p>Data-Driven Decision Making</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <Clipboard />
              <p>Core logic and API integration</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <Clipboard />
              <p>Web Analytics and UX basics</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-solid bg-card rounded-2xl border border-border/50 p-4 lg:p-8 shadow-lg bg-[url('/skills-bg-4.png')] bg-cover bg-center">
          <div className="flex gap-4 justify-start items-center">
            <PawPrint />
            <h4 className="text-lg font-bold">Random facts</h4>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start">
            <div className="flex gap-2 justify-start items-start">
              <Coffee />
              <p>Australian Shepherd owner</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <Coffee />
              <p>Passionate about Obedience training</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <Coffee />
              <p>Dance classes enthusiast</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <Coffee />
              <p>Active long-distance walker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
