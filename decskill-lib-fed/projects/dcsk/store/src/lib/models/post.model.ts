import { IUser } from "./user.model";

export interface IPost {
    id: number | string;
    userId: number | string;
    content: string;
    date: Date;
    user?: IUser;
  }