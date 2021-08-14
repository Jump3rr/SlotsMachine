import { FC } from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  height: 10vh;
  width: 95vw;
  background-color: #fff;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 8vh;
`;
const ElementOfMenu = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Footer = styled.div`
  font-style: italic;
  display: flex;
  justify-content: flex-end;
`;

export const TopMachine: FC = () => {
  return (
    <MainWrapper>
      <Menu>
        <ElementOfMenu>Game</ElementOfMenu>
        <ElementOfMenu>Score</ElementOfMenu>
      </Menu>
      <Footer>Made by Patryk Kamusiński</Footer>
    </MainWrapper>
  );
};
