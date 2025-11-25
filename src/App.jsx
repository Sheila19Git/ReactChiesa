 import './App.css'
import CounterComponent from './components/CounterComponent';
import NavBar from './components/NavBar';
import TitleComponent from './components/titleComponent';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const listaTitulos = ["Deportes", "Tecnologias", "Turismo"];

  return (
    <>
      <NavBar />

      <TitleComponent texto={listaTitulos[0]} />
      <TitleComponent texto={listaTitulos[1]} />
      <TitleComponent texto={listaTitulos[2]} />
      <ItemListContainer mensaje="Bienvenid@!!" />
      <CounterComponent />
    </>
  )
}

export default App;
