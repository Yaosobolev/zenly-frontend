import Sidebar from "@/components/Sidebar";
import React from "react";
import { Toaster } from "sonner";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    // <div className=" ">

    <>
      <Toaster richColors position="top-center" />

      <Sidebar />
      <div className="size-full">{children}</div>
    </>
    // </div>
  );
};

export default Layout;
