import NewItemsLoading from "./NewItemsLoading"

function AuthorLoading() {
  return (
    <div>
        <div className=" w-full h-[200px] md:h-[300px]  bg-gray-400 animate-pulse">

        </div>
    <div className="p-4 md:px-16 space-y-4 animate-pulse md:flex md:items-center md:justify-between">
      
        
    
        <div className="md:flex md:space-x-4 md:items-center">

        <div className="w-[150px] h-[150px] bg-gray-500 rounded-full"></div>
        <div className="space-y-3 mt-4 md:mt-0">
        <div className="w-[200px] h-4 bg-slate-500"></div>
        <div className="w-[180px] h-3 bg-slate-400"></div>
        <div className="w-[200px] h-2 bg-slate-300"></div>

        </div>
        </div>
        <div className="space-y-3 md:space-y-0 md:flex md:items-center  md:space-x-3">
            <div className="w-[100px] h-3  bg-gray-600"></div>
            <div className="w-[80px] h-5  bg-gray-400 rounded-lg"></div>
        </div>

       
    </div>
     <div className="p-3 md:flex md:flex-wrap">
     {
         new Array(8).fill(0).map((_, index) => <NewItemsLoading key={index}/>)
     }

 </div>
 </div>
  )
}
export default AuthorLoading