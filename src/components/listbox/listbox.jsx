import React from "react";
import { useContext, useState } from "react";
import "./style.css";
import DataContext from "../../context/DataContext";
import Card from "../card/card";
import HandleCard from "../handleCard/handleCard";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { FiAlertCircle } from "react-icons/fi";
import { Droppable } from "react-beautiful-dnd";
function Listbox({ isOver, children }) {
  const [data, setData] = useContext(DataContext);
  const [render, setRender] = useState("");
  const [toggle, setToggle] = useState(false);
  const [deleteCard, setDeleteCard] = useState(null);
  //=============================

  //=============================
  const handleCard = async (cardValue, elId) => {
    const newCard = {
      id: "card-" + new Date().getTime(),
      text: cardValue,
    };
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === elId) {
        data[i].card.push(newCard);
        // setRender(copyCard);
        //console.log(data[i].card);
        setRender(newCard.id);
        const dataDoc = doc(db, "trello9", elId);
        await updateDoc(dataDoc, { card: data[i].card });
        break;
      }
    }
    //
  };
  //========= ustgah==============
  const alertToggle1 = async () => {
    const { index, cardId, elId } = deleteCard;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === elId) {
        data[i].card.splice(index, 1);
        setDeleteCard(null);
        const dataDoc = doc(db, "trello9", elId);
        await updateDoc(dataDoc, { card: data[i].card });
        break;
      }
    }
  };
  const trash = (index, cardId, elId) => {
    setDeleteCard({
      index,
      cardId,
      elId,
    });
  };
  const toggle2 = () => {
    setToggle(false);
    setDeleteCard(null);
  };
  //=============================
  return (
    <div className="listboxcontainer">
      {deleteCard ? (
        <div className="shadow">
          <div className="alert">
            <div className="icon3">
              <FiAlertCircle size="100%" color="#DD1A1A" />
            </div>
            <p>Ta ustgahdaa itgeltei bnu ? </p>
            <div className="alertbtn">
              <button className="ugui" onClick={toggle2}>
                No
              </button>
              <button className="tiim" onClick={alertToggle1}>
                Yes
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {data.map((el, i) => {
        return (
          <Droppable key={el.id} droppableId={el.id}>
            {(provided, snapshot) => (
              <div className="listbox1">
                <div className="listbox" ref={provided.innerRef}>
                  <div className="title">{el.title}</div>
                  <Card
                    cards={el.card}
                    trash={(index, cardId) => {
                      trash(index, cardId, el.id);
                    }}
                  />
                  {provided.placeholder}
                  <HandleCard
                    handleCard={(cardValue) => {
                      handleCard(cardValue, el.id);
                    }}
                  />
                </div>
              </div>
            )}
          </Droppable>
        );
      })}
    </div>
  );
}

export default Listbox;
