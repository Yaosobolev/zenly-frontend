import { User } from "@/types/auth";
import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
};

const useAuthStore = create<AuthStore>()(
  persist(
    devtools((set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set(() => ({ user, isAuthenticated: !!user })),
      logout: () => set(() => ({ user: null, isAuthenticated: false })),
    })),
    {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
