import { CheckIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import authorimg from  "../assests/author_thumbnail.jpg"

interface Props{
    image: any;
   
}

function AuthorProfile({image}: Props) {
  return (
    <div className="relative z-10">

<Image src={image} alt='author' width={200} height={200} className=' cursor-pointer w-10   rounded-full border-purple  hover:border-4  transition-all ease-linear duration-200' />
<CheckIcon className="w-4 absolute top-6 left-6  bg-purple text-white rounded-full" />
</div>
  )
}
export default AuthorProfile