import "./App.css";
import { DataProvider } from "./context/DataContext";
import Container from "./components/container/container";
import Navbar from "./components/navbar/navbar";
function App() {
  return (
    <DataProvider>
      <Navbar />
      <Container />
    </DataProvider>
  );
}

export default App;
