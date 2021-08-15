import { IItems } from "../entities/items";
import * as actionTypes from "../actions/actionTypes/slotsTypes";

export interface IItemsThreeReducer {
  itemsThreeList: IItems[];
}

const defaultState = (): IItemsThreeReducer => ({
  itemsThreeList: []
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
        itemsThreeList: paylod.itemsList
      };
    }
    case actionTypes.SHUFFLE_ITEMS: {
      return {
        ...state,
        itemsThreeList: shuffle(state.itemsThreeList)
      };
    }
    default: {
      return state;
    }
  }
};
