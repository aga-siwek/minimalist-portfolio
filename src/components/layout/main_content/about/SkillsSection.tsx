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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 border-solid bg-card rounded-2xl border border-border/50 p-4 lg:p-8 shadow-lg">
          <div className="flex gap-4 justify-start items-center">
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
        <div className="flex flex-col gap-4 border-solid bg-card rounded-2xl border border-border/50 p-4 lg:p-8 shadow-lg">
          <div className="flex gap-4 justify-start items-center">
            <Users />
            <h4 className="text-lg font-bold">Soft Skills</h4>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start">
            <div className="flex gap-2 justify-start items-start">
              <HeartHandshake />
              <p>Building business relationships</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <HeartHandshake />
              <p>Team and subcontractor management
                </p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <HeartHandshake />
              <p>Creative thinking in project</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <HeartHandshake />
              <p>4 lorem imsum skils description</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 border-solid bg-card rounded-2xl border border-border/50 p-4 lg:p-8 shadow-lg">
          <div className="flex gap-4 justify-start items-center">
            <BicepsFlexed />
            <h4 className="text-lg font-bold">Core Competencies</h4>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start">
            <div className="flex gap-2 justify-start items-start">
              <Clipboard />
              <p>Data analysis and data-driven</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <Clipboard />
              <p>Project organization and coordination</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <Clipboard />
              <p>Google Tag Manager – understanding DOM structure</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <Clipboard />
              <p>Web Analytics – understanding user behaviour (UX)</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-solid bg-card rounded-2xl border border-border/50 p-4 lg:p-8 shadow-lg">
          <div className="flex gap-4 justify-start items-center">
            <PawPrint />
            <h4 className="text-lg font-bold">Random facts</h4>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start">
            <div className="flex gap-2 justify-start items-start">
              <Coffee />
              <p>1 lorem imsum skils description</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <Coffee />
              <p>2 lorem imsum skils description</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <Coffee />
              <p>3 lorem imsum skils description</p>
            </div>
            <div className="flex gap-2 justify-start items-start">
              <Coffee />
              <p>4 lorem imsum skils description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
