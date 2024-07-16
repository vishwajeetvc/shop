import Body from "../Body";

export default function ShowOrder() {
  return (
    <>
      <Body className={`py-4`}>

        <CustomerDetail
          className={`border rounded py-4`}
          name="Falana Singh"
          mob="+91-9242342343"
          add="Mairwa tola sakara"
        />

      </Body>
    </>
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
