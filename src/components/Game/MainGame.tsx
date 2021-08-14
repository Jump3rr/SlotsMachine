import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import items from "../../entities/items";
//import { Slot } from "./Slot";

const MainWrapper = styled.div`
  height: 38vh;
  width: 88vw;
  background-color: #000;
  font-size: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const OneSlot = styled.div`
  background-color: #fff;
  width: 30%;
  display: flex;
  flex-direction: colunn;
  overflow: hidden;
`;

export const MainGame: FC = () => {
  return (
    <MainWrapper>
      <OneSlot></OneSlot>
      <OneSlot></OneSlot>
      <OneSlot></OneSlot>
    </MainWrapper>
  );
};
