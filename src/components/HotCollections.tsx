import { CheckBadgeIcon, CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import axios from "axios";
import { Key, useEffect, useState } from "react";
import HotItem from "@/utilities/HotItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HotCollectionLoading from "@/utilities/HotCollectionLoading";

function HotCollections() {
  const [hotCollections, setHotCollectoins] = useState<[]>();
  const [loading, setLoading] = useState<Boolean>();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setLoading(true);
    async function fetchHotCollections() {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
      );
      setHotCollectoins(data);
      setTimeout(() => {
        setLoading(false);  

      },3000)
     
    }
    fetchHotCollections();
  }, []);
  console.log(hotCollections)

  return (
    <div className="mt-[120px]">
      <div className="flex flex-col items-center space-y-3">
        <h1 className=" font-[800] text-3xl text-center">Hot Collections</h1>
        <div className="w-[100px] h-[1px] bg-purple"></div>
      </div>

      {!loading ? (
        <div className=" max-w-[80%] m-auto ">
          <Slider {...settings}>
            {hotCollections?.map((item: { id: Key }) => (
              <HotItem key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      ) : (
        <div className="max-w-[70%] m-auto">
          <Slider {...settings}>
           {new Array(5).fill(0).map((_, index) => <HotCollectionLoading key={index}/>)}
          </Slider>
        </div>
      )}
    </div>
  );
}
export default HotCollections;
