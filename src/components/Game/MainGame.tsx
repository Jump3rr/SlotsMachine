import { FC, useMemo } from "react";
import styled from "styled-components";
import { Slot } from "./Slot";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { IItemsReducer } from "../../reducers/itemsReducer";
import { IItems } from "../../entities/items";
import { MainScreen } from "../../tools/components";

const MainWrapper = styled(MainScreen)`
  font-size: 9.2vh;
  flex-direction: row;
`;

export const MainGame: FC = () => {
  const { itemsList, items2List, items3List } = useSelector<
    IState,
    IItemsReducer
  >((globalState) => ({
    ...globalState.items
  }));

  const Spin = (first: IItems[], second: IItems[], third: IItems[]) => {
    return (
      <MainWrapper>
        <Slot items={first} />
        <Slot items={second} />
        <Slot items={third} />
      </MainWrapper>
    );
  };
  const display = useMemo(() => {
    return Spin(itemsList, items2List, items3List);
  }, [itemsList[0]?.id, items2List[0]?.id, items3List[0]?.id]);
  return <MainWrapper>{display}</MainWrapper>;
};
