import { FC } from "react";
import styled from "styled-components";
import { TopMachine } from "./topMachine";
import { BottomMachine } from "./bottomMachine";
import { MainGame } from "../Game/MainGame";

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

export const Machine: FC = () => {
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
