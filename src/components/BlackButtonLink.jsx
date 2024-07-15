import { NavLink } from "react-router-dom";

export default function BlackButtonLink({ label, to }) {
  return (
    <>
      <NavLink
        to={to}
        className={`bg-black text-white block text-center rounded p-2`}
      >
        {label}
      </NavLink>
    </>
  );
}
