import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import AuthorProfile from "@/utilities/AuthorProfile";
import { CheckIcon, EyeIcon, HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import nftimg from "../../assests/nftImage.jpg";
import image from "../../assests/author_thumbnail.jpg";
import eth from "../../assests/ethereum.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ItemDetailsLoading from "@/utilities/ItemDetailsLoading";

interface nft{
  id: number;
  title: string;
  tag: number;
  description: string;
  nftImage: string;
  nftId: number;
  ownerName: string;
  ownerId: number;
  ownerImage: string;
  creatorName: string;
  creatorId: number;
  creatorImage: string;
  price: number;
  likes: number;
  views: number;

}



function ItemDetails() {
  const [nftId, setnftId] = useState<String | String[]>();
const [nftDetails, setnftDetails] = useState<nft>()
const [loading, setLoading] = useState<Boolean>(false);


  const router = useRouter();

useEffect (() => {
if(router.isReady){
  const id = router.query.id;
  setnftId(id);
}
}, [router.isReady])



useEffect(() => {
  setLoading(true);
  async function fetchnftDetails() {

    if(nftId) {

      const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`)
    setnftDetails(data);
    setLoading(false);
    }
  }

  fetchnftDetails();

}, [nftId])
console.log(nftDetails);



  return (
    <div>
      <Nav />
      {
        loading ? (<div className="mt-20 md:mt-[140px]">      <ItemDetailsLoading />
        </div>): ( <div className="p-8  mt-20 md:mt-[140px] md:flex md:justify-center  md:space-x-8 ">
        <div>
          <Image
            src={ nftDetails?.nftImage || nftimg}
            alt="nft image"
            width={450}
            height={450}
            className="w-[350px] h-[400px] md:h-[600px]  md:w-[600px] md:max-w-[400px] lg:w-[600px] lg:max-w-[600px] object-cover"
          />
        </div>

        <div className="space-y-4 mt-4 md:mt-0 lg:w-[600px]">
          <h1 className="text-[36px] font-bold"> {nftDetails?.title}</h1>
          <div className="flex space-x-2">
            <div className="flex text-gray-500 justify-center items-center space-x-2 bg-purple w-[80px] px-2 py-1 bg-opacity-20">
              <EyeIcon className="w-4" /> <p className="text-sm">{nftDetails?.views}</p>
            </div>
            <div className="flex text-gray-500 justify-center items-center space-x-2 bg-purple w-[80px] px-2 py-1 bg-opacity-20">
              <HeartIcon className="w-4" /> <p className="text-sm">{nftDetails?.likes}</p>
            </div>
          </div>

          <p className="text-gray-600">
            {nftDetails?.description}
          </p>

          <div className="space-y-4 pb-2">
            <h1 className="font-bold">Owner</h1>
            <div className="flex items-center space-x-5">
              <div className="relative z-10">
                <Image
                  src={nftDetails?.ownerImage || image}
                  alt="author"
                  width={200}
                  height={200}
                  className=" cursor-pointer w-14   rounded-full border-purple  hover:border-4  transition-all ease-linear duration-200"
                />
                <CheckIcon className="w-5 absolute top-9 left-8  bg-purple text-white rounded-full" />
              </div>
              <div>
                <p className="font-bold hover:text-purple">{nftDetails?.ownerName}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 pb-2">
            <h1 className="font-bold">Creator</h1>
            <div className="flex items-center space-x-5">
              <div className="relative z-10">
                <Image
                  src={nftDetails?.creatorImage || nftimg}
                  alt="author"
                  width={200}
                  height={200}
                  className=" cursor-pointer w-14   rounded-full border-purple  hover:border-4  transition-all ease-linear duration-200"
                />
                <CheckIcon className="w-5 absolute top-9 left-8  bg-purple text-white rounded-full" />
              </div>
              <div>
                <p className="font-bold hover:text-purple">{nftDetails?.creatorName}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 pb-2">
            <h1 className="font-bold">Price</h1>
            <div className="flex items-center space-x-2">
              <div>
                <Image
                  src={eth}
                  alt=""
                  width={200}
                  height={650}
                  className="w-6"
                />
              </div>
              <div>
                <p className="font-bold">{nftDetails?.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>)
      }
     


      <Footer />
    </div>
  );
}
export default ItemDetails;
