import { useState } from "react";
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import Body from "../layout/Body";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNav() {
    setIsOpen(!isOpen);
  }

  return (
    <Body className={`border-b`}>
      {/* Top nav bar*/}
      <nav className="flex justify-between items-center py-4">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <button className="text-3xl" onClick={handleNav}>
          ☰
        </button>
      </nav>

      {/* right nav bar*/}
      <div className={`${isOpen ? "block" : "hidden"} absolute w-[80%] bg-white border right-[-10%]  z-10 top-0 px-4 pt-[50px] shadow-2xl h-screen`}>
        {/*top log and cross button*/}
        <div className="flex justify-between items-center pr-5">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <button className="text-3xl" onClick={handleNav}>
            ✖
          </button>
        </div>
        <div className="my-[50px]">
          <NavigationButton label="Home" to="/"  onClick={handleNav}/>
          <NavigationButton label="Account" to="/account"  onClick={handleNav}/>
          <NavigationButton label="Dashboard" to="/dashboard"  onClick={handleNav}/>
          <NavigationButton label="Order" to="/order"  onClick={handleNav}/>
          <NavigationButton label="New Customer" to="/newcustomer"  onClick={handleNav}/>
        </div>
      </div>
    </Body>
  );
}

function NavigationButton({ label, to ,onClick}) {
  return (
    <div>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) => {
          return `block items-center gap-2 p-2 hover:bg-gray-200 my-1 hover:font-bold rounded ${isActive ? "text-red-500" : ""}`;
        }}
      >
        {label}
      </NavLink>
    </div>
  );
}

