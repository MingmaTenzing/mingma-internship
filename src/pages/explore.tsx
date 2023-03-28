import Nav from "@/components/Nav";
import Image from "next/image";
import { Key, use, useEffect, useState } from "react";
import bg from "../assests/subheader.jpg";
import axios from "axios";
import Countdown from "react-countdown";
import NewItem from "@/utilities/NewItem";
import NewItemsLoading from "@/utilities/NewItemsLoading";
import Footer from "@/components/Footer";
import Head from "next/head";

function Explore() {
  const [nfts, setNfts] = useState<[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [filterdata, setFilterData] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [itemstoShow, setitemstoShow] = useState<number>(8);
  console.log(filter);
  useEffect(() => {
    setLoading(true);
    async function fecthnfts() {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore"
      );

      setNfts(data);
      setLoading(false);
    }

    fecthnfts();
  }, []);

  useEffect(() => {
    setLoading(true);

    async function filterNfts() {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filter}`
      );
      setNfts(data);
      setLoading(false);
    }

    filterNfts();
  }, [filter]);

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
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg p-3 text-sm "
        >
          <option className="text-sm" value="">
            Default
          </option>
          <option className="text-sm" value="price_low_to_high">
            Price, Low to High
          </option>
          <option className="text-sm" value="price_high_to_low">
            Price, High to Low
          </option>
          <option className="text-sm" value="likes_high_to_low">
            Most Liked
          </option>
        </select>
      </div>
      {loading ? (
        <>
        <div className="p-3  flex flex-wrap  ">

          {new Array(8).fill(0).map(() => (
            <NewItemsLoading  />
          ))}
        </div>
        </>
      ) : (
        <>
          <div className="p-3  flex flex-wrap  ">
            {nfts
              .map((item: { id: Key }) => <NewItem item={item} key={item.id} />)
              .slice(0, itemstoShow)}
          </div>

          {itemstoShow !== 16 && (
            <div className="flex justify-center mt-10 ">
              <button
                onClick={() => setitemstoShow(itemstoShow + 4)}
                className="text-white bg-purple py-2 px-4 rounded-lg  hover:shadow-purple hover:shadow-lg transition-shadow ease-linear duration-200"
              >
                {" "}
                Load More
              </button>
            </div>
          )}
        </>
      )}

      <Footer />
    </div>
  );
}
export default Explore;
