import { CheckIcon } from "@heroicons/react/24/outline"
import { HeartIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Countdown from "react-countdown"

interface Props{
    item: any
}
function NewItem({item}: Props) {
 
  return (

    <div className="hover:shadow-lg transition-shadow ease-linear duration-500 group mt-6 relative  w-[300px]  m-auto border p-4 rounded-lg">
    <div className="relative z-10 flex justify-between">
      <div>
   
    <Image src={item.authorImage} alt='author' width={200} height={200} className='w-10  rounded-full border-purple  hover:border-4  transition-all ease-linear duration-200' />
    <CheckIcon className="w-4 absolute top-6 left-6  bg-purple text-white rounded-full" />

      </div>
{
  item.expiryDate &&  <div className="border flex justify-center items-center px-3 rounded-full border-purple">

   
  <Countdown zeroPadTime={0} date={item.expiryDate } />
  </div>
}
   

    </div>

    

    <div className="mt-[340px]">
        <h1 className=" font-bold">{item.title}</h1>
        <div className="flex justify-between text-gray-500">
          <p>{item.price}<span>ETH</span> </p>
          <div className="flex space-x-2 items-center">
          <HeartIcon className="w-5" />
          <span className="text-sm" >{item.likes}</span>

            </div>  
        
        </div>



    </div>
  
        <Image src={item.nftImage} alt='nft' width={400} height={400}  className='  rounded-lg max-w-[320px]   group-hover:scale-105 transition-all ease-linear duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   p-6'/>
</div>
    )
}
export default NewItem