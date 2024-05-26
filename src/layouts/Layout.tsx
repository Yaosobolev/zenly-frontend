import React from "react";

import { Toaster } from "sonner";

import { Sidebar } from "@/components";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Toaster richColors position="top-center" />

      <Sidebar />
      <div className="size-full">{children}</div>
    </>
  );
};

export default Layout;
