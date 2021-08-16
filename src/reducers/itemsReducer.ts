import { IItems } from "../entities/items";
import * as actionTypes from "../actions/actionTypes/slotsTypes";

export interface IItemsReducer {
  itemsList: IItems[];
}

const defaultState = (): IItemsReducer => ({
  itemsList: []
});

const shuffle = (array: IItems[]) => {
  let currentIndex = array?.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_ITEMS: {
      const paylod: actionTypes.IItemsOneTypes["GET_ITEMS"] = action;
      return {
        ...state,
        itemsList: shuffle(paylod.itemsList)
      };
    }
    case actionTypes.SHUFFLE_ITEMS: {
      return {
        ...state,
        itemsList: shuffle(state.itemsList)
      };
    }
    default: {
      return state;
    }
  }
};
