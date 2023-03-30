import Link from "next/link";
import AuthorProfile from "./AuthorProfile"

interface Props {
    author: any;
    
}


function TopSellerAuthor({author} : Props) {
  return (
  <div className="flex   space-x-4">
    <div className="flex space-x-4">
    <p>{author.id}</p> 
    
<Link href={`/author/${author.authorId}`}>
 <AuthorProfile image={author.authorImage}/>
</Link>
    </div>
    <div className="">
    <Link href={`/author/${author.authorId}`}>
  <h1 className="font-bold hover:text-purple cursor-pointer">{author.authorName}</h1>
</Link>
    <p className=" font-light  text-gray-600"><span>{author.price}</span>ETH</p>
    </div>

    

  </div>
  )
}
export default TopSellerAuthor