import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../tools/colors";

const MainWrapper = styled.div`
  height: 10vh;
  width: 95vw;
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
  color: ${Colors.button};
  &:hover {
    color: ${Colors.matrixGreen};
    text-decoration: underline;
  }
`;
const Footer = styled.div`
  font-style: italic;
  display: flex;
  justify-content: flex-end;
  color: ${Colors.matrixGreen};
`;

export const TopMachine: FC = () => {
  return (
    <MainWrapper>
      <Menu>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ElementOfMenu>Game</ElementOfMenu>
        </Link>
        <Link to="/stats" style={{ textDecoration: "none" }}>
          <ElementOfMenu>Score</ElementOfMenu>
        </Link>
      </Menu>
      <Footer>Made by Patryk Kamusiński</Footer>
    </MainWrapper>
  );
};
