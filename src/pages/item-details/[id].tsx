import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { EyeIcon, HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import nftimg from "../../assests/nftImage.jpg";

function itemDetails() {
  return (
    <div>
      <Nav />
      <div className="p-4 mt-20">
        <div>
          <Image
            src={nftimg}
            alt="nft image"
            width={450}
            height={450}
            className="w-[400px] h-[400px] object-cover"
          />
        </div>

        <div className="">
          <h1 className="text-[36px] font-bold"> The Truth #624</h1>
          <div className="flex space-x-2">
            <div className="flex text-gray-500 justify-center items-center space-x-2 bg-purple w-[80px] px-2 py-1 bg-opacity-20">
              <EyeIcon className="w-4" /> <p className="text-sm">443</p>
            </div>
            <div className="flex text-gray-500 justify-center items-center space-x-2 bg-purple w-[80px] px-2 py-1 bg-opacity-20">
              <HeartIcon className="w-4" /> <p className="text-sm">14</p>
            </div>
          </div>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default itemDetails;
