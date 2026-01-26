// import { Menu, X } from "lucide-react"; // Import ikon
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { useState } from "react";
// import SocialMediaBox from "@/components/common/socialmedia/SocialMediaBox.tsx";
//
// function MobileTabNav() {
//   const [isOpen, setOpen] = useState(false);
//   return (
//     <DropdownMenu open={isOpen} onOpenChange={setOpen}>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon">
//           {isOpen ? (
//             <X className="h-6 w-6 transition-all rotate-0" />
//           ) : (
//             <Menu className="h-6 w-6 transition-all rotate-0" />
//           )}
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent>
//         <div className="flex flex-col gap-2 justify-start">
//           <div>
//             <DropdownMenuItem>
//               <a className="hover:text-gray-400 transition-colors">Home</a>
//             </DropdownMenuItem>
//             <DropdownMenuItem>Portfolio</DropdownMenuItem>
//             <DropdownMenuItem>About</DropdownMenuItem>
//             <DropdownMenuItem>
//               <a
//                 href="#contact"
//                 className="hover:text-gray-400 transition-colors"
//               >
//                 Contact Me
//               </a>
//             </DropdownMenuItem>
//           </div>
//           <hr className="border-t border-gray-300 w-full" />
//           <div className="p-2">
//             <SocialMediaBox fill="text-black" />
//           </div>
//         </div>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
// export default MobileTabNav;

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import ikon
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const DRAWER_SIDES = ["top"] as const;

export function MobileTabNav() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex flex-wrap gap-2">
      {DRAWER_SIDES.map((side) => (
        <Drawer key={side} direction="top">
          <DrawerTrigger asChild>
            <Button variant="outline" size="icon">
              {isOpen ? (
                <X className="h-6 w-6 transition-all rotate-0" />
              ) : (
                <Menu className="h-6 w-6 transition-all rotate-0" />
              )}
            </Button>
          </DrawerTrigger>
          <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh] p-8">
            <DrawerClose asChild>
              <div className="flex justify-end items-center w-full">
                <Button variant="ghost" size="icon">
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </DrawerClose>
            <div className="flex flex-col gap-4 no-scrollbar overflow-y-auto px-4">
              <a
                href="#home"
                className="hover:text-gray-400 transition-colors "
              >
                Home
              </a>
              <a
                href="#portfolio"
                className="hover:text-gray-400 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="hover:text-gray-400 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-gray-400 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}
export default MobileTabNav;
