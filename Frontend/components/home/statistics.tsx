const Statistics = () => {
  return (
    <section
      className="relative z-[50] w-full py-16
      bg-white dark:bg-[#0B0B0D]
      transition-colors duration-700 ease-in-out"
    >
      <div
        className="flex flex-col lg:flex-row items-center justify-center
        gap-10 lg:gap-16 px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-40
        max-w-[90rem] mx-auto overflow-visible"
      >
        {/* :one: Project Complete */}
        <div className="relative flex flex-col gap-2 items-center text-center z-[1]">
          <div className="relative flex items-center justify-center">
            <span
              className="text-[100px] md:text-[120px] lg:text-[130px] font-medium font-bai text-transparent relative"
              style={{
                WebkitTextStroke: "2px #4848FF",
                color: "transparent",
              }}
            >
              55+
            </span>
            <span
              className="absolute w-[120px] h-[120px] rounded-full blur-2xl opacity-60"
              style={{
                background:
                  "radial-gradient(circle, rgba(72,72,255,0.6) 0%, rgba(72,72,255,0.25) 70%, transparent 100%)",
              }}
            ></span>
          </div>
          <div className="w-full h-[2px] bg-black dark:bg-white opacity-70 transition-colors duration-500"></div>
          <p className="text-[20px] md:text-[22px] lg:text-[24px] text-gray-800 dark:text-[#CFDDE8] mt-2 transition-colors duration-500">
            Project <br /> Complete
          </p>
        </div>
        {/* Divider */}
        <div className="hidden lg:flex w-[2px] bg-[#4848FF] h-52 opacity-60" />
        {/* :two: Happy Customers */}
        <div className="relative flex flex-col gap-2 items-center text-center z-[1]">
          <div className="relative flex items-center justify-center">
            <span
              className="text-[100px] md:text-[120px] lg:text-[130px] font-medium font-bai text-transparent relative"
              style={{
                WebkitTextStroke: "2px #4848FF",
                color: "transparent",
              }}
            >
              40+
            </span>
            <span
              className="absolute w-[120px] h-[120px] rounded-full blur-2xl opacity-60"
              style={{
                background:
                  "radial-gradient(circle, rgba(72,72,255,0.6) 0%, rgba(72,72,255,0.25) 70%, transparent 100%)",
              }}
            ></span>
          </div>
          <div className="w-full h-[2px] bg-black dark:bg-white opacity-70 transition-colors duration-500"></div>
          <p className="text-[20px] md:text-[22px] lg:text-[24px] text-gray-800 dark:text-[#CFDDE8] mt-2 transition-colors duration-500">
            Happy <br /> Customers
          </p>
        </div>
        {/* Divider */}
        <div className="hidden lg:flex w-[2px] bg-[#4848FF] h-52 opacity-60" />
        {/* :three: Years Experience */}
        <div className="relative flex flex-col gap-2 items-center text-center z-[1]">
          <div className="relative flex items-center justify-center">
            <span
              className="text-[100px] md:text-[120px] lg:text-[130px] font-medium font-bai text-transparent relative"
              style={{
                WebkitTextStroke: "2px #4848FF",
                color: "transparent",
              }}
            >
              2+
            </span>
            <span
              className="absolute w-[120px] h-[120px] rounded-full blur-2xl opacity-60"
              style={{
                background:
                  "radial-gradient(circle, rgba(72,72,255,0.6) 0%, rgba(72,72,255,0.25) 70%, transparent 100%)",
              }}
            ></span>
          </div>
          <div className="w-full h-[2px] bg-black dark:bg-white opacity-70 transition-colors duration-500"></div>
          <p className="text-[20px] md:text-[22px] lg:text-[24px] text-gray-800 dark:text-[#CFDDE8] mt-2 transition-colors duration-500">
            Years <br /> Experiences
          </p>
        </div>
        {/* Divider */}
        <div className="hidden lg:flex w-[2px] bg-[#4848FF] h-52 opacity-60" />
        {/* :four: Team Members */}
        <div className="relative flex flex-col gap-2 items-center text-center z-[1]">
          <div className="relative flex items-center justify-center">
            <span
              className="text-[100px] md:text-[120px] lg:text-[130px] font-medium font-bai text-transparent relative"
              style={{
                WebkitTextStroke: "2px #4848FF",
                color: "transparent",
              }}
            >
              10+
            </span>
            <span
              className="absolute w-[120px] h-[120px] rounded-full blur-2xl opacity-60"
              style={{
                background:
                  "radial-gradient(circle, rgba(72,72,255,0.6) 0%, rgba(72,72,255,0.25) 70%, transparent 100%)",
              }}
            ></span>
          </div>
          <div className="w-full h-[2px] bg-black dark:bg-white opacity-70 transition-colors duration-500"></div>
          <p className="text-[20px] md:text-[22px] lg:text-[24px] text-gray-800 dark:text-[#CFDDE8] mt-2 transition-colors duration-500">
            Team <br /> Members
          </p>
        </div>
      </div>
    </section>
  );
};
export default Statistics;