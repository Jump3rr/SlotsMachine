import { IItems } from "../../entities/items";

export const GET_ITEMS = "GET_ITEMS";
export const SHUFFLE_ITEMS = "SHUFFLE_ITEMS";

export interface IItemsOneTypes {
  GET_ITEMS: {
    itemsList: IItems[];
  };
  SHUFFLE_ITEMS: {
    itemsList: IItems[];
  };
}
