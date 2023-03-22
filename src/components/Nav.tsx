import Image from "next/image"
import logo from "../assests/Ultraverse.png"
import { Bars3Icon } from '@heroicons/react/24/outline'


function Nav() {
  return (
    <div className="  z-50 fixed  top-0 left-0 w-full flex justify-between items-center px-4  py-3 md:px-[100px]  md:py-8 border-b  box-border  bg-white">
      <div className="flex space-x-8 items-center">
        <Image src={logo} alt='logo' width={200} height={200} className='w-[170px] md:w-[200px] bg-white'/>
        <input placeholder="search item here.." className="text-sm bg-slate-200 p-2 px-4 rounded-lg hidden md:flex"></input>
      </div>
      <div className="flex ">
        <Bars3Icon className="lg:hidden w-7 text-white font-[800] bg-[#403f83]" />
        <div className="hidden lg:flex space-x-6 font-bold items-center">
          
        <p>Home</p>
        <p>Explore</p>
        <button className="bg-purple text-white p-2 hover:shadow-lg hover:shadow-purple transition-all ease-linear duration-200 rounded-lg">Connect Wallet</button>
        </div>


      </div>
      
    </div>
  )
}
export default Nav