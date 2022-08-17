import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavBar} from './components/NavBar/NavBar.js'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a JC Store"/>
    </>
  );
}

export default App;
