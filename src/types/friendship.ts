export type friendship = {
  request?: {
    id: number;
    username: string;
    location?: unknown | null;
  };
};

export type friendshipRequest = {
  id: number;
  sender: {
    id: number;
    username: string;
  };
};

export interface friendshipRequests {
  data: friendshipRequest[] | [];
}

export type sendFriendshipRequest = {
  receiverId: string;
  senderId?: string;
};
