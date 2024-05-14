import Sidebar from "@/components/Sidebar";
import React from "react";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="size-full ">{children}</div>
    </div>
  );
};

export default Layout;
