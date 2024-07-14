import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-[90%]">

        <NavBar />
        <Outlet/>

      </div>
    </div>
  );
}
export default App;
