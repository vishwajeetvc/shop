import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Body from "./layout/Body";

function App() {
  return (
    <>
      <NavBar />
      <Body className={"bg-slate-200"}>
        <Outlet />
      </Body>
    </>
  );
}
export default App;
