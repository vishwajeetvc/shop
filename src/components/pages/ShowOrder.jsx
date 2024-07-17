import Body from "../Body";
import shirt from "../../assets/shirt.png";
import { useState } from "react";

const items = [
  { src: shirt, itemType: "Shirt", status: "p", noOfItems: 3, amount: 9999 },
  { src: shirt, itemType: "Shirt", status: "d", noOfItems: 3, amount: 789 },
  { src: shirt, itemType: "Shirt", status: "pd", noOfItems: 3, amount: 789 },
];

export default function ShowOrder() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Body className={`py-4 relative`}>
        <CustomerDetail
          className={`border rounded py-4`}
          name="Falana Singh"
          mob="+91-9242342343"
          add="Mairwa tola sakara"
        />

        {/* rendering items which are pending or done*/}
        <div className="flex gap-2 flex-col py-2">
          {items
            .filter((item) => item.status == "p" || item.status == "d")
            .map((item, index) => (
              <OrderItem
                key={index}
                amount={item.amount}
                src={`${item.src}`}
                itemType={item.itemType}
                noOfItems={item.noOfItems}
                status={
                  item.status == "p"
                    ? "Pending"
                    : item.status == "d"
                      ? "Done"
                      : ""
                }
              />
            ))}
          <div className="font-bold text-center text-gray-400 m-1">
            Returned
          </div>

          {/* rendering items which already paid */}
          {items
            .filter((item) => item.status == "pd")
            .map((item, index) => (
              <OrderItem
                key={index}
                amount={item.amount}
                src={`${item.src}`}
                itemType={item.itemType}
                noOfItems={item.noOfItems}
                status={"Paid"}
              />
            ))}

          {/* Payment Section */}
          <div className="text-[16px] my-5">
            <table>
              <tbody>
                <tr>
                  <td className="px-2">Already Paid</td>
                  <td className="px-2">$100</td>
                </tr>
                <tr>
                  <td className="px-2">Extra Charge</td>
                  <td className="px-2">$12</td>
                </tr>
                <tr className="text-red-500">
                  <td className="px-2">Total Amount</td>
                  <td className="px-2 font-bold">$9999</td>
                </tr>
                <tr className="text-red-700">
                  <td className="px-2">Left Amount</td>
                  <td className="px-2 font-bold">$99884</td>
                </tr>
              </tbody>
            </table>
            <form className="p-2 my-3 rounded relative">
              <div className="absolute top-[-8px] left-[20px] bg-white px-2 py-1">
                Pay
              </div>
              <input
                type="number"
                className="  border w-full p-2  outline-none"
                placeholder="Enter amount"
              />
              <button className="p-2 w-full text-center px-3 bg-black text-white rounded my-2">
                Return All
              </button>
            </form>
          </div>
        </div>
      </Body>
      <PopUpItem />
    </>
  );
}

function PopUpItem() {
  return (
    <>
      <Body className={"absolute  top-0  inset-0 flex items-center"}>
        <div
          className={
            "rounded-lg p-4 h-[300px] shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] border  bg-white w-full"
          }
        >
          hello
        </div>
      </Body>
    </>
  );
}
function OrderItem({ src, itemType, noOfItems, status, amount }) {
  return (
    <div className="flex border rounded p-2 items-center gap-4">
      <div className="w-[100px] flex justify-center">
        <img src={`${src}`} alt={`${itemType}`} />
      </div>
      <div className="w-full">
        <h2 className="font-bold">
          {itemType} - {noOfItems}
        </h2>
        <p className="text-[14px] ">{status}</p>
        <p className="text-[12px] pb-1 font-bold">₹{amount}</p>
        <div className="text-[14px] flex w-full gap-2">
          <div className="p-[2px] w-full text-center px-3 bg-black text-white rounded">
            Show
          </div>
          <div className="p-[2px] w-full text-center px-3 bg-black text-white rounded">
            Return
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomerDetail({ name, mob, add, className }) {
  return (
    <div className={`rounded ${className}`}>
      <table className="mx-5">
        <tbody>
          <tr className="">
            <td className="py-1 font-bold text-xl">{name}</td>
          </tr>
          <tr className="">
            <td className="text-sm text-gray-600">{mob}</td>
          </tr>
          <tr className="">
            <td className="text-sm text-gray-600">{add}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
