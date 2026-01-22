import Logo from "../../common/logo/Logo.tsx";

import MobileTabNav from "@/components/layout/header/MobileTabNav.tsx";
import DesktopNav from "@/components/layout/header/DesktopNav.tsx";

function Header() {
  return (
    <div className="flex justify-between items-center bg-black py-4 px-4 lg:px-24">
      <Logo />
      <div className="lg:hidden">
        <MobileTabNav />
      </div>
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
    </div>
  );
}

export default Header;
