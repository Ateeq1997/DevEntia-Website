const Statistics = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-24 px-[5%] mb-8">
      {/* First Block - 12+ */}
      <div className="flex flex-col gap-2">
        <div className="relative flex items-center justify-center">
          <span
            className="text-[130px] font-medium font-bai text-transparent relative z-10"
            style={{
              WebkitTextStroke: "2px #4848FF",
              color: "transparent",
            }}
          >
            12+
          </span>
          <span
            className="absolute w-[100px] h-[100px] rounded-full z-0 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(72,72,255,1) 10%, rgba(72,72,255,0.4) 100%, rgba(72,72,255,0.1) 10%, transparent 100%)",
            }}
          ></span>
        </div>
        <div className="w-full h-[2px] bg-white -mt-2"></div>
        <p className="text-[24px] text-[#CFDDE8] text-left mt-2">
          Project <br /> Complete
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="w-[2px] bg-[#4848FF] h-52 flex items-center justify-center hidden lg:flex" />

      {/* Second Block - 8+ */}
      <div className="flex flex-col gap-2">
        <div className="relative flex items-center justify-center">
          <span
            className="text-[130px] font-medium font-bai text-transparent relative z-10"
            style={{
              WebkitTextStroke: "2px #4848FF",
              color: "transparent",
            }}
          >
            8+
          </span>
          <span
            className="absolute w-[100px] h-[100px] rounded-full z-0 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(72,72,255,1) 0%, rgba(72,72,255,0.4) 90%, rgba(72,72,255,0.1) 20%, transparent 100%)",
            }}
          ></span>
        </div>
        <div className="w-full h-[2px] bg-white -mt-2"></div>
        <p className="text-[24px] text-[#CFDDE8] mt-2 text-left">
          Happy <br /> Customers
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="w-[2px] bg-[#4848FF] h-52 hidden lg:flex" />

      {/* Third Block - 2+ */}
      <div className="flex flex-col gap-2">
        <div className="relative flex items-center justify-center">
          <span
            className="text-[130px] font-medium font-bai text-transparent relative z-10"
            style={{
              WebkitTextStroke: "2px #4848FF",
              color: "transparent",
            }}
          >
            2+
          </span>
          <span
            className="absolute w-[100px] h-[100px] rounded-full z-0 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(72,72,255,1) 0%, rgba(72,72,255,0.4) 90%, rgba(72,72,255,0.1) 20%, transparent 100%)",
            }}
          ></span>
        </div>
        <div className="w-full h-[2px] bg-white -mt-2"></div>
        <p className="text-[24px] text-[#CFDDE8] mt-2 text-left">
          Years <br /> Experiences
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="w-[2px] bg-[#4848FF] h-52 hidden lg:flex" />

      {/* Fourth Block - 10+ */}
      <div className="flex flex-col gap-2">
        <div className="relative flex items-center justify-center">
          <span
            className="text-[130px] font-medium font-bai text-transparent relative z-10"
            style={{
              WebkitTextStroke: "2px #4848FF",
              color: "transparent",
            }}
          >
            10+
          </span>
          <span
            className="absolute w-[100px] h-[100px] rounded-full z-0 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(72,72,255,1) 0%, rgba(72,72,255,0.4) 90%, rgba(72,72,255,0.1) 20%, transparent 100%)",
            }}
          ></span>
        </div>
        <div className="w-full h-[2px] bg-white -mt-2"></div>
        <p className="text-[24px] text-[#CFDDE8] mt-2 text-left">
          Team <br /> Members
        </p>
      </div>
    </div>
  );
};

export default Statistics;