import './App.css'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer mensaje="Bienvenid@s!!" />}
        />

        <Route
          path="/category/:categoryId"
          element={<ItemListContainer mensaje="Estas viendo" />}
        />

        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer />}
        />
      </Routes>
    </>
  )
}

export default App;

