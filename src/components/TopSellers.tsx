import { Key, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import authorimg from "../assests/author_thumbnail.jpg"
import { CheckIcon } from "@heroicons/react/24/outline";
import AuthorProfile from "@/utilities/AuthorProfile";
import TopSellerAuthor from "@/utilities/TopSellerAuthor";
function TopSellers() {
  const [topSellers, setTopSellers] = useState<[]>([]);

  useEffect(() => {
    async function getTopSellers() {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers"
      );
      setTopSellers(data);
    }

    getTopSellers();
  }, []);

  return (
    <div className="mt-[100px]">
      <div className="flex flex-col items-center justify-center space-y-3">
        <h1 className=" font-[800] text-3xl text-center">Top Sellers</h1>
        <div className="w-[100px] h-[1px] bg-purple"></div>
      </div>

<div className="mt-10 flex flex-col space-y-4 px-10  md:mx-auto md:gap-2 md:items-center md:grid md:grid-cols-3  md:justify-center lg:grid-cols-4 md:max-w-[700px] lg:max-w-[1200px]   ">
      {
        topSellers?.map((author: { id: Key}) => <TopSellerAuthor key={author.id} author={author} />)
      }

 

      

</div>


      
    </div>
  );
}
export default TopSellers;
