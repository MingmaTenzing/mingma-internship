import { CloudArrowUpIcon, TagIcon, WalletIcon } from "@heroicons/react/24/outline";
import { useHover } from "usehooks-ts";
import { useEffect, useRef, useState } from "react";

function Setup() {


  return (
    <div className="flex flex-col  items-center justify-center  md:flex-row md:flex-wrap ">

      {/** SET UP YOUR WALLET **/}

    <div
   
      className="m-4 flex flex-col space-y-4 justify-center items-center"
    >
      <div className=" group relative overflow-hidden h-[300px]  md:h-[260px] w-[80%] md:w-[360px]   bg-purple bg-opacity-10 hover:bg-darkpurple hover:bg-opcity-100 hover:text-white transtion-all ease-linear duration-500 rounded-md  hover:first">
        <div className="p-5 mt-10 space-y-3">
          <WalletIcon className="w-[50px] bg-purple text-white p-1 rounded-md" />
          <h1 className="font-bold text-lg">Set up your wallet</h1>
    
            <p className="  text-gray-400  transition-all ease-linear duration-500 group-hover:text-white ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem.
            </p>
      
        </div>
        <div>

        <WalletIcon
          className={`w-[240px] absolute top-[100px] left-[220px]  text-purple opacity-10  group-hover:-rotate-45  transition-all ease-linear duration-500 `}
        />
        </div>
      </div>
    </div>
      {/** ADD YOUR NFT **/}

    <div
   
      className="m-4  flex flex-col space-y-4 justify-center items-center"
    >
      <div className=" group relative overflow-hidden h-[300px]  md:h-[260px] w-[80%] md:w-[360px]   bg-purple bg-opacity-10 hover:bg-darkpurple hover:bg-opcity-100 hover:text-white transtion-all ease-linear duration-500 rounded-md  hover:first">
        <div className="p-5 mt-10 space-y-3">
          <CloudArrowUpIcon className="w-[50px] bg-purple text-white p-1 rounded-md" />
          <h1 className="font-bold text-lg">Add your Nft&apos;s</h1>
    
            <p className="  text-gray-400  transition-all ease-linear duration-500 group-hover:text-white ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem.
            </p>
      
        </div>
        <div>

        <CloudArrowUpIcon
          className={`w-[240px] absolute top-[100px] left-[220px]  text-purple opacity-10  group-hover:-rotate-45  transition-all ease-linear duration-500 `}
        />
        </div>
      </div>
    </div>


      {/** SELL YOU NFT **/}

    <div
   
      className=" m-4  flex flex-col space-y-4 justify-center items-center"
    >
      <div className=" group relative overflow-hidden h-[300px]  md:h-[260px]  w-[80%] md:w-[360px]   bg-purple bg-opacity-10 hover:bg-darkpurple hover:bg-opcity-100 hover:text-white transtion-all ease-linear duration-500 rounded-md  hover:first">
        <div className="p-5  mt-10 space-y-3">
          <TagIcon className="w-[50px] bg-purple  text-white p-1 rounded-md" />
          <h1 className="font-bold text-lg">Sell your NFT&apos;s</h1>
    
            <p className="  text-gray-400  transition-all ease-linear duration-500 group-hover:text-white ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem.
            </p>
      
        </div>
        <div>

        <TagIcon
          className={ ` w-[240px] absolute top-[100px] left-[220px]  text-purple opacity-10  group-hover:-rotate-45  transition-all ease-linear duration-500 `}
        />
        </div>
      </div>
    </div>
    

    </div>
  );
}
export default Setup;
