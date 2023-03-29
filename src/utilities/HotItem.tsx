import { CheckIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useRouter } from "next/router";
import authorbanner from "../assests/author_banner.jpg"
import  authorimage from "../assests/author_thumbnail.jpg"

interface Props{
  item: any;
}
function HotItem({item}: Props) {
  const router = useRouter();

 
  return (
    <div>

        {/**** HOT COLLECTION ITEM start  */}
        <div className=" mt-10 max-w-[300px] my-4 mx-2 md:w-[340px]  hover:shadow-lg transition-all ease-linear duration-150 overflow-hidden rounded-lg relative m-auto ">
    
        <div className="overflow-hidden ">
    
          <Image onClick={() => router.push(`item-details/${item.nftId}`)} src={item.nftImage} alt="author thumbnail" width={400} height={200} className=' cursor-pointer hover:scale-110 transition-all ease-linear duration-500  '  />
        </div>
          
    
    <div className="absolute  bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col ">
          <Image src={item.authorImage} alt="author thumbnail" width={200} height={200} className=' cursor-pointer rounded-full w-14 border-4 border-white '/>
          <CheckIcon className="w-5 bg-purple text-white font-bold rounded-full p-1 -mt-5 ml-8" />
    
    </div>
    
          <div className="flex flex-col items-center  bg-white mt-10 mb-5 w-full">
             
              <h1 onClick={() => router.push(`item-details/${item.nftId}`)} className="font-bold cursor-pointer">{item.title}</h1>
              <p className="text-sm">{ item.code}</p>
              
          </div>
    
    
      </div>
    
      {/*** END */}
    </div>
  )
}
export default HotItem