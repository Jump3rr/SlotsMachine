import { FC } from "react";
import styled from "styled-components";
import { shuffleItems } from "../../actions/slotsActions";
import { useDispatch } from "react-redux";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { IItemsReducer } from "../../reducers/itemsReducer";
import { IItemsTwoReducer } from "../../reducers/itemsTwoReducer";
import { IItemsThreeReducer } from "../../reducers/itemsThreeReducer";
import { IItems } from "../../entities/items";

import {
  incrementCredits,
  decrementCredits
} from "../../actions/creditsActions";
import { ICreditsReducer } from "../../reducers/creditsReducer";

const MainWrapper = styled.div`
  height: 40vh;
  width: 95vw;
  background-color: #fff;
`;
const Settings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 70%;
  font-family: "Orbitron", sans-serif;
`;
const Buttons = styled.div``;
const CreditsInfo = styled.span`
  border-style: solid;
  border-width: 2px;
  font-size: 7vh;
  padding: 0 20vw 0 20vw;
  font-family: "Orbitron", sans-serif;
`;

export const BottomMachine: FC = () => {
  const dispatch = useDispatch();
  type ShuffleItems = ReturnType<typeof shuffleItems>;
  type IncrementCredits = ReturnType<typeof incrementCredits>;
  type DecrementCredits = ReturnType<typeof decrementCredits>;

  const { credits } = useSelector<IState, ICreditsReducer>((globalState) => ({
    ...globalState.credits
  }));

  const HandleClick = () => {
    dispatch<ShuffleItems>(shuffleItems());
  };

  const Increment = () => {
    dispatch<IncrementCredits>(incrementCredits());
  };

  return (
    <MainWrapper>
      <CreditsInfo>100</CreditsInfo>
      <Settings>
        <Buttons>
          <button onClick={Increment}>+</button> {credits} -
        </Buttons>
        <Buttons>
          <button onClick={HandleClick}>SPIN</button>
        </Buttons>
      </Settings>
    </MainWrapper>
  );
};
