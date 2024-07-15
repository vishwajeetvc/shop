import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Body from "./components/Body";

function App() {
  return (
    <>
        <NavBar />
        <Outlet />
    </>
  );
}
export default App;
