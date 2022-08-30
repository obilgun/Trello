import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { FiTrash } from "react-icons/fi";
import "./style.css";
function Card(props) {
  const cards = props.cards;
  const trash = (index, cardId) => {
    props.trash(index, cardId);
  };
  //console.log(cards);
  return cards.map((card, index) => {
    return (
      <Draggable draggableId={card.id} index={index} key={card.id}>
        {(provided, snapshot) => (
          <div
            className="cardcontainer"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="card">{card.text}</div>
            <div className="icon4" onClick={() => trash(index, card.id)}>
              <FiTrash />
            </div>
          </div>
        )}
      </Draggable>
    );
  });
}

export default Card;
