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
