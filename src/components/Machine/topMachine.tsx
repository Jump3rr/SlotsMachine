import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../tools/colors";
import { resetCredits } from "../../actions/creditsActions";
import { useDispatch } from "react-redux";
import { Buttons } from "../../tools/components";

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
const ElementOfMenu = styled(Buttons)`
  color: ${Colors.black};
`;
const Footer = styled.div`
  font-style: italic;
  display: flex;
  justify-content: flex-end;
  color: ${Colors.matrixGreen};
`;

export const TopMachine: FC = () => {
  const dispatch = useDispatch();
  type ResetCredits = ReturnType<typeof resetCredits>;
  const HandleIncrementBet = () => {
    dispatch<ResetCredits>(resetCredits());
  };

  return (
    <MainWrapper>
      <Menu>
        <Buttons onClick={HandleIncrementBet}>RESET</Buttons>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ElementOfMenu>GAME</ElementOfMenu>
        </Link>
        <Link to="/stats" style={{ textDecoration: "none" }}>
          <ElementOfMenu>SCORE</ElementOfMenu>
        </Link>
      </Menu>
      <Footer>Made by Patryk Kamusiński</Footer>
    </MainWrapper>
  );
};
