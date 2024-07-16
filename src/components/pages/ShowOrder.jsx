import Body from "../Body";
import shirt from "../../assets/shirt.png";

const items = [
  { src: shirt, itemType: "Shirt", status: "p", noOfItems: 3 , amount : 9999},
  { src: shirt, itemType: "Shirt", status: "d", noOfItems: 3 , amount : 789},
];

export default function ShowOrder() {
  return (
    <Body className={`py-4`}>
      <CustomerDetail
        className={`border rounded py-4`}
        name="Falana Singh"
        mob="+91-9242342343"
        add="Mairwa tola sakara"
      />
      <div className="flex gap-2 flex-col py-2">
        {items.map((item, index) => (
          <OrderItem key={index}
            amount={item.amount}
            src={`${item.src}`}
            itemType={item.itemType}
            noOfItems={item.noOfItems}
            status={item.status == "p" ? "Pending" : item.status == "d" ? "Done" : "" }
          />
        ))}
      </div>
    </Body>
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
          <div className="p-[2px] px-3 bg-black text-white rounded">Show</div>
          <div className="p-[2px] px-3 bg-black text-white rounded">Return</div>
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
