import { ArrowLongRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import logo from "../assests/Ultraverse.png"

function Footer() {
  return (
    <div>

   
    <div className=" border mt-[120px] p-4 py-20 space-y-8 md:flex md:space-y-0  md:justify-center  md:space-x-14  lg:justify-around md:px-8">
      <div className="space-y-2">
        <h1 className="font-bold mb-3"> Marketplace</h1>
     <p  className=" text-gray-500">All NFTs </p>
     <p className=" text-gray-500">Art</p>
     <p className=" text-gray-500">Music</p>
     <p className=" text-gray-500">Domain Name</p>
      <p className=" text-gray-500">Virtual World</p>
      <p className=" text-gray-500">Collectibles</p>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold mb-3"> Resources</h1>
     <p  className=" text-gray-500">Help Center </p>
     <p className=" text-gray-500">Partners</p>
     <p className=" text-gray-500">Suggestions</p>
     <p className=" text-gray-500">Discord</p>
      <p className=" text-gray-500">Docs</p>
      <p className=" text-gray-500">Newsletter</p>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold mb-3"> Community</h1>
     <p  className=" text-gray-500">Community </p>
     <p className=" text-gray-500">Documentation</p>
     <p className=" text-gray-500">Brand Assests</p>
     <p className=" text-gray-500">Domain Name</p>
      <p className=" text-gray-500">Blog</p>
      <p className=" text-gray-500">Forum</p>
      <p className=" text-gray-500">Mailing List</p>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold mb-3"> Newsletter</h1>
     <p  className=" text-gray-500">Signup for our newsletter to get the latest news in your inbox. </p>
    
    <form className="flex items-center ">
    <input className="border p-2 " placeholder="enter your email"></input><button disabled className=" cursor-not-allowed px-4  py-2 bg-purple"><ArrowLongRightIcon className="text-white  w-7" /></button>
    </form>
    <p className="text-gray-500 text-sm"> Your email is safe with us. We don&apos;t spam.</p>

      </div>
      
    </div>

    <div className="flex justify-center flex-col items-center space-y-5 py-8">
      <Image src={logo} alt='logo' width={200} height={200} />
      <p className="text-sm text-gray-400">Copyright @ Mingma Tenzing Sherpa Clone 2023</p>
    </div>
    </div>
  )
}
export default Footer