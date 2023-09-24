import { IUser } from "./user.model";

export interface IPost {
    id: number;
    userId: number;
    content: string;
    date: Date;
    user?: IUser;
  }