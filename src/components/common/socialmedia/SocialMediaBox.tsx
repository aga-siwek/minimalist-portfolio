import linkedinIcon from "@/assets/linkedin.svg";
import githubIcon from "@/assets/github.svg";
import { ReactSVG } from "react-svg";

function SocialMediaBox({ fill = "text-white" }) {
  return (
    <div className="flex gap-2 items-center">
      <a
        href="https://google.com"
        target="blank"
        className={`fill-current ${fill} hover:text-gray-400`}
      >
        <ReactSVG src={githubIcon} />
      </a>
      <a
        href="https://google.com"
        target="blank"
        className={`fill-current ${fill} hover:text-gray-400`}
      >
        <ReactSVG src={linkedinIcon} />
      </a>
    </div>
  );
}

export default SocialMediaBox;
