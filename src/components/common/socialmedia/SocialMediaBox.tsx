import linkedinIcon from "@/assets/linkedin.svg";
import githubIcon from "@/assets/github.svg";
import { ReactSVG } from "react-svg";

function SocialMediaBox({ fill = "text-primary-foreground", size="w-6 h-6" }) {
  return (
    <div className="flex gap-2 items-center">
      <a
        href="https://google.com"
        target="blank"
        className={`fill-current ${fill} hover:text-gray-400`}
      >
        <ReactSVG src={githubIcon} className={size} />
      </a>
      <a
        href="https://google.com"
        target="blank"
        className={`fill-current ${fill} hover:text-gray-400`}
      >
        <ReactSVG src={linkedinIcon} className={size} />
      </a>
    </div>
  );
}

export default SocialMediaBox;
