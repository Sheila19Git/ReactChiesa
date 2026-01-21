 import './App.css'
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout";

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

        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/checkout"
          element={<Checkout />}
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App;
