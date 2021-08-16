import { combineReducers } from "redux";

import items, { IItemsReducer } from "./itemsReducer";
import itemsTwo, { IItemsTwoReducer } from "./itemsTwoReducer";
import itemsThree, { IItemsThreeReducer } from "./itemsThreeReducer";
import credits, { ICreditsReducer } from "./creditsReducer";

export default combineReducers({
  items,
  itemsTwo,
  itemsThree,
  credits
});

export interface IState {
  items: IItemsReducer;
  itemsTwo: IItemsTwoReducer;
  itemsThree: IItemsThreeReducer;
  credits: ICreditsReducer;
}
