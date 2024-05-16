import { Button } from "@/components/ui/button";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { PiUsersBold } from "react-icons/pi";
import { TbMessageCircle } from "react-icons/tb";

import { useWindowWidth } from "@react-hook/window-size";
import { useState } from "react";
import { Nav } from "./ui/nav";
import Logo from "./ui/logo";
import Line from "./ui/line";
import Notifications from "./Notifications";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState<number>(300);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
    setSidebarWidth((prevWidth) => (prevWidth === 0 ? 300 : 0));
  }
  // ! ЦВЕТ НА ВЫБОР
  const color: string = "2";
  const testColor = [
    { color: "sidebar/20", blur: "[80px]" },
    { color: "slate-100/70", blur: "sm" },
  ];

  const selectColor = color === "1" ? testColor[0] : testColor[1];
  // ! ЦВЕТ НА ВЫБОР

  console.log(selectColor.color);
  return (
    <div
      className={`fixed z-50 h-screen min-w-[100px] px-3 pb-10 pt-24 bg-slate-100/70 backdrop-blur-sm transition-all duration-700 ease-linear `}
      style={{ width: `${sidebarWidth}px` }}
    >
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7 z-20">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="h-auto p-4 rounded-full transition-all bg-white hover:bg-white"
            // className={`h-auto p-4 rounded-full transition-all bg-white hover:bg-${selectColor.color}`}
          >
            {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </Button>
        </div>
      )}

      <Logo isCollapsed={mobileWidth ? true : isCollapsed} />
      <Line />
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Сообщения",
            href: "/",
            icon: TbMessageCircle,
            variant: "default",
          },
          {
            title: "Друзья",
            href: "/",
            icon: PiUsersBold,
            variant: "default",
          },
        ]}
      />
      <Line />
      <Notifications />
    </div>
  );
};

export default Sidebar;
