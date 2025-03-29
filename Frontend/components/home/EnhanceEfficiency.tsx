import bgImag from '@/assets/images/home/enhance-effeciency.png';
import Image from 'next/image';

const EnhanceEfficiency = () => {
  return (
    <section
      style={{
        background: `url(${bgImag.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
      className="w-full py-12 overflow-hidden"
    >
      <h1 className="text-[#4848FF] text-base">OUR SERVICES</h1>
      <h2 className="font-bold text-3xl lg:text-4xl xl:text-6xl max-w-xl relative pb-2">
        Enhance efficiency with our expertise.
        <span className="absolute bottom-0 left-0 h-[1px] w-full max-w-[100px] bg-[#C8CFD5]"></span>
      </h2>

      <svg
        width="100%"
        height="418"
        viewBox="0 0 1169 418"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 415.192C2 415.192 38.903 330.36 195.058 371.312C198.101 372.132 201.026 373.537 204.147 374.006C233.716 378.768 284.545 395.126 357.805 319.702C361.472 315.915 364.788 311.777 368.26 307.795C394.552 277.461 421.274 253.569 538.731 258.84C542.398 258.996 546.065 259.386 549.693 259.816C568.222 262.041 644.642 265.047 702.064 174.983C704.053 171.899 713.766 155.932 715.483 152.692C718.838 146.485 718.448 147.656 731.009 131.493C768.068 83.7483 803.917 74.496 850.027 70.2798C877.879 67.7032 919.112 66.7662 970.41 73.8323C985.272 75.8624 1000.25 76.6041 1015.19 75.5501C1060.95 72.3879 1149.7 58.8803 1166.24 2"
          stroke="url(#paint0_linear_5279_4860)"
          strokeWidth="4"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_5279_4860"
            x1="1166"
            y1="1.99994"
            x2="1.99998"
            y2="415"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4848FF" />
            <stop offset="0.490117" stopColor="white" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};
export default EnhanceEfficiency;
