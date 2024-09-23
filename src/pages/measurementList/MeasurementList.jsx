import BlackButton from "../../components/BlackButton"

function MeasurementList() {
    return (
        <div className="flex flex-col items-center  h-[600px]">
            <div className="bg-white rounded-lg flex flex-col gap-2 text-base font-semibold shadow-lg w-full py-2 px-3 my-2">
                <div>Name: </div>
                <div>Mobile: </div>
                <div>Address: </div>
            </div>
            <div className="w-full">
                <button className="w-full my-3" >
                    <BlackButton label="Add" />
                </button>
            </div>
            <div className="bg-white rounded-lg flex flex-col gap-3  text-base font-semibold shadow-lg w-full p-2 my-2">
                <div className="h-24 border border-black rounded-lg flex bg-slate-100  ">
                    <div className="w-[35%] border-e border-black my-1">
                        <img src="" alt="" />
                    </div>
                    <div className="w-full flex flex-col text-sm gap-2 my-auto px-2">
                        <div className="flex flex-row justify-between w-full">
                            <div className="">Item name </div>
                            <div className="">Edit</div>
                        </div>
                        <div className="flex flex-row gap-3 w-full">
                            <div className="">Item: 2 </div>
                            <div className=""> increase</div>
                        </div>
                        <div className="text-[red]">Amount: 999</div>
                    </div>
                </div>
                <div className="h-24 border border-black rounded-lg flex bg-slate-100  ">
                    <div className="w-[35%] border-e border-black my-1">
                        <img src="" alt="" />
                    </div>
                    <div className="w-full flex flex-col text-sm gap-2 my-auto px-2">
                        <div className="flex flex-row justify-between w-full">
                            <div className="">Item name </div>
                            <div className="">Edit</div>
                        </div>
                        <div className="flex flex-row gap-3 w-full">
                            <div className="">Item: 2 </div>
                            <div className=""> increase</div>
                        </div>
                        <div className="text-[red]">Amount: 999</div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default MeasurementList
