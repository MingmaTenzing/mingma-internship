import Nav from "@/components/Nav";
import Image from "next/image";
import { Key, useEffect, useState } from "react";
import bg from "../assests/subheader.jpg";
import axios from "axios";
import Countdown from "react-countdown";
import NewItem from "@/utilities/NewItem";
import Footer from "@/components/Footer";
import Head from "next/head";

function Explore() {
  const [nfts, setNfts] = useState<[]>([]);

  const [itemstoShow, setitemstoShow] = useState<number>(8)

  useEffect(() => {
    async function fecthnfts() {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore"
      );

      setNfts(data);
    }

    fecthnfts();
  }, []);
  console.log(nfts);
  return (
    <div>
      <Head>
        <title>Explore</title>
      </Head>
      <Nav />
      <div className="relative">
        <Image
          src={bg}
          alt="subheader "
          width={1920}
          height={1080}
          className="w-full md:h-[300px] lg:h-[400px] object-cover relative"
        />
        <div className="text-white font-bold text-[30px] md:text-[40px] lg:text-[50px] absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          Explore
        </div>
      </div>



      <div className="p-4 md:ml-10 mt-10">
 

        <select className="border rounded-lg p-3 text-sm ">
            <option className="text-sm">Default</option>
            <option className="text-sm">Price, Low to High</option>
            <option className="text-sm">Price, High to Low</option>
            <option className="text-sm">Most Liked</option>

        </select>

      </div>

      <div className="p-3  flex flex-wrap  ">
        {
          nfts.map((item: { id: Key}) => <NewItem item={item} key={item.id} />).slice(0,itemstoShow)
        }


        
      </div>

      {
        (itemstoShow !== 16) && <div className="flex justify-center mt-10 ">

        <button onClick={() => setitemstoShow(itemstoShow + 4)} className="text-white bg-purple py-2 px-4 rounded-lg  hover:shadow-purple hover:shadow-lg transition-shadow ease-linear duration-200"> Load More</button>
  
  </div>
      }

<Footer />
    </div>
  );
}
export default Explore;
