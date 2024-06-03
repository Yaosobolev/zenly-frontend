export type User = {
  id: number;
  username: string;
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

export type InputData = {
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
