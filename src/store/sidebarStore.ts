import { create } from "zustand";
import { devtools } from "zustand/middleware";

type SidebarStore = {
  isCollapsed: boolean;
  sidebarWidth: number;
  toggleSidebar: () => void;
};

//   const mobileWidth: boolean = onlyWidth < 768;

const useSidebarStore = create<SidebarStore>()(
  devtools((set) => ({
    isCollapsed: false,
    sidebarWidth: 300,
    toggleSidebar: () =>
      set((state) => ({
        isCollapsed: !state.isCollapsed,
        sidebarWidth: state.sidebarWidth === 0 ? 300 : 0,
      })),
  }))
);

export default useSidebarStore;
