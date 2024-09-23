import BlackButtonLink from "../../components/BlackButtonLink";

const ShowCustumerDetail = () => {
    return (
        <div className="flex flex-col items-center  h-[600px]">
            <div className="bg-white rounded-lg flex flex-col gap-2 text-base font-semibold shadow-lg w-full py-2 px-3 my-2">
                <div>Name: </div>
                <div>Mobile: </div>
                <div>Address: </div>
            </div>
            <div className="w-full py-2">
                <BlackButtonLink label="Add Measurement" to="/measurementlist/" />

            </div>
             {/* if new order exists */}
            <div className="font-bold m-1">New Order</div>

            <div className="bg-white rounded-lg flex flex-col gap-2 text-base font-semibold shadow-lg w-full py-2 px-3 my-2">
                <div>Order id: </div>
                <div>Item: </div>
                <div>Expected Date: </div>
            </div>

             {/* if old order exists */}
            <div className="font-bold m-1">Old Order</div>

            <div className="bg-white rounded-lg flex flex-col gap-2 text-base font-semibold shadow-lg w-full py-2 px-3 my-2">
                <div>Order id: </div>
                <div>Item: </div>
                <div>Return Date: </div>
            </div>
        </div>
    );
}
 
export default ShowCustumerDetail;