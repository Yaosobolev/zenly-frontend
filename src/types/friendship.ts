export type friendship = {
  request?: {
    id: number;
    username: string;
    location?: unknown | null;
  };
};

export type friendshipRequest = {
  // data?: {
  id: number;
  sender?: {
    id: number;
    username: string;
  };
  // };
};
// export type friendshipRequest = {
//   data?: {
//     id: number;
//     sender: {
//       id: number;
//       username: string;
//     };
//   };
// };

export interface friendshipRequests {
  data: friendshipRequest[] | null;
}

export type sendFriendshipRequest = {
  receiverId: string;
  senderId?: string;
};
