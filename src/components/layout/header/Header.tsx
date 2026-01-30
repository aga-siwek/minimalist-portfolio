import Logo from "../../common/logo/Logo.tsx";

import MobileTabNav from "@/components/layout/header/MobileTabNav.tsx";
import DesktopNav from "@/components/layout/header/DesktopNav.tsx";

function Header({ handleMoodChange }) {
  return (
    <div className=" flex justify-center bg-foreground py-4 px-4 lg:px-24 w-full">
      <div className="flex justify-between w-full items-center max-w-7xl">
        <Logo />
        <div className="lg:hidden">
          <MobileTabNav />
        </div>
        <div className="hidden lg:block">
          <DesktopNav handleMoodChange={handleMoodChange} />
        </div>
      </div>
    </div>
  );
}

export default Header;
