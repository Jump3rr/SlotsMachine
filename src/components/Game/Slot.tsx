import { FC, useState } from "react";
import styled from "styled-components";
import items from "../../entities/items";

const OneSlot = styled.div`
  background-color: #fff;
  width: 30%;
  display: flex;
  flex-direction: colunn;
  overflow: hidden;
`;

export const Slot: FC = () => {
  function shuffle(array: string[]) {
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
  const [slot, setSlots] = useState(items);

  const set = () => {
    setSlots((prevState) => shuffle(slot));
  };
  return (
    <OneSlot>
      {slot}
      <button onClick={() => setSlots(shuffle(slot))}>a</button>
    </OneSlot>
  );
};
