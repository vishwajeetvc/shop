import BlackButton from "../BlackButton";
import Body from "../Body";
import Input from "../Input";

export default function NewCustomer() {
  return (
    <Body className={'bg-gray-400'}>
      <div className="flex items-center justify-center h-[600px]">
        <form className="bg-white px-5 w-full rounded-lg py-8 flex flex-col gap-1 shadow-lg">
          <Input
            label="Mobile no"
            placeholder="Mob. No."
            warn={"User already exits!"}
          />
          <Input label="Name no" placeholder="Full Name" />
          <Input label="Address" placeholder="Address" />

          <button className="pt-4">
            <BlackButton label="New" />
          </button>
        </form>
      </div>
    </Body>
  );
}
