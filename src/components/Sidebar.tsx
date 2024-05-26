import { useState } from "react";

import { useWindowWidth } from "@react-hook/window-size";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { PiUsersBold } from "react-icons/pi";
import { TbMessageCircle } from "react-icons/tb";

import useSidebarStore from "@/store/sidebarStore";

import {
  Friends,
  Messages,
  Notifications,
  Logout,
  Line,
  Logo,
  ShareButton,
  Nav,
  Button,
} from "./";

export const Sidebar: React.FC = () => {
  const [isFriendsVisible, setIsFriendsVisible] = useState(false);
  const [isMessagesVisible, setIsMessagesVisible] = useState(false);

  const handleToggleMessages = () => {
    setIsMessagesVisible(true);
    setIsFriendsVisible(false);
  };

  const handleToggleFriends = () => {
    setIsFriendsVisible(true);
    setIsMessagesVisible(false);
  };

  const handleClose = () => {
    setIsFriendsVisible(false);
    setIsMessagesVisible(false);
  };

  const { isCollapsed, sidebarWidth, toggleSidebar } = useSidebarStore();

  const onlyWidth = useWindowWidth();
  const mobileWidth: boolean = onlyWidth < 768;

  return (
    <div className="fixed z-10 flex flex-row gap-8 ">
      <div
        className={`flex flex-col justify-between   h-screen min-w-[100px] px-3 pb-10 pt-24 bg-slate-100/70 backdrop-blur-sm transition-all duration-700 ease-linear `}
        style={{ width: `${!mobileWidth ? sidebarWidth : 100}px` }}
      >
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
                toggle: handleToggleMessages,
                isActive: isMessagesVisible,
                icon: TbMessageCircle,
                variant: "default",
              },
              {
                title: "Друзья",
                toggle: handleToggleFriends,
                isActive: isFriendsVisible,
                icon: PiUsersBold,
                variant: "default",
              },
            ]}
          />
          <Line />
          <Notifications isCollapsed={mobileWidth ? true : isCollapsed} />
        </div>
        <div>
          <ShareButton />
          <Logout />
        </div>
      </div>

      {isFriendsVisible && <Friends handleClose={handleClose} />}
      {isMessagesVisible && <Messages handleClose={handleClose} />}
    </div>
  );
};
