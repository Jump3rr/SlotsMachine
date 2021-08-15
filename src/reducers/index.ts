import { combineReducers } from "redux";

import items, { IItemsReducer } from "./itemsReducer";
import itemsTwo, { IItemsTwoReducer } from "./itemsTwoReducer";
import itemsThree, { IItemsThreeReducer } from "./itemsThreeReducer";

export default combineReducers({
  items,
  itemsTwo,
  itemsThree
});

export interface IState {
  items: IItemsReducer;
  itemsTwo: IItemsTwoReducer;
  itemsThree: IItemsThreeReducer;
}
