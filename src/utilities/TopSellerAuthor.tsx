import AuthorProfile from "./AuthorProfile"

interface Props {
    author: any;
    
}


function TopSellerAuthor({author} : Props) {
  return (
  <div className="flex   space-x-4">
    <div className="flex space-x-4">
    <p>{author.id}</p> 
    
<AuthorProfile image={author.authorImage}/>
    </div>
    <div className="">
    <h1 className="font-bold">{author.authorName}</h1>
    <p className=" font-light  text-gray-600"><span>{author.price}</span>ETH</p>
    </div>

    

  </div>
  )
}
export default TopSellerAuthor