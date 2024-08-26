export default function Body({children, className}){
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="w-[90%] md:w-[450px] relative">
        {children}
      </div>
    </div>
  )
}
