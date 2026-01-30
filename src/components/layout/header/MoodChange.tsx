import { Button } from "@/components/ui/button.tsx";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function MoodChange({ handleMoodChange }) {
  const isDarkMood = document.documentElement.classList.contains("dark");
  console.log("isdark", isDarkMood);

  const showIcon: any = () => {
    if (isDarkMood) {
      return <Moon className="text-primary-foreground"/>;
    } else if (!isDarkMood) {
      return <Sun className="text-primary-foreground " />;
    }
  };

  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button
          aria-label="Submit"
          className="w-8 h-8"
          onClick={() => handleMoodChange()}
        >
          {showIcon()}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-32 flex-col gap-0.5">
        <div className="text-muted-foreground mt-1 text-xs">Mood Change</div>
      </HoverCardContent>
    </HoverCard>
  );
}
export default MoodChange;
