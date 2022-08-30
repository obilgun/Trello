import React from "react";
import { useState, useContext } from "react";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import DataContext from "../../context/DataContext";
import { async } from "@firebase/util";
function HandleTitle() {
  const [title, setTitle] = useState("");
  const [data, setData] = useContext(DataContext);
  const trelloCollection = collection(db, "trello9");
  //========shine list box nemeh ===========
  const list = {
    title: title,
    id: "list-" + new Date().getTime(),
    card: [],
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      setData([...data, list]);
      await addDoc(trelloCollection, list);
    }
    setTitle("");
  };
  const menu = () => {};
  return (
    <div className="listbox1">
      <form onSubmit={handleSubmit}>
        <div className="inputcontainer">
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            autoFocus
          />
          <div className="btncontainer">
            <button className="addlistbtn">Add list</button>
            <div className="icon" onClick={menu}>
              <AiOutlineClose size="1.5rem" color="#757D75" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HandleTitle;
