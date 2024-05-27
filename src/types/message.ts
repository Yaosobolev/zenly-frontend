export type Sender = {
  username: string;
};

export type Receiver = {
  username: string;
};

export interface Message {
  id: number;
  content: string;
  senderId: number;
  receiverId: number;
  createdAt: string;
  sender: Sender;
  receiver: Receiver;
}

export type SendMessageData = {
  senderId: number;
  receiverId: number;
  content?: string;
};
