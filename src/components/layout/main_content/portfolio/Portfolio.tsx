import SectionText from "@/components/common/section/SectionText.tsx";
import projectsData from "@/content/projectsData.json";
import PortfolioCard from "@/components/layout/main_content/portfolio/PortfolioCard.tsx";

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
        <PortfolioCard {...projectsData["MemoryGame"]} />
        <PortfolioCard {...projectsData["HangmanGame"]} />
        <PortfolioCard {...projectsData["TicTacToeGame"]} />
        <PortfolioCard {...projectsData["WeatherApp"]} />
        <PortfolioCard {...projectsData["MoodTrack"]} />
        <PortfolioCard {...projectsData["MemoryGameBackend"]} />
        <PortfolioCard {...projectsData["HelperAgent"]} />
      </div>
    </div>
  );
}
export default Portfolio;
