import { CircleStackIcon, TableCellsIcon } from "@heroicons/react/24/solid"
import { CreditCardIcon, GlobeAltIcon, GlobeAsiaAustraliaIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { MinusIcon, MusicalNoteIcon, PhotoIcon, PlayCircleIcon } from "@heroicons/react/24/solid"

function BrowseCategory() {
  return (
    <div className="mt-[120px]">
         <div className="flex flex-col items-center space-y-3">
        <h1 className=" font-[800] text-3xl text-center">Browse Category</h1>
        <div className="w-[100px] h-[1px] bg-purple"></div>
      </div>

      <div className="mt-10 grid  grid-cols-2  gap-3 m-auto max-w-[320px]  md:flex md:max-w-[90%] lg:max-w-full md:justify-center md:space-x-4 ">
        <div className="rounded-lg cursor-pointer group hover:bg-darkpurple  w-[140px] lg:w-[200px] bg-purple bg-opacity-10 p-4">
            <div className="flex flex-col items-center space-y-2 ">
            <PhotoIcon className="w-[50px] text-purple group-hover:text-white transition-all ease-linear duration-300"/>
            <p className="group-hover:text-white  text-gray-500 text-sm text-center font-bold transition-all ease-linear duration-300">Art</p>
            </div>


        </div>
        <div className="rounded-lg cursor-pointer group hover:bg-darkpurple w-[140px] lg:w-[200px] bg-purple bg-opacity-10 p-4">
            <div className="flex flex-col items-center space-y-2 ">

            <MusicalNoteIcon className="w-[50px] text-purple group-hover:text-white transition-all ease-linear duration-300"/>
            <p className="group-hover:text-white  text-gray-500 text-sm text-center font-bold transition-all ease-linear duration-300">Music</p>
            </div>


        </div>
        <div className="rounded-lg cursor-pointer group hover:bg-darkpurple w-[140px] lg:w-[200px] bg-purple bg-opacity-10 p-4">
            <div className="flex flex-col items-center space-y-2 ">

            <MagnifyingGlassIcon className="w-[50px] text-purple group-hover:text-white transition-all ease-linear duration-300"/>
            <p className="group-hover:text-white  text-gray-500 text-sm text-center font-bold transition-all ease-linear duration-300">Domain Names</p>
            </div>


        </div>
        <div className="rounded-lg cursor-pointer group hover:bg-darkpurple w-[140px] lg:w-[200px] bg-purple bg-opacity-10 p-4">
            <div className="flex flex-col items-center space-y-2 ">

            <GlobeAsiaAustraliaIcon className="w-[50px] text-purple group-hover:text-white transition-all ease-linear duration-300"/>
            <p className="group-hover:text-white  text-gray-500 text-sm text-center font-bold transition-all ease-linear duration-300">Virtual Worlds</p>
            </div>


        </div>
        <div className="rounded-lg cursor-pointer group hover:bg-darkpurple w-[140px] lg:w-[200px] bg-purple bg-opacity-10 p-4">
            <div className="flex flex-col items-center space-y-2 group-hover:text-white">

            <CreditCardIcon className="w-[50px] text-purple group-hover:text-white transition-all ease-linear duration-300"/>
            <p className="group-hover:text-white  text-gray-500 text-sm text-center font-bold transition-all ease-linear duration-300">
                Trading Cards
            </p>
            </div>


        </div>
        <div className="rounded-lg cursor-pointer group hover:bg-darkpurple w-[140px] lg:w-[200px] bg-purple bg-opacity-10 p-4">
            <div className="   flex flex-col items-center space-y-2 ">

            <CircleStackIcon className="w-[50px] text-purple group-hover:text-white transition-all ease-linear duration-300"/>
            <p className="group-hover:text-white  text-gray-500 text-sm text-center font-bold transition-all ease-linear duration-300">Domain Names</p>
            </div>


        </div>

      </div>
        
    </div>
  )
}
export default BrowseCategory