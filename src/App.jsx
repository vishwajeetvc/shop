import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] md:w-[500px] relative">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}
export default App;
