import { Message } from "@/types/message";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface MessageStore {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
}

export const useMessageStore = create<MessageStore>()(
  devtools((set) => ({
    messages: [],
    setMessages: (messages: Message[]) => set({ messages }),
    addMessage: (message: Message) =>
      set((state) => ({ messages: [...state.messages, message] })),
  }))
);
