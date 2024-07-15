import BlackButtonLink from "../BlackButtonLink";

export default function NewDialog({}){
  return <>
    <div className="h-[600px]  gap-5 flex flex-col justify-center">
      <div className="font-bold text-center text-gray-700 text-[40px] pb-8">KUSHWAHA Tailor</div>
      <BlackButtonLink to="/newcustomer" label="Customer"/>
      <BlackButtonLink to="#" label="Measurement"/>
      <BlackButtonLink to="#" label="Order"/>
    </div>
  </>
}
