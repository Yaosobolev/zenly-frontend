import { Button } from "@/components/ui/button";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { PiUsersBold } from "react-icons/pi";
import { TbMessageCircle } from "react-icons/tb";

import { useWindowWidth } from "@react-hook/window-size";
import { Nav } from "./ui/nav";
import Logo from "./ui/logo";
import Line from "./ui/line";
import Notifications from "./Notifications";
import useSidebarStore from "@/store/sidebarStore";
import ShareButton from "./ui/shareButton";
import Logout from "./ui/logout";
import { TestInputFriend } from "./ui/TESTINPUTFRIEND";
import Messages from "./Messages";

const Sidebar = () => {
  const { isCollapsed, sidebarWidth, toggleSidebar } = useSidebarStore();

  const onlyWidth = useWindowWidth();
  const mobileWidth: boolean = onlyWidth < 768;

  return (
    <div
      className={`flex flex-col justify-between fixed z-50 h-screen min-w-[100px] px-3 pb-10 pt-24 bg-slate-100/70 backdrop-blur-sm transition-all duration-700 ease-linear `}
      style={{ width: `${!mobileWidth ? sidebarWidth : 0}px` }}
    >
      <Messages />
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7 z-20">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="h-auto p-4 rounded-full transition-all bg-white hover:bg-white"
          >
            {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </Button>
        </div>
      )}
      <div>
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
        <Notifications isCollapsed={mobileWidth ? true : isCollapsed} />
      </div>
      <div>
        <TestInputFriend />
        <ShareButton />
        <Logout />
      </div>
    </div>
  );
};

export default Sidebar;
