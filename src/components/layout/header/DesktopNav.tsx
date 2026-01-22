import SocialMediaBox from "@/components/common/socialmedia/SocialMediaBox.tsx";

function DesktopNav() {
  return (
    <div className="flex gap-8 justify-start items-center">
      <div className="flex gap-2 justify-start items-center text-white ">
        <a
          href="#home"
          className="text-white hover:text-gray-400 transition-colors"
        >
          Home
        </a>
        <a
          href="#portfolio"
          className="text-white hover:text-gray-400 transition-colors"
        >
          Portfolio
        </a>
        <a
          href="#about"
          className="text-white hover:text-gray-400 transition-colors"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-white hover:text-gray-400 transition-colors"
        >
          Contact Me
        </a>
      </div>
      <div>
        <SocialMediaBox />
      </div>
    </div>
  );
}
export default DesktopNav;
