import { FC } from "react";
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

const MainWrapper = styled.div`
  height: 40vh;
  width: 95vw;
  background-color: #fff;
  font-family: "Orbitron", sans-serif;
`;
const Settings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 70%;
`;
const Buttons = styled.div``;
const CreditsInfo = styled.span`
  border-style: solid;
  border-width: 2px;
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

  const { credits, bet } = useSelector<IState, ICreditsReducer & IBetReducer>(
    (globalState) => ({
      ...globalState.credits,
      ...globalState.bet
    })
  );

  const HandleClick = () => {
    dispatch<ShuffleItems>(shuffleItems());
    dispatch<DecrementCredits>(decrementCredits(bet));
  };

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
        <Buttons>
          <button onClick={HandleIncrementBet}>+</button>
          {bet}
          <button onClick={HandleDecrementBet}>-</button>
        </Buttons>
        <Buttons>
          <button onClick={HandleClick}>SPIN</button>
        </Buttons>
      </Settings>
    </MainWrapper>
  );
};
