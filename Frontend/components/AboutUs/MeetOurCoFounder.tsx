import Image from 'next/image';
import Founder from '../../assets/images/founder.png';

const MeetOurCoFounder = () => {
  return (
    <section className="flex gap-12 flex-col md:flex-row p-[5%] co-founder-bg">
      <Image
        src={Founder}
        alt="Co Founder"
        className="w-full md:w-[45%] h-[80svh] md:h-screen max-h-[30rem]"
      />
      <div>
        <h1 className="font-bold text-3xl lg:text-4xl">Meet Founder</h1>
        <p className="text-lg text-[#BBBBBB] mt-4">
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
          className="bg-[#7571e681] px-8 py-3 font-semibold text-balance w-fit mt-8 text-black"
        >
          Book a call
        </a>
      </div>
    </section>
  );
};
export default MeetOurCoFounder;
