import { Button } from "@/components/ui/button";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

import { useWindowWidth } from "@react-hook/window-size";
import { useState } from "react";
import { Nav } from "./ui/nav";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState<number>(170);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
    setSidebarWidth((prevWidth) => (prevWidth === 0 ? 170 : 0));
  }

  return (
    <div
      className={`fixed z-50 transition-all backdrop-blur-sm  ease-linear h-screen min-w-[80px] border-r px-3 pb-10 pt-24 bg-slate-100/90 `}
      style={{ width: `${sidebarWidth}px`, transitionDuration: "0.7s" }} // Применяем текущую ширину
    >
      {/* <div className="relative size-full"> */}
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7 z-20">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-4 bg-white h-auto"
          >
            {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Сообщения",
            href: "/",
            icon: FaChevronRight,
            variant: "default",
          },
          {
            title: "Друзья",
            href: "/",
            icon: FaChevronRight,
            variant: "default",
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
