import { FC } from "react";
import styled from "styled-components";
import { IItems } from "../../entities/items";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Colors } from "../../tools/colors";

const OneSlot = styled.div`
  background-color: ${Colors.white};
  width: 30%;
  display: block;
  overflow: hidden;
  position: static;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  float: center;
`;
const Column = styled.span`
  background-color: ${Colors.white};
  width: 100%;
`;
const Item = styled.span`
  display: block;
`;
interface ISlot {
  items: IItems[];
}
export const Slot: FC<ISlot> = (props) => {
  return (
    <OneSlot>
      <div className="items">
        <TransitionGroup component="span">
          <CSSTransition
            classNames="it"
            timeout={{ enter: 1000, exit: 1000 }}
            key={Math.random()}
            unmountOnExit
          >
            <Column className="items__value">
              {props.items?.length > 0 &&
                props.items.map((el) => {
                  return <Item>{el.img}</Item>;
                })}
            </Column>
          </CSSTransition>
        </TransitionGroup>
      </div>
      );
    </OneSlot>
  );
};
