import React, { useState, useContext, useEffect } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisH } from "react-icons/fa";
import Listmenu from "../listmenu/listmenu";
import "./style.css";
function HandleCard(props) {
  const [cardValue, setCardValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  //=========================================
  const handleAddCard = async () => {
    if (cardValue !== "") {
      props.handleCard(cardValue);
      setCardValue("");
    }
  };
  //======textarea toggledoj gargaj ireh alga bolgoh=======
  const toggle1 = () => {
    setToggle(true);
  };
  const toggle2 = () => {
    setToggle(false);
  };
  //============================
  const listboxmenu = () => {
    setOpen(true);
  };

  //=========================
  return (
    <div>
      {toggle ? (
        <div className="textareacontainer">
          <textarea
            autoFocus
            placeholder="Enter a title for this card..."
            onChange={(e) => {
              setCardValue(e.target.value);
            }}
            value={cardValue}
          ></textarea>
          <div className="aa">
            {open ? <Listmenu /> : null}
            <div className="bb">
              <button className="addlistbtn" onClick={handleAddCard}>
                Add card
              </button>
              <div className="icon" onClick={toggle2}>
                <AiOutlineClose size="1.5rem" color="#757D75" />
              </div>
            </div>
            <div className="icon" onClick={listboxmenu}>
              <FaEllipsisH size="0.8rem" color="#757D75" />
            </div>
          </div>
        </div>
      ) : (
        <div className="addcard1" onClick={toggle1}>
          <AiOutlinePlus /> Add a card
        </div>
      )}
    </div>
  );
}

export default HandleCard;
