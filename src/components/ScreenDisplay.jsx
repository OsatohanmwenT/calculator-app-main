export default function ScreenDisplay({ prevDisplay, currentDisplay, operator }) {
    return(
        <div className="w-full h-32 max-sm:h-28 max-sm:p-4 mt-6 rounded-md p-6 bg-bgScreen *:transition *:duration-500 *:ease-in-out">
          <div className="overflow-hidden text-ellipsis flex flex-col  w-full items-end justify-end">
            <p className="text-lg h-7 font-semibold text-textPrimary">{prevDisplay} {operator}</p>
          <p className="text-header text-[38px] font-bold ">{currentDisplay}</p>
          </div>
        </div>
    )
} 