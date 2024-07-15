import Body from "../Body";
import { useState } from "react";

let d = [
  { id: 23234324, name: "duckduckgo", expDate: "12-2-2034", items: 3 },
  { id: 23234325, name: "hello", expDate: "12-2-2034", items: 3 },
  { id: 23234326, name: "google", expDate: "12-2-2034", items: 3 },
  { id: 23234327, name: "yahoo", expDate: "12-2-2034", items: 3 },
  { id: 2323437, name: "yahoo", expDate: "12-2-2034", items: 3 },
  { id: 23234328, name: "bing", expDate: "12-2-2034", items: 3 },
];

function Item({ id, name, expDate, items }) {
  return (
    <div className="text-[14px] px-4 py-4 text-gray-800 hover:text-red-700 hover:shadow-xl shadow-rose-50 border rounded-lg">
      <div>
        <p>Order id : {id}</p>
        <p>Name : {name}</p>
      </div>
      <div className="flex gap-2">
        <div>Exp Date : {expDate}</div>
        <div> ✧ {items} items</div>
      </div>
    </div>
  );
}

export const Order = () => {
  const [data, setData] = useState(d);
  return (
    <Body className={"py-1"}>
      <div className="px-4 text-[14px] bg-gray-100 border rounded">
        <input
          onChange={(e) => {
            const value = e.target.value;
            //const filterData = data.filter((item)=>item.name==value);
            //console.log(filterData);
            //setData(filterData);
            setData( ()=> {
              return data.filter( item => {
                 return item.name.includes(value);
              })
            })
          }}
          type="text"
          placeholder="Search by name or data"
          className="bg-gray-100 py-2 w-full border-none outline-none"
        />
      </div>

      <div className="bg-white rounded-xl flex flex-col gap-2 my-4">
        {data.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              expDate={item.expDate}
              items={item.items}
            />
          );
        })}
        <div className="font-bold text-center text-gray-400 mt-4">
          No more items!
        </div>
      </div>
    </Body>
  );
};
