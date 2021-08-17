import { FC } from "react";
import styled from "styled-components";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { IStatsReducer } from "../../reducers/statsReducer";

const MainWrapper = styled.div`
  height: 38vh;
  width: 88vw;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: #fff;
`;
const StatList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const Stats: FC = () => {
  const { stats } = useSelector<IState, IStatsReducer>((globalState) => ({
    ...globalState.stats
  }));

  return (
    <MainWrapper>
      LAST SPINS:
      <StatList>
        <div>Spin</div>
        <div>Score</div>
      </StatList>
      {stats.length > 0 &&
        stats.map((stat, index) => {
          return (
            <StatList>
              <div>{index + 1}.</div>
              <div>{stat}</div>
            </StatList>
          );
        })}
    </MainWrapper>
  );
};
