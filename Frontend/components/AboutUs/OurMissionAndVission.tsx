import Image from 'next/image';
import mission from '../../assets/images/mission.png';
import vission from '../../assets/images/vission.png';

const OurMissionAndVission = () => {
  return (
    <section className="about-us-bg px-[5%]  py-12 flex-col justify-center items-center ">
      <div className="flex gap-12 flex-col md:flex-row md:items-center ">
        <div>
          <h1 className="font-bold text-2xl lg:text-4xl">Our mission</h1>
          <p className="text-lg text-[#ffffffc2] mt-4 text-justify">
            To revolutionize the IT service industry by delivering cutting-edge
            solutions tailored to our clients&apos; unique needs. We strive to
            empower businesses with innovative technologies, exceptional
            service, and unwavering commitment to excellence.
          </p>
        </div>
        <Image
          src={mission}
          alt="mission"
          className="w-full h-auto md:w-[45%] "
        />
      </div>
      <div className="flex gap-12 flex-col md:flex-row-reverse mt-12 md:items-center justify-center items-center ">
        <div>
          <h1 className="font-bold text-2xl lg:text-4xl">Our Vision</h1>
          <p className="text-lg text-[#ffffffc2] mt-4 text-justify">
            At Deventia, our vision is to be the premier choice for businesses
            seeking transformative IT solutions. We aim to lead the industry
            through innovation, integrity, and unparalleled dedication to our
            clients&apos; success, driving sustainable growth and making a
            lasting impact in the digital realm.
          </p>
        </div>
        <Image
          src={vission}
          alt="vission"
          className="w-full h-auto md:w-[45%] "
        />
      </div>
    </section>
  );
};
export default OurMissionAndVission;
