export interface IShortcuts {
  stake: number[];
  breakEven: number[];
  result: {
    enabled: boolean;
  };
}

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  photo?: string;
  shortcuts?: IShortcuts;
  refreshToken?: string;
  recoveryCode?: string;
  recoveryCodeExpiry?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
