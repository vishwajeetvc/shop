import { useState } from "react";
import BlackButton from "../../components/BlackButton";
import BlackButtonLink from "../../components/BlackButtonLink";


export default function AdminDashBoard() {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(!showModal);
  return (
    <div className="flex  justify-center h-[600px] my-4">
      <div className="w-full">
        <button className="w-full" onClick={handleOpen} >
          <BlackButton label="New" />
        </button>
        
      </div>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-full m-6 mx-6 max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-1 border-b border-solid border-blueGray-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleOpen}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-2 flex flex-col gap-3 w-full justify-center p-4">
                  <BlackButtonLink label="Custumer" to={"/newcustomer"} />
                  <BlackButtonLink label="Measurement" to="/" />
                  <BlackButtonLink label="Order" to="/"/>              
                </div>
              </div>
            </div>
          </div>
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        </>
      ) : null}
    </div>
  );
}
