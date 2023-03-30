import Nav from "@/components/Nav";
import { CheckIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Image from "next/image";
import { Key, useEffect, useState } from "react";
import bannerimg from "../../assests/author_banner.jpg";
import image from "../../assests/author_thumbnail.jpg";
import NewItem from "@/utilities/NewItem";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import AuthorLoading from "@/utilities/AuthorLoading";
interface author {
  address: string;
  authorId: number;
  authorImage: string;
  authorName: string;
  followers: number;
  id: number;
  nftCollection: any;
  tag: string;
}

function authorid() {
  const [authorDetails, setauthorDetails] = useState<author>();
  const [authorId, setauthorId] = useState<string | String[]>();
  const [followers, setfollowers] = useState<number>();
  const [clickedfollow, setclickedFollow] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);
  const router = useRouter();

  function follow() {
    setclickedFollow(!clickedfollow);
    if (followers) {
      setfollowers(followers + 1);
    }
  }

  function unfollow() {
    setclickedFollow(!clickedfollow);
    if (followers) {
      setfollowers(followers - 1);
    }
  }

  console.log(authorId);
  useEffect(() => {
    if (router.isReady) {
      const id = router.query.authorid;
      setauthorId(id);
    }
  }, [router.isReady]);

  useEffect(() => {
    setloading(true);
    async function fetchauthorDetails() {
      if (authorId) {
        const { data } = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`
        );
        setauthorDetails(data);
        setfollowers(data.followers);
        setloading(false);
      }
    }

    fetchauthorDetails();
  }, [authorId]);

  console.log(authorDetails);
  return (
    <div>
      <Nav />
      {loading ? (
        <div className="mt-[100px]">
          <AuthorLoading />
        </div>
      ) : (
        <div>
          <div className="mt-10 ">
            <Image
              src={bannerimg}
              width={1920}
              height={1080}
              alt="author banner"
              className="md:h-[300px] md:object-cover"
            />
          </div>

          <div className="p-4 md:px-16 mt-4 md:mt-10 space-y-3 md:flex md:justify-between">
            <div className=" md:flex md:items-center md:space-x-4">
              <div className="relative z-10">
                <Image
                  src={authorDetails?.authorImage || image}
                  alt="author"
                  width={200}
                  height={200}
                  className=" cursor-pointer w-[150px]    rounded-full border-purple  hover:border-4  transition-all ease-linear duration-200"
                />
                <CheckIcon className="w-9 p-2 absolute top-[120px] left-[100px]  bg-purple text-white rounded-full" />
              </div>
              <div className="space-y-1 mt-5 md:mt-0">
                <p className="font-bold  text-[20px]">
                  {authorDetails?.authorName}
                </p>
                <p className=" text-purple">{authorDetails?.tag}</p>
                <div className="flex space-x-2">
                  <p className="text-gray-600">
                    {authorDetails?.address.slice(0, 15)}
                    <span>....</span>
                  </p>{" "}
                  {authorDetails?.address && (
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(authorDetails?.address);
                      }}
                      className="px-2 text-sm bg-gray-300 text-gray-600"
                    >
                      Copy
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2 md:space-y-0 md:flex md:space-x-2 md:items-center ">
              <p className="font-bold  text-gray-500">
                {followers} <span>followers</span>
              </p>
              {clickedfollow ? (
                <button
                  onClick={unfollow}
                  className="px-8 py-2 bg-purple rounded-lg text-white font-bold"
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={follow}
                  className="px-8 py-2 bg-purple rounded-lg text-white font-bold"
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className="p-3  flex flex-wrap ">
            {authorDetails?.nftCollection.map((item: { id: Key }) => (
              <NewItem
                key={item.id}
                item={item}
                authorimage={authorDetails?.authorImage}
              />
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
export default authorid;
