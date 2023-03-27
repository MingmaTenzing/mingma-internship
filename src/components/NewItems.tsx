import axios from "axios"
import Image from "next/image";
import { Key, useEffect, useState } from "react";

import NewItem from "@/utilities/NewItem";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NewItemsLoading from "@/utilities/NewItemsLoading";
function NewItems() {

    const [items, setItems] = useState<[]>([]);
    const [loading, setLoading] = useState<Boolean>(false);
    useEffect(() => {
      setLoading(true);
        async function getNewitems () {
            const {data} = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems')
            setItems(data);
            setTimeout(() => {
              setLoading(false);

            },3000)
    
        }
    
        getNewitems();
    
    

    }, [])

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
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    
      };

  

  return (
    <div className="mt-[120px]">
        <div className="flex flex-col items-center space-y-3">

         <h1 className=" font-[800] text-3xl text-center">New Items</h1>
            <div className="w-[100px] h-[1px] bg-purple"></div>

          
        </div>
       

        {
          loading? (

            <div  className="max-w-[80%] m-auto">
              <Slider {...settings} >
              {
                new Array(6).fill(0).map((_, index) => <NewItemsLoading key={index} />)
              }

              </Slider>



</div>
          ) : ( <div className="max-w-[80%] m-auto">
          <Slider {...settings} >
  
  
         {
          items.map((item: { id: Key}) => <NewItem key={item.id} item={item} />)
         }
          </Slider>
  
  
          </div>)
        }

     


           
    </div>
  )
}
export default NewItems