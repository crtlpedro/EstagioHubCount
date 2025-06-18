import Grid from "./components/grid/Grid";
import { Wrapper } from "../src/components/wrapper/Wrapper";
import Checkbox from "./components/checkbox/Checkbox";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import { modules } from "./utils/modules";
import { groupBySection } from "./types/groupSection";

function App() {
  const group = groupBySection(modules, false);
  

  return (
    <>
    <Wrapper>
      <Modal/>
      <Header/>
      <Checkbox/>
      <Grid groupedModules={group} />
      </Wrapper>
    </>
  );
}

export default App;