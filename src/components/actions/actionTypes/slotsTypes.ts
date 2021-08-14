import { IItems } from "../../../entities/items";

export const GET_ITEMS = "GET_ITEMS";

export interface IItemsOneTypes {
  GET_ITEMS: {
    itemsList: IItems[];
  };
}
