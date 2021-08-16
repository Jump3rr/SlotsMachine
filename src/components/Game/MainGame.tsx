import { FC, useEffect, useMemo } from "react";
import styled from "styled-components";
import { Slot } from "./Slot";
import { IState } from "../../reducers";
import { useDispatch, useSelector } from "react-redux";
import { IItemsReducer } from "../../reducers/itemsReducer";
import { IItemsTwoReducer } from "../../reducers/itemsTwoReducer";
import { IItemsThreeReducer } from "../../reducers/itemsThreeReducer";
import { IItems } from "../../entities/items";

const MainWrapper = styled.div`
  height: 38vh;
  width: 88vw;
  background-color: #000;
  font-size: 9.2vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const MainGame: FC = () => {
  const { itemsList, itemsTwoList, itemsThreeList } = useSelector<
    IState,
    IItemsReducer & IItemsTwoReducer & IItemsThreeReducer
  >((globalState) => ({
    ...globalState.items,
    ...globalState.itemsTwo,
    ...globalState.itemsThree
  }));

  const Spin = (first: IItems[], second: IItems[], third: IItems[]) => {
    console.log("abc");
    return (
      <MainWrapper>
        <Slot items={first} />
        <Slot items={second} />
        <Slot items={third} />
      </MainWrapper>
    );
  };
  const display = useMemo(() => {
    return Spin(itemsList, itemsTwoList, itemsThreeList);
  }, [itemsList[0]?.id, itemsTwoList[0]?.id, itemsThreeList[0]?.id]);
  return <MainWrapper>{display}</MainWrapper>;
};
