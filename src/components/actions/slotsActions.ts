import { Dispatch } from "redux";
import * as actionTypes from "./actionTypes/slotsTypes";
import { IItems } from "../../entities/items";

export const getItems = (): Promise<any> =>
  ((dispath: Dispatch) => {
    return fetch("../db.json", {})
      .then((response) => response.json())
      .then((items) => items.items)
      .then((itemsList: IItems) => {
        dispath({
          type: actionTypes.GET_ITEMS,
          itemsList
        });
      });
  }) as any;
