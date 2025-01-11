import Image from 'next/image';

const StyleGuide = ({
  projectLogo,
  projectName,
  fontName,
  fontBg,
  color1,
  color2,
  color3,
  color4,
}: {
  projectLogo: any;
  projectName: string;
  fontName: string;
  fontBg: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
}) => {
  return (
    <section className="style-guide-bg px-[5%] ">
      <div className="flex flex-col md:flex-row gap-12 md:justify-between">
        <h1 className="font-semibold text-2xl lg:text-5xl">
          <span className="gradient-border">Styl</span>e Guide
        </h1>
        <h2 className="text-white text-start text-2xl lg:text-4xl font-semibold leading-tight flex items-end gap-4">
          <span className="w-14 md:w-[80px] h-10 md:h-[60px] flex items-end justify-start">
            <Image src={projectLogo} alt="logo" className="w-auto h-auto" />
          </span>
          {projectName}
        </h2>
      </div>
      <h3 className="font-semibold text-xl md:text-4xl mt-6">Typography</h3>
      <div className="flex flex-wrap gap-12">
        <div
          style={{ background: fontBg }}
          className={`w-fit px-4 py-3 mt-12 ml-0 md:ml-12 pl-24 mr-24`}
        >
          <h4 className="font-semibold text-lg md:text-3xl w-fit -mr-24">
            {fontName}
          </h4>
        </div>
        <h1 className="font-bold text-6xl lg:text-9xl">Aa</h1>
      </div>
      <div className="flex flex-wrap gap-12 mt-16">
        <h5 className="font-normal text-lg md:text-2xl">Regular</h5>
        <h5 className="font-medium text-lg lg:text-2xl">Medium</h5>
      </div>
      <div className="flex flex-wrap gap-12 mt-4">
        <h5 className="font-semibold text-lg md:text-2xl">Semi Bold</h5>
        <h5 className="font-bold text-lg lg:text-2xl">Bold</h5>
      </div>
      <h2 className="font-semibold text-xl md:text-4xl mt-12">
        Colour Schemes
      </h2>
      <div className="flex flex-wrap justify-center md:justify-between gap-28">
        <div className="mt-28 md:ml-28 font-medium text-base">
          <div
            style={{ background: color1 }}
            className={`relative size-[150px] lg:size-[240px] rounded-full flex items-center justify-center`}
          >
            {color1}
            <div
              style={{ background: color2 }}
              className={`absolute -top-14 md:-top-[80px] size-[110px] lg:size-[160px] rounded-full flex items-center justify-center`}
            >
              {color2}
            </div>
            <div
              style={{ background: color3 }}
              className={`absolute -bottom-6 md:bottom-0 -left-14 md:-left-[80px] size-[110px] lg:size-[160px] rounded-full flex items-center justify-center text-black`}
            >
              {color3}
            </div>
            <div
              style={{ background: color4 }}
              className={`absolute -bottom-6 md:bottom-0 -right-14 md:-right-[80px] size-[110px] lg:size-[160px] rounded-full flex items-center justify-center text-black`}
            >
              {color4}
            </div>
          </div>
        </div>
        <table className="font-semibold text-lg text-center h-fit">
          <tbody>
            <tr>
              <td></td>
              <td className="border-2 border-[#3D3D3D] border-t-0 px-4 py-3">
                Website Logo
              </td>
              <td></td>
            </tr>
            <tr>
              <td className=" border-2 border-[#3D3D3D] border-l-0 px-1 -rotate-90">
                180px
              </td>
              <td className="border-2 border-[#3D3D3D]">
                <div className="project-logo-bg p-[1.2px] size-[160px] lg:size-[215px] rounded-[40px]">
                  <div className="bg-[#2C2C2C] w-full h-full rounded-[40px] flex items-center justify-center">
                    <Image
                      src={projectLogo}
                      alt="website logo"
                      className="h-auto w-auto"
                    />
                  </div>
                </div>
              </td>
              <td className="border-2 border-[#3D3D3D] border-r-0 px-7 py-3"></td>
            </tr>
            <tr>
              <td></td>
              <td className="border-2 border-[#3D3D3D] border-b-0 px- py-3">
                180px
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default StyleGuide;
