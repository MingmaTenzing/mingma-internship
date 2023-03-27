import { CheckIcon, HeartIcon } from "@heroicons/react/24/solid"

function NewItemsLoading() {
  return (
    <div className=" animate-pulse hover:shadow-lg transition-shadow ease-linear duration-500 group mt-6 relative  md:max-w-[300px] m-auto border p-4 rounded-lg">
    <div className="relative z-10">

    <div className="w-8 h-8 absolute top-3 left-3  bg-gray-400 text-white rounded-full"></div>
    </div>

    

    <div className="mt-[340px]">
        <div className="w-[120px] h-2 bg-gray-300 mb-4"></div>
        <div className="flex justify-between text-gray-500">
          <div className="w-[100px] h-2 bg-gray-200"> </div>
          <div className="flex space-x-2 items-center">
          <HeartIcon className="w-5" />
          <span className="w-4 h-4 rounded-full bg-gray-500" ></span>

            </div>  
        
        </div>



    </div>
  
        <div  className=' bg-gray-400 overflow-hidden rounded-lg w-[290px] h-[200px]  transition-all ease-linear duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   p-6'></div>
</div>
  )
}
export default NewItemsLoading