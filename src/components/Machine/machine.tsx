import { FC, useEffect } from "react";
import styled from "styled-components";
import { TopMachine } from "./topMachine";
import { BottomMachine } from "./bottomMachine";
import { MainGame } from "../Game/MainGame";
import { useDispatch } from "react-redux";
import { getItems } from "../../actions/slotsActions";
import { getCredits } from "../../actions/creditsActions";
import { getBet } from "../../actions/betActions";
import { getStats } from "../../actions/statsActions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Stats } from "../Stats/Stats";
import { Colors } from "../../tools/colors";

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  background-color: ${Colors.black};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Display = styled.div`
  height: 40vh;
  width: 90vw;
  background-color: ${Colors.button};
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

type GetItems = ReturnType<typeof getItems>;
type GetCredits = ReturnType<typeof getCredits>;
type GetBet = ReturnType<typeof getBet>;
type GetStats = ReturnType<typeof getStats>;

export const Machine: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetItems>(getItems());
    dispatch<GetCredits>(getCredits());
    dispatch<GetBet>(getBet());
    dispatch<GetStats>(getStats());
  }, []);

  return (
    <Router>
      <MainWrapper>
        <TopMachine />
        <Display>
          <Switch>
            <Route path="/" exact>
              <MainGame />
            </Route>
            <Route path="/stats" exact>
              <Stats />
            </Route>
          </Switch>
        </Display>
        <BottomMachine />
      </MainWrapper>
    </Router>
  );
};
