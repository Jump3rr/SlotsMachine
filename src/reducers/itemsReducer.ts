import { IItems } from "../entities/items";
import * as actionTypes from "../actions/actionTypes/slotsTypes";

export interface IItemsReducer {
  itemsList: IItems[];
  items2List: IItems[];
  items3List: IItems[];
}

const defaultState = (): IItemsReducer => ({
  itemsList: [
    {
      id: 1,
      img: "🍒"
    },
    {
      id: 2,
      img: "🍇"
    },
    {
      id: 3,
      img: "🍉"
    },
    {
      id: 4,
      img: "🍓"
    },
    {
      id: 5,
      img: "🍏"
    },
    {
      id: 6,
      img: "🍍"
    },
    {
      id: 7,
      img: "🍋"
    },
    {
      id: 8,
      img: "🏆"
    }
  ],
  items2List: [
    {
      id: 1,
      img: "🍒"
    },
    {
      id: 2,
      img: "🍇"
    },
    {
      id: 3,
      img: "🍉"
    },
    {
      id: 4,
      img: "🍓"
    },
    {
      id: 5,
      img: "🍏"
    },
    {
      id: 6,
      img: "🍍"
    },
    {
      id: 7,
      img: "🍋"
    },
    {
      id: 8,
      img: "🏆"
    }
  ],
  items3List: [
    {
      id: 1,
      img: "🍒"
    },
    {
      id: 2,
      img: "🍇"
    },
    {
      id: 3,
      img: "🍉"
    },
    {
      id: 4,
      img: "🍓"
    },
    {
      id: 5,
      img: "🍏"
    },
    {
      id: 6,
      img: "🍍"
    },
    {
      id: 7,
      img: "🍋"
    },
    {
      id: 8,
      img: "🏆"
    }
  ]
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
      return {
        ...state,
        itemsList: shuffle(state?.itemsList),
        items2List: shuffle(state?.items2List),
        items3List: shuffle(state?.items3List)
      };
    }
    case actionTypes.SHUFFLE_ITEMS: {
      return {
        ...state,
        itemsList: shuffle(state.itemsList),
        items2List: shuffle(state.items2List),
        items3List: shuffle(state.items3List)
      };
    }
    default: {
      return state;
    }
  }
};
