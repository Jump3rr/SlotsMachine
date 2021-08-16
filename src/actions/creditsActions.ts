import * as actionTypes from "./actionTypes/creditsTypes";

export const getCredits = () => ({
  type: actionTypes.GET_CREDITS
});

export const incrementCredits = () => ({
  type: actionTypes.INCREMENT_CREDITS
});
export const decrementCredits = () => ({
  type: actionTypes.DECREMENT_CREDITS
});
