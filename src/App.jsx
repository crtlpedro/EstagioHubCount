import "./App.css";
import Grids from "./components/Grids";
import { modules } from "./components/Cards";
import Header from "./components/Header";
import {CheckboxProvider} from "./components/CheckBox";

function App() {
  return (
    <>
	<CheckboxProvider>
      <Header />
      <Grids lista={modules} />
	  </CheckboxProvider>
    </>
  );
}

export default App;
