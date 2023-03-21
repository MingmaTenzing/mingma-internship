import Image from "next/image"
import bg from "../assests/bg-shape-1.jpg"
import nftbg from "../assests/nft.png"

function Explore() {
  return (
    <div className="h-[100vh] bg-[url('../assests/bg-shape-1.jpg')] bg-cover bg-no-repeat bg-center px-4"> 
    <div className="mt-[60px] md:mt-[100px] ">
     <div className="pt-20 md:pt-[150px] lg:pt-0 pr-10  md:px-10 md:flex md:items-center md:justify-center md:space-x-4 ">
      <div className="space-y-4 md:w-1/2  lg:w-[40%]">
      <p className=" text-purple font-bold ">GIGALAND MARKET</p>
      <h1 className="text-[40px] md:text-5xl leading-10  text font-[700]">Create, sell or collect digital items.</h1>
     <p className=" opacity-70">Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable</p>
    <button className=" bg-purple text-white p-1 px-10 rounded-lg "  >Explore</button  >

      </div>

      <div className="hidden md:flex">
        <Image src={nftbg} alt='nft' height={400} width={700} className="md:w-[300px] lg:w-[550px] " />

      </div>
     </div>
    </div>
    </div>
  )
}
export default Explore