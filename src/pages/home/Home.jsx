import BlackButtonLink from "../../components/BlackButtonLink";

export default function Home(){
  return <div className="flex items-center justify-center h-[600px]">
    <div className="w-full">
        <BlackButtonLink label="Login" to="/login"/>
    </div>
  </div>;
}
