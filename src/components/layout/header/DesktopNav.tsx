import SocialMediaBox from "@/components/common/socialmedia/SocialMediaBox.tsx";
import DownloadCV from "@/components/layout/header/DownloadCV.tsx";
import MoodChange from "@/components/layout/header/MoodChange.tsx";

function DesktopNav({ handleMoodChange }) {
  return (
    <div className="flex gap-8 justify-start items-center">
      <div className="flex gap-2 justify-start items-center text-white ">
        <a
          href="#home"
          className="text-primary-foreground hover:text-gray-400 transition-colors"
        >
          Home
        </a>
        <a
          href="#portfolio"
          className="text-primary-foreground hover:text-gray-400 transition-colors"
        >
          Portfolio
        </a>
        <a
          href="#about"
          className="text-primary-foreground hover:text-gray-400 transition-colors"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-primary-foreground hover:text-gray-400 transition-colors"
        >
          Contact Me
        </a>
      </div>
      <div>
        <SocialMediaBox />
      </div>
      <div className="flex gap-2 justify-start items-center">
        <MoodChange handleMoodChange={handleMoodChange} />
      </div>
    </div>
  );
}
export default DesktopNav;
