import { FC, useState } from "react";
import styled from "styled-components";
import { shuffleItems } from "../../actions/slotsActions";
import { useDispatch } from "react-redux";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import {
  incrementCredits,
  decrementCredits
} from "../../actions/creditsActions";
import { ICreditsReducer } from "../../reducers/creditsReducer";
import { IBetReducer } from "../../reducers/betReducer";
import { incrementBet, decrementBet } from "../../actions/betActions";
import { IItemsReducer } from "../../reducers/itemsReducer";
import { pushStat } from "../../actions/statsActions";

const MainWrapper = styled.div`
  height: 40vh;
  width: 95vw;
  background-color: #000;
  color: #008f11;
`;
const Settings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 70%;
  font-size: 5vh;
`;
const Buttons = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: white;
  padding: 10px 20px 10px 20px;
  background-color: #f00;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: #8f0000;
  }
`;
const CreditsInfo = styled.span`
  border-style: solid;
  border-width: 0.5px;
  border-color: #00ff00;
  background-color: #008f11;
  color: black;
  font-size: 7vh;
  padding: 0 20vw 0 20vw;
`;
const CreditsText = styled.div`
  font-size: 3vh;
`;

export const BottomMachine: FC = () => {
  const dispatch = useDispatch();
  type ShuffleItems = ReturnType<typeof shuffleItems>;
  type IncrementCredits = ReturnType<typeof incrementCredits>;
  type DecrementCredits = ReturnType<typeof decrementCredits>;
  type IncrementBet = ReturnType<typeof incrementBet>;
  type DecrementBet = ReturnType<typeof decrementBet>;
  type PushStat = ReturnType<typeof pushStat>;

  const { itemsList, items2List, items3List, credits, bet } = useSelector<
    IState,
    ICreditsReducer & IBetReducer & IItemsReducer
  >((globalState) => ({
    ...globalState.items,
    ...globalState.credits,
    ...globalState.bet
  }));

  const CheckCredits = (): boolean => {
    return credits >= bet ? true : false;
  };

  const CheckScore = (): number => {
    let score: number = 0;
    switch (true) {
      case itemsList[0].id === items2List[1].id &&
        items2List[1].id === items3List[2].id:
        score += 1;
        break;
      case itemsList[1].id === items2List[1].id &&
        items2List[1].id === items3List[1].id:
        score += 1;
        break;
      case itemsList[0].id === items2List[0].id &&
        items2List[0].id === items3List[0].id:
        score += 1;
        break;
      case itemsList[2].id === items2List[2].id &&
        items2List[2].id === items3List[2].id:
        score += 1;
        break;
      case itemsList[2].id === items2List[1].id &&
        items2List[1].id === items3List[0].id:
        score += 1;
        break;
      default:
        break;
    }
    return score;
  };

  const [clicked, setClicked] = useState(false);

  function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function HandleClick() {
    const hasCredits = await CheckCredits();
    if (hasCredits && !clicked) {
      await setClicked(true);
      await dispatch<ShuffleItems>(shuffleItems());
      await dispatch<DecrementCredits>(decrementCredits(bet));
      const score = await CheckScore();
      await dispatch<IncrementCredits>(incrementCredits(bet * score * 10));
      await dispatch<PushStat>(pushStat(bet * score * 10));
      await timeout(1000);
      await setClicked(false);
    }
  }

  const HandleIncrementBet = () => {
    if (bet * 2 <= credits) {
      dispatch<IncrementBet>(incrementBet());
    }
  };
  const HandleDecrementBet = () => {
    if (bet / 2 >= 1) {
      dispatch<DecrementBet>(decrementBet());
    }
  };

  return (
    <MainWrapper>
      <CreditsText>CREDITS:</CreditsText>
      <CreditsInfo>{credits}</CreditsInfo>
      <Settings>
        <Buttons onClick={HandleIncrementBet}>+</Buttons>
        {bet}
        <Buttons onClick={HandleDecrementBet}>-</Buttons>
        <Buttons onClick={HandleClick}>SPIN</Buttons>
      </Settings>
    </MainWrapper>
  );
};
