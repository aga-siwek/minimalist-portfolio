import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function DownloadCV() {
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="outline" className="w-8 h-8" aria-label="Submit">
          <Download />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-32 flex-col gap-0.5">
        <div className="text-muted-foreground mt-1 text-xs">Download CV</div>
      </HoverCardContent>
    </HoverCard>
  );
}
export default DownloadCV;
