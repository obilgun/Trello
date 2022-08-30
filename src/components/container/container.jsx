import React, { useContext, useState } from "react";
import HandleTitle from "../handleTitle/handleTitle";
import "./style.css";
import Listbox from "../listbox/listbox";
import { DragDropContext } from "react-beautiful-dnd";
import DataContext from "../../context/DataContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
//==============================
const reorder = (list, startColumn, endColumn, startIndex, endIndex) => {
  const newList = Array.from(list);
  const startColumnIndex = newList.findIndex((item) => item.id === startColumn);
  const endColumnIndex = newList.findIndex((item) => item.id === endColumn);
  const [removed] = newList[startColumnIndex].card.splice(startIndex, 1);
  newList[endColumnIndex].card.splice(endIndex, 0, removed);
  return newList;
};
//====================================
function Container() {
  const [data, setData] = useContext(DataContext);
  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const new_elements = reorder(
      data,
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index
    );
    setData(new_elements);
    //const dataDoc = doc(db, "trello9", source.droppableId);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="maincontainer">
        <div className="container">
          <Listbox />
          <HandleTitle />
        </div>
      </div>
    </DragDropContext>
  );
}

export default Container;
