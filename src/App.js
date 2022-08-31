import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavBar} from './components/NavBar/NavBar.js'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js";
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.js';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a JC Store"/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
