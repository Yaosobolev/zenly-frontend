export type SendLocationData = {
  latitude: number;
  longitude: number;
  senderId: string;
};

export type SendFriendRequest = {
  request: {
    latitude: string;
    longitude: string;
    user: {
      sentFriendRequests: [
        {
          receiverId: number;
        }
      ];
      receivedFriendRequests: [
        {
          senderId: number;
        }
      ];
      username: string;
      id: number;
    };
  };
};

export type FriendLocation = {
  // request?: {
  data: {
    latitude: string;
    longitude: string;
    usename: string;
    id: number;
  };
  // };
};
