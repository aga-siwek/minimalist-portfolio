import SectionText from "@/components/common/section/SectionText.tsx";
import projectsData from "@/jsonData/projectsData.json";
import PortfolioCart from "@/components/layout/main_content/portfolio/PortfolioCard.tsx";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="flex flex-col gap-8 w-full justify-center items-center p-2"
    >
      <div className="w-full">
        <SectionText text="Check my portfolio" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
        <PortfolioCart {...projectsData["exampleProject1"]} />
        <PortfolioCart {...projectsData["exampleProject2"]} />
        <PortfolioCart {...projectsData["exampleProject1"]} />
        <PortfolioCart {...projectsData["exampleProject2"]} />
        <PortfolioCart {...projectsData["exampleProject1"]} />
        <PortfolioCart {...projectsData["exampleProject2"]} />
      </div>
    </div>
  );
}
export default Portfolio;
