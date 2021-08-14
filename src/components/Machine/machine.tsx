import { FC } from "react";
import styled from "styled-components";
import { TopMachine } from "./topMachine";
import { BottomMachine } from "./bottomMachine";

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  background-color: #000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Frame = styled.div`
  height: 40vh;
  width: 90vw;
  background-color: red;
  margin: 0 auto;
`;

export const Machine: FC = () => {
  return (
    <MainWrapper>
      <TopMachine />
      <Frame />
      <BottomMachine />
    </MainWrapper>
  );
};
