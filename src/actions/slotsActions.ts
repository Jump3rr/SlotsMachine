import { Dispatch } from "redux";
import * as actionTypes from "./actionTypes/slotsTypes";
import { IItems } from "../entities/items";

export const getItems = (): Promise<any> =>
  ((dispath: Dispatch) => {
    return fetch("../db.json", {})
      .then((response) => response.json())
      .then((items) => items.items)
      .then((itemsList: IItems) => {
        const itemsTwoList = itemsList;
        const itemsThreeList = itemsList;
        dispath({
          type: actionTypes.GET_ITEMS,
          itemsList,
          itemsTwoList,
          itemsThreeList
        });
      });
  }) as any;

export const shuffleItems = () => ({
  type: actionTypes.SHUFFLE_ITEMS
});
