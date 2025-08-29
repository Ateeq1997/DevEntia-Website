import Getblog from "@/components/adminDashboard/blog/Blog";
import Createblog from "@/components/adminDashboard/blog/CreateBlog";

const page =()=>{

    return(

        <div className="flex flex-col items-center gap-10">
         <Createblog/>
         <Getblog/>
        </div>
    )
}

export default page;