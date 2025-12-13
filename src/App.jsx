 import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const listaTitulos = ["Deportes", "Tecnologias", "Turismo"];

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="Bienvenid@!!" />
     
    </>
  )
}

export default App;
