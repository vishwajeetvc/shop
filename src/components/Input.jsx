function Warn({label}){
  return <>
    <h2 className="text-red-500 text-[12px] p-1">{label}</h2>
  </>
}
export default function Input({label, placeholder, type, warn=false}){
  return (
    <div className="text-[14px]">
      <div className="p-1">
        <p>{label}</p>
      </div>
      <div>
        <input className="border w-full px-2 py-1 rounded" type={type} placeholder={placeholder}/>
      </div>
      {warn ? <Warn label={warn}/> : <></> }
    </div>
  )
}
