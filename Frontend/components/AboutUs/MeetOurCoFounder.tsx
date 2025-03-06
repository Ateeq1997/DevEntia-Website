import Image from 'next/image';
import Founder from '../../assets/images/founder.png';
import { MdOutlineArrowOutward } from 'react-icons/md';


const MeetOurCoFounder = () => {
  return (
    <section className="flex gap-12 flex-col lg:flex-row p-[5%] co-founder-bg items-center">
      <Image
        src={Founder}
        alt="Co Founder"
        className=" w-full  lg:w-[45%] xs:h-[50svh] sm:h-[80svh] md:h-screen max-h-[30rem]"
      />
      <div>
        <h1 className="font-bold text-3xl lg:text-4xl">Meet Our Founder</h1>
        <p className="text-lg text-[#BBBBBB] mt-4 text-justify">
          As a versatile professional,{' '}
          <span className="text-[#8A88EC] font-semibold">Huzaifa Shad</span>{' '}
          brings a wealth of expertise to our team. With a background in
          software engineering, project management, software testing, design
          analysis, and QA engineering, he plays a pivotal role in driving our
          company&apos;s success. Huzaifa not only oversees project execution
          but also provides strategic direction, ensuring that our initiatives
          align with our goals and objectives. His multifaceted skills and
          visionary leadership are instrumental in shaping our company&apos;s
          future.
        </p>
        <br />
        <a
          href="https://www.linkedin.com/in/huzaifa-rajpoot-7a7718289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 flex-wrap hover:bg-[#4848FF] hover:scale-110 transition-all duration-700 ease-in-out w-fit mt-8"
                  >
                    <p className="p-4 bg-[#4848FF] text-white flex items-center gap-2">
                      Book a call
                    </p>
                    <div className="p-4 bg-[#4848FF] flex items-center justify-center">
                      <MdOutlineArrowOutward size={25} color="#fff" />
                    </div>
        </a>
      </div>
    </section>
  );
};
export default MeetOurCoFounder;
