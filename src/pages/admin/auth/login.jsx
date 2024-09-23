import { useState } from "react";
import Input from "../../../components/Input";
import Body from "../../../layout/Body";
import BlackButton from "../../../components/BlackButton";

function Login() {
    const user = {
        contact: "",
        password: "",
    }
    const [detail, setDetail] = useState(user);
    const [warn, setWarn] = useState(false);
    const [error, setError] = useState(false);

    function handle(e) {
        e.preventDefault();
        if (!detail.contact || !detail.password) {
            setError("All fields are required.");
            return;
        } 

        if (detail.contact.length != 10) {
            setWarn("Phone number must be 10 digits.");
            return;
        }
    }

    return (

            <div className="flex items-center justify-center h-[600px]">
                <form className="bg-white px-5 w-full rounded-lg py-8 flex flex-col gap-1 shadow-lg">
                    <Input
                        value={detail.contact || ""}
                        label="Mobile no"
                        type="number"
                        placeholder="Mob. No."
                        warn={warn}
                        onChange={(e) => {
                            setDetail({ ...detail, contact: e.target.value });
                            setError(false);
                            setWarn(false);
                        }}
                    />
                    <Input
                        value={detail.password || ""}
                        label="Password"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                            setDetail({ ...detail, password: e.target.value });
                            setError(false);
                        }}
                    />
                    {error ? (
                        <h2 className="text-red-500 text-[12px] p-1">{error}</h2>
                    ) : (
                        <></>
                    )}
                    <button className="pt-4" onClick={(e) => handle(e)}>
                        <BlackButton label="Login" />
                    </button>
                </form>
            </div>
    );
}

export default Login;