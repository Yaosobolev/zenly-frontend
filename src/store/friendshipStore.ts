import { friendshipRequest } from "@/types/friendship";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface FriendStore {
  searchValue: string;
  setSearchValue: (value: string) => void;
  clearSearch: () => void;
  requests: friendshipRequest[];
  setRequests: (requests: friendshipRequest[]) => void;
  addRequest: (request: friendshipRequest) => void;
  removeRequest: (id: number) => void;
  friends: friendshipRequest[];
  setFriends: (friends: friendshipRequest[]) => void;
  addFriend: (friends: friendshipRequest) => void;
  removeFriend: (id: number) => void;
}

export const useFriendStore = create<FriendStore>()(
  devtools((set) => ({
    searchValue: "",
    setSearchValue: (value: string) => set({ searchValue: value }),
    clearSearch: () => set({ searchValue: "" }),
    requests: [],
    setRequests: (requests: friendshipRequest[]) => set({ requests }),
    addRequest: (request: friendshipRequest) =>
      set((state) => ({ requests: [...state.requests, request] })),
    removeRequest: (id: number) =>
      set((state) => ({
        requests: state.requests.filter((req) => req.id !== id),
      })),
    friends: [],
    setFriends: (friends: friendshipRequest[]) => set({ friends }),
    addFriend: (friend: friendshipRequest) =>
      set((state) => ({ friends: [...state.friends, friend] })),
    removeFriend: (id: number) =>
      set((state) => ({
        friends: state.friends.filter((req) => req.id !== id),
      })),
  }))
);
