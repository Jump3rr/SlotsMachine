import { combineReducers } from "redux";

import items, { IItemsReducer } from "./itemsReducer";
import credits, { ICreditsReducer } from "./creditsReducer";
import bet, { IBetReducer } from "./betReducer";

export default combineReducers({
  items,
  credits,
  bet
});

export interface IState {
  items: IItemsReducer;
  credits: ICreditsReducer;
  bet: IBetReducer;
}
