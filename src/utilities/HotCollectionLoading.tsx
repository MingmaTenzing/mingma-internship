
function HotCollectionLoading() {
  
  return (
    <div>
         <div className=" animate-pulse border mt-10 max-w-[300px] my-4 mx-2 md:w-[340px]  hover:shadow-lg transition-all ease-linear duration-150 overflow-hidden rounded-lg relative m-auto ">
    
    <div className="overflow-hidden ">

      <div className='w-[300px] bg-gray-500 h-20'> </div>
    </div>
      

<div className="absolute  bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col ">
      <div className='w-[40px] h-[40px] bg-gray-200 rounded-full  border-4 border-white '> </div>

</div>

      <div className="flex flex-col items-center  space-y-6 mt-10 mb-5 w-full">
         
          <h1 className="w-1/2 h-3 bg-gray-400"></h1>
          <p className="w-1/3  h-2 bg-gray-400"></p>
          
      </div>


  </div>

  {/*** END */}
    </div>
  )
}
export default HotCollectionLoading