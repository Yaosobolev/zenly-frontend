export type friendship = {
  senderId: string;
  receiverId: string;
};

export type friendshipReauest = {
  message: string;
  requestId?: {
    id: number;
    senderId: string;
    receiverId: string;
    status: string;
    createdAt: string;
  };
};
