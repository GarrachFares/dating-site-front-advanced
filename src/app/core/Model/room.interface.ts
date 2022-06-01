
import { CategoryI } from "./category.interface";
import { Meta } from "./meta.interface";
import { UserI } from "./user.interface";

export interface RoomI {
    id?: number;
    name?: string;
    description?: string;
    users?: UserI[];
    created_at?: Date;
    updated_at?: Date;
    category?: CategoryI;
    image?:string;
  }
  
  export interface RoomPaginateI {
    items: RoomI[];
    meta: Meta;
  }