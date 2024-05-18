export type User = {
  id: number;
  name: string;
  message: string;
};

export type UserError = {
  response?: {
    status: number;
    data?: {
      id: number;
    };
  };
};

export type LoginData = {
  username: string;
  password: string;
};

export type InputDataError = {
  response?: {
    status: number;
    data?: {
      message: string;
    };
  };
};
export type InputDataErrorState = {
  status?: number;
  message?: string;
};

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
