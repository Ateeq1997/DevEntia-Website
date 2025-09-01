import Blogscard from "../../../../components/Blog/cards"  ;
import Content from "../../../../components/Blog/Details/content";
// import Hero from "../../../../components/Blog/Details/hero";
// import Footer from "../../../../components/layout/Footer";
// import Navbar from "../../../../components/layout/Navbar";


const Details =()=>{
    return(
        <div className=" ">
          {/* <Navbar/> */}

          {/* <Hero/> */}
          <Content/>
         <div className="bg-[black] max-w-[1750px] mx-auto">
          <h1 className="text-[20px] lg:text-[32px] font-bold text-[white] lg:pl-24 pt-8 text-center lg:!text-left" >Continue Reading</h1>
          <div className="mt-20">
          <Blogscard/>

          </div>
         </div>
          {/* <Footer/> */}
        </div>
    )
}

export default Details;