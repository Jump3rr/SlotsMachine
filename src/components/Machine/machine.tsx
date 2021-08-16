import { FC, useEffect } from "react";
import styled from "styled-components";
import { TopMachine } from "./topMachine";
import { BottomMachine } from "./bottomMachine";
import { MainGame } from "../Game/MainGame";
import { useDispatch } from "react-redux";
import { getItems } from "../../actions/slotsActions";
import { getCredits } from "../../actions/creditsActions";
import { getBet } from "../../actions/betActions";

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  background-color: #000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Display = styled.div`
  height: 40vh;
  width: 90vw;
  background-color: red;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

type GetItems = ReturnType<typeof getItems>;
type GetCredits = ReturnType<typeof getCredits>;
type GetBet = ReturnType<typeof getBet>;

export const Machine: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetItems>(getItems());
    dispatch<GetCredits>(getCredits());
    dispatch<GetBet>(getBet());
  }, []);

  return (
    <MainWrapper>
      <TopMachine />
      <Display>
        <MainGame />
      </Display>
      <BottomMachine />
    </MainWrapper>
  );
};
