import BlackButtonLink from "../BlackButtonLink";
import Input from "../Input";

export default function NewCustomer() {
  return (
    <div className="flex items-center justify-center h-[600px]">
      <form className="bg-white px-5 w-full rounded-lg py-8 flex flex-col gap-1 shadow-lg">
        <Input
          label="Mobile no"
          placeholder="Mob. No."
          warn={"User already exits!"}
        />
        <Input label="Name no" placeholder="Full Name" />
        <Input label="Address" placeholder="Address" />

        <div className="pt-4">
          <BlackButtonLink label="Add" />
        </div>
      </form>
    </div>
  );
}
