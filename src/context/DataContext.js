import { createContext, useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
const DataContext = createContext([]);

const myElements = [
  {
    title: "aaaa",
    columnId: "menu-1",
    card: [
      {
        id: "elemento-1",
        text: " ",
      },
      {
        id: "elemento-2",
        text: "Elemento 2",
      },
      {
        id: "elemento-3",
        text: "Elemento 3",
      },
    ],
  },
  {
    title: "bbbba",
    columnId: "menu-2",
    card: [
      {
        id: "elemento-4",
        text: "Elemento 1",
      },
      {
        id: "elemento-5",
        text: "Elemento 2",
      },
      {
        id: "elemento-6",
        text: "Elemento 3",
      },
    ],
  },
];

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const trelloCollection = collection(db, "trello9");
  useEffect(() => {
    const getData = async () => {
      const data1 = await getDocs(trelloCollection);
      setData(data1.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
