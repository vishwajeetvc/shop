import { NavLink } from "react-router-dom";
import Body from "../Body";
import { useState } from "react";

let d = [
  { id: 23234324, name: "Falana Singh", expDate: "12-2-2034", items: 3 },
  { id: 23234325, name: "Mohan kumar", expDate: "12-2-2034", items: 3 },
  { id: 23234326, name: "google bing", expDate: "12-2-2034", items: 3 },
  { id: 23234327, name: "yahoo singh", expDate: "12-2-2034", items: 3 },
  { id: 2323437, name: "yahoo ring", expDate: "12-2-2034", items: 3 },
  { id: 23234328, name: "bing king", expDate: "12-2-2034", items: 3 },
];

export const Order = () => {
  const [data, setData] = useState(d);
  function handleChange(e) {
    const value = e.target.value;
    if (value == "") {
      setData(d);
      return;
    }
    setData(() => {
      return data.filter((item) => {
        return item.name.includes(value);
      });
    });
  }
  return (
    <Body className={"py-4"}>
      <div className="px-4 text-[14px] bg-gray-100 border rounded">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search by name or data"
          className="bg-gray-100 py-2 w-full border-none outline-none"
        />
      </div>

      <div className="bg-white rounded-xl flex flex-col gap-2 my-4">
        {data.map((item) => {
          return (
            <NavLink key={item.id} to="/showorder">
              <Item
                id={item.id}
                name={item.name}
                expDate={item.expDate}
                items={item.items}
              />
            </NavLink>
          );
        })}
        <div className="font-bold text-center text-gray-400 mt-4">
          No more items!
        </div>
      </div>
    </Body>
  );
};


function Item({ id, name, expDate, items }) {
  return (
    <div className="text-[14px] px-4 py-4 text-gray-800 hover:text-red-700 hover:shadow-xl shadow-rose-50 border rounded-lg">
      <div>
        <p className="font-bold py-1 text-gray-700 text-[18px]">
          {name[0].toUpperCase() + name.slice(1)}
        </p>
        <p>
          Order id : <span className="text-gray-600 font-bold">{id}</span>
        </p>
      </div>
      <div className="flex gap-2">
        <div>Exp Date : {expDate}</div>
        <div> - {items} items</div>
      </div>
    </div>
  );
}
