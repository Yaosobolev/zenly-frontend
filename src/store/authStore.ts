import { User } from "@/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
};

const useAuthStore = create<AuthStore>()(
  devtools((set) => ({
    user: null,
    isAuthenticated: false,
    setUser: (user) => set(() => ({ user, isAuthenticated: !!user })),
    logout: () => set(() => ({ user: null, isAuthenticated: false })),
  }))
);

export default useAuthStore;
