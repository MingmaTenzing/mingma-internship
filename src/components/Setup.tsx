import { WalletIcon } from "@heroicons/react/24/outline";
import { useHover } from "usehooks-ts";
import { useEffect, useRef, useState } from "react";

function Setup() {
    const hoverRef= useRef(null)
    const isHover = useHover(hoverRef);
    const [rotateicon, setRotateIcon] = useState('');

    useEffect (() => {
        if (isHover) {
            setRotateIcon('-rotate-45')
        }
        else {
            setRotateIcon('')
        }
        
    

    },[isHover])
 
  return (
    <div ref={hoverRef} className="flex flex-col space-y-4 justify-center items-center">
        <div className="relative overflow-hidden h-[300px]  w-[80%]   bg-purple bg-opacity-10 hover:bg-darkpurple hover:bg-opcity-100 hover:text-white transtion-all ease-linear duration-500 rounded-md">
        <div className="p-5 mt-10 space-y-3">
        <WalletIcon className="w-[50px] bg-purple text-white p-1 rounded-md" />
        <h1 className="font-bold text-lg">Set up your wallet</h1>
        <p className=" opacity-60">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem.
        </p>
      </div>
      <WalletIcon className={`w-[240px] absolute top-[100px] left-[220px]  text-purple opacity-10 ${rotateicon}  transition-all ease-linear duration-500 `} />

        </div>
       

       
    
    </div>
  );
}
export default Setup;
