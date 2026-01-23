import { Menu, X } from "lucide-react"; // Import ikon
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import SocialMediaBox from "@/components/common/socialmedia/SocialMediaBox.tsx";

function MobileTabNav() {
  const [isOpen, setOpen] = useState(false);
  return (
    <DropdownMenu open={isOpen} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {isOpen ? (
            <X className="h-6 w-6 transition-all rotate-0" />
          ) : (
            <Menu className="h-6 w-6 transition-all rotate-0" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex flex-col gap-2 justify-start">
          <div>
            <DropdownMenuItem>
              <a className="hover:text-gray-400 transition-colors">Home</a>
            </DropdownMenuItem>
            <DropdownMenuItem>Portfolio</DropdownMenuItem>
            <DropdownMenuItem>About</DropdownMenuItem>
            <DropdownMenuItem>
              <a
                href="#contact"
                className="hover:text-gray-400 transition-colors"
              >
                Contact Me
              </a>
            </DropdownMenuItem>
          </div>
          <hr className="border-t border-gray-300 w-full" />
          <div className="p-2">
            <SocialMediaBox fill="text-black" />
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default MobileTabNav;
