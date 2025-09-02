import Hero from "@/components/Blog/hero";
import Blogscard from "@/components/Blog/cards";


const Insights =()=>{

    return(
      <div className="overflow-x-hidden">
       
          <Hero/>
          <div className="">
          <Blogscard/>
          </div>
          <div className="bg-[#F9F9F9]">
          {/* Additional sections can be added here if needed */}
          </div>
         
         
        </div>
    )
}

export default Insights;