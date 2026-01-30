import InfiniteSlider from "@/components/smoothui/infinite-slider/index.tsx";
import skillsData from "@/content/programsData.json";

function TechnologySection() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full px-24">
      {/* Basic horizontal slider */}
      <div className="w-full ">
        <InfiniteSlider gap={16} speed={50}>
          {Array.from({ length: skillsData.length }, (_, i) => (
            <div
              className="flex h-10 w-30 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground"
              key={i}
            >
              <div className="flex justify-center items-center gap-2">
                <img src={skillsData[i].logo} className="w-5" />
                {skillsData[i].name}
              </div>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}

export default TechnologySection;
