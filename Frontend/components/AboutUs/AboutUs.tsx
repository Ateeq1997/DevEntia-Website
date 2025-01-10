// about us page
import Image from 'next/image';
import aboutUsImg from '../../assets/images/about-us.webp';
const AboutUs = () => {
  return (
    <section className="about-us-bg p-[5%] flex gap-8 lg:gap-20 flex-col md:flex-row items-center">
    <Image
      src={aboutUsImg}
      alt="people"
      className="w-full h-auto md:w-2/6"
    />
    <div className="text-[#696969] text-lg">
      <h1 className="text-3xl md:text-4xl font-bold text-[#7471E6]">
        About Us
      </h1>
      <p className="border-l-4 border-[#7471E6]  mt-6 mb-4 pl-3 text-justify">
        At DevEntia, our mission is simple yet profound: to redefine the
        standards of excellence in our industry while empowering our clients
        to achieve their goals.
      </p>
      <p className="text-justify">
        We are committed to delivering innovative solutions and exceptional
        services that exceed expectations and drive success. With a relentless
        focus on quality, integrity, and customer satisfaction, we strive to
        build lasting partnerships and make a positive impact in the
        communities we serve. Every day, we endeavor to inspire growth, foster
        creativity, and create meaningful opportunities for all stakeholders.
        Together, we are shaping a brighter future, one milestone at a time.
      </p>
    </div>
  </section>
  
  );
};
export default AboutUs;
