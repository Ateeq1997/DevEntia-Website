import React from "react";

interface Stat {
  label: string;
  value: string;
}

const PositiveImpactSection = () => {
  // Dynamic stats data
  const stats: Stat[] = [
    { label: "Projects", value: "12+" },
    { label: "Team Members", value: "10+" },
    { label: "Clients", value: "8+" },
    { label: "YEARS", value: "1+" },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-24 h-[35rem] flex justify-center ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 pr-7">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Translating Technology <br /> Into A Positive Impact
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Our approach allows us to deliver exceptional experiences that drive growth
            and success for all stakeholders. Let&apos;s rise to new heights with the power of
            digital transformation.
          </p>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-6 sm:gap-8 text-center pl-8 h-60  lg:border-l lg:border-gray-600">
        {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center ">
              <span className="text-5xl sm:text-4xl md:font-extrabold md:text-6xl ">{stat.value}</span>
              <span className="text-gray-400 text-sm sm:text-base">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositiveImpactSection;
