import Image from "next/image"
import logo from "../assests/Ultraverse.png"
import { Bars3Icon } from '@heroicons/react/24/outline'
import { XMarkIcon } from "@heroicons/react/24/solid"
import {useState} from 'react'
import Link from "next/link"
function Nav() {

  const [openMenu, setOpenMenu] = useState<Boolean>(false)
  return (
    <div className="  z-50 fixed  top-0 left-0 w-full flex justify-between items-center px-4  py-3 md:px-[100px]  md:py-8 border-b  box-border  bg-white">
      <div className="flex space-x-8 items-center">
      <Link href={'/'}>
      <Image src={logo} alt='logo' width={200} height={200} className='w-[170px] md:w-[200px] bg-white'/>
      </Link> 
        <input placeholder="search item here.." className="text-sm bg-slate-200 p-2 px-4 rounded-lg hidden md:flex"></input>
      </div>
      <div className="flex ">
        <Bars3Icon onClick={() => setOpenMenu(!openMenu)} className="lg:hidden w-7 text-white font-[800] bg-[#403f83]" />
        <div className="hidden lg:flex space-x-6 font-bold items-center">
          
       <Link href={"/"}>  <p>Home</p> </Link> 
       <Link href={"/explore"}>
       
       <p>Explore</p>
       </Link> 
        <button className="bg-purple text-white p-2 hover:shadow-lg hover:shadow-purple transition-all ease-linear duration-200 rounded-lg">Connect Wallet</button>
        </div>


      </div>

      {
        openMenu && 
        <div className=" transition-all ease-linear  duration-500  bg-darkpurple absolute top-0 left-0 w-full h-[100vh]  ">
          <div className="absolute top-0 right-0 p-5">
            <XMarkIcon onClick={() => setOpenMenu(!openMenu)}  className="w-10 text-white font-bold" />
  
          </div>
  
   <div className="flex flex-col h-full w-full justify-center items-center space-y-4 ">
  
            <p className="text-white  text-2xl">Home </p>
            <p className="text-white  text-2xl">Explore </p>
          
           </div>
    
    
  
        </div>
      }

      
    </div>
  )
}
export default Nav