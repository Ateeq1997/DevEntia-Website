const Statistics = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-24 px-[5%] mb-8">
      {/* First Block */}
      <div className="flex flex-col gap-2">
        <div className="relative flex items-center justify-center">
          <span
            className="text-[130px] font-semibold font-bai text-transparent relative z-10"
            style={{
              WebkitTextStroke: "2px #4848FF",
              color: "transparent",
            }}
          >
            12+
          </span>
          <span
            className="absolute w-[70px] h-[70px] rounded-full z-0 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #4848FF8F 0%, #000000 80%)",
            }}
          ></span>
        </div>
        <div className="w-full h-[2px] bg-white"></div>
        <p className="text-[24px] text-[#CFDDE8] text-left">
          Project <br /> Complete
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="w-[2px] bg-[#4848FF] h-52" />

      {/* Second Block */}
      <div className="flex flex-col gap-2">
        <div className="relative flex items-center justify-center">
          <span
            className="text-[130px] font-semibold font-bai text-transparent relative z-10"
            style={{
              WebkitTextStroke: "2px #4848FF",
              color: "transparent",
            }}
          >
            8+
          </span>
          <span
            className="absolute w-[70px] h-[70px] rounded-full z-0 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #4848FF8F 0%, #000000 80%)",
            }}
          ></span>
        </div>
        <div className="w-full h-[2px] bg-white"></div>
        <p className="text-[24px] text-[#CFDDE8] text-left ">
          Happy <br /> Clients
        </p>
      </div>
       {/* Vertical Divider */}
       <div className="w-[2px] bg-[#4848FF] h-52" />

{/* Second Block */}
<div className="flex flex-col gap-2">
  <div className="relative flex items-center justify-center">
    <span
      className="text-[130px] font-semibold font-bai text-transparent relative z-10"
      style={{
        WebkitTextStroke: "2px #4848FF",
        color: "transparent",
      }}
    >
      2+
    </span>
    <span
      className="absolute w-[70px] h-[70px] rounded-full z-0 blur-3xl"
      style={{
        background:
          "radial-gradient(circle, #4848FF8F 0%, #000000 80%)",
      }}
    ></span>
  </div>
  <div className="w-full h-[2px] bg-white"></div>
  <p className="text-[24px] text-[#CFDDE8] text-left ">
    Years <br /> Experience
  </p>
</div>
 {/* Vertical Divider */}
 <div className="w-[2px] bg-[#4848FF] h-52" />

{/* Second Block */}
<div className="flex flex-col gap-2">
  <div className="relative flex items-center justify-center">
    <span
      className="text-[130px] font-semibold font-bai text-transparent relative z-10"
      style={{
        WebkitTextStroke: "2px #4848FF",
        color: "transparent",
      }}
    >
      10+
    </span>
    <span
      className="absolute w-[70px] h-[70px] rounded-full z-0 blur-3xl"
      style={{
        background:
          "radial-gradient(circle, #4848FF8F 0%, #000000 80%)",
      }}
    ></span>
  </div>
  <div className="w-full h-[2px] bg-white"></div>
  <p className="text-[24px] text-[#CFDDE8] text-left ">
    Team <br /> Members
  </p>
</div>
    </div>
  );
};

export default Statistics;
