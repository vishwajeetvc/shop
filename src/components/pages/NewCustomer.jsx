import { useState } from "react";
import BlackButton from "../BlackButton";
import Body from "../Body";
import Input from "../Input";
import userService from "../../services/userService";

export default function NewCustomer() {
  const custumerDetails = {
    name: "",
    mobile: "",
    address: "",
  };
  const [detail, setDetail] = useState(custumerDetails);
  const [warn, setWarn] = useState(false);
  const [error, setError] = useState(false);
  const [next, setNext] = useState(false);

  function checkUser(e) {
    setDetail({ ...detail, mobile: e.target.value });
    setWarn(false);
    setError(false);
    if (String(e.target.value).length === 10) {
      // wase to ham e.target.value le sakte hai but hamko detail.mobile hi chahiye
      userService.checkUser({ mobile: e.target.value }).then((result) => {
        if (result.data) {
          let data = result.data[0];
          if (data.last_name === null) {
            setDetail({
              name: data.first_name,
              mobile: data.contact,
              address: data.address,
            });
          } else {
            setDetail({
              name: data.first_name + data.last_name,
              mobile: data.contact,
              address: data.address,
            });
          }
          setWarn("User Already Exist.");
          setNext(true);
        }
      }).catch((err) => {
        setError(err.err);
      })
    }
  }

  function redirect(e) {
    e.preventDefault();
    console.log("next");
  }

  function handle(e) {
    e.preventDefault();
    if (!detail.name || !detail.address || !detail.mobile) {
      setError("Please fill all fields.");
      return;
    }
    if (detail.mobile.length != 10) {
      setWarn("Check mobile number...");
      return;
    }
    userService.addNewUser(detail).then((result) => {
      console.log(result);
      if (result.error) {
        setError(result.error);
      }
      if (result.success) {
        console.log(result.success);
      }
    }).catch((err) => {
      setError(err.err)
    })
  }

  return (
    <Body className={"bg-gray-400"}>
      <div className="flex items-center justify-center h-[600px]">
        <form className="bg-white px-5 w-full rounded-lg py-8 flex flex-col gap-1 shadow-lg">
          <Input
            value={detail.mobile || ""}
            label="Mobile no"
            type="number"
            placeholder="Mob. No."
            warn={warn}
            onChange={(e) => checkUser(e)}
          />
          <Input
            value={detail.name || ""}
            label="Name"
            placeholder="Full Name"
            onChange={(e) => {
              setDetail({ ...detail, name: e.target.value });
              setError(false);
            }}
          />
          <Input
            value={detail.address || ""}
            label="Address"
            placeholder="Address"
            onChange={(e) => {
              setDetail({ ...detail, address: e.target.value });
              setError(false);
            }}
          />

          {/* for error */}
          {error ? (
            <h2 className="text-red-500 text-[12px] p-1">{error}</h2>
          ) : (
            <></>
          )}

          {next ? (
            <button className="pt-4" onClick={(e) => redirect(e)}>
              <BlackButton label="Next" />
            </button>
          ) : (
            <button className="pt-4" onClick={(e) => handle(e)}>
              <BlackButton label="New" />
            </button>
          )}
        </form>
      </div>
    </Body>
  );
}
