import AiMlSection from "@/components/home/AI&MLSection";
import BlockchainSection from "@/components/home/BlockchainSection";
import CloudSection from "@/components/home/CloudSection";
import Contact from "@/components/home/contact";
import TechSection from "@/components/home/TechSection";


const Page =()=>{

    return(
        <>
         <TechSection/>
         <CloudSection/>
         <AiMlSection/>
         <BlockchainSection/>
         <Contact/>
        </>
    )
}

export default Page;