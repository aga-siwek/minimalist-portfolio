import skillsData from "@/content/programsData.json";

function TechnologySectionMobileTab() {
    return (
        <div className="grid grid-cols-4 gap-6">
            {skillsData.map((item) => (
                <div className="flex flex-col items-center gap-2" key={item.name}>
                    <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="h-6 w-12 object-contain"
                    />
                    <p className="text-sm">{item.name}</p>
                </div>
            ))}
        </div>
    );
}

export default TechnologySectionMobileTab;