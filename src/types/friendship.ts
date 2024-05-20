export type User = {
  id: number;
  username: string;
  location?: unknown | null;
};
export type sendRequestToFriendData = {
  receiverId: string;
  senderId?: string;
};

export type friendship = {
  request?: {
    id: number;
    username: string;
    location?: unknown | null;
  };
};

export type friendshipRequest = {
  id: number;
  sender: User;
};

export interface friendshipRequests {
  data: friendshipRequest[] | [];
}
