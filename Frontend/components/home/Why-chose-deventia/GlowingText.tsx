interface glowingtText {
  glowingTitle: string;
  title: string;
}

const GlowingText: React.FC<glowingtText> = ({ glowingTitle, title }) => {
  return (
    <div className="relative min-h-[5px] font-bai   mb-12 overflow-hidden py-5">
      {/* Background outlined text with glow effect */}
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center"
        aria-hidden="true"
      >
        <div
          className=" whitespace-nowrap"
        >
          <h1 className="glow  animate-marquee"> {glowingTitle}</h1>
         
          
        </div>
      </div>

      {/* Foreground text */}
      <div className="relative container w-[700px] lg:w-[1000px] text-center mx-auto px-4 flex items-center ">
        <h1 className="text-xl md:text-4xl lg:text-4xl font-medium text-white ">
          {title}
        </h1>
      </div>
  

      {/* Additional glow effects */}
     {/*  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 opacity-30 to-transparent pointer-events-none" /> */}
    </div>
  );
};

export default GlowingText;
