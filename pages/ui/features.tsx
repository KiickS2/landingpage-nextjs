import Image from "next/image";
import icon from "../../public/images/Outline.svg";

const Features = () => {
  return (
    <div className="text-white">
      <h2 className="m-auto text-[65px] w-[900px] text-center proxima-bold">
        Neste bairro, não há agência melhor. Garantimos.
      </h2>
      <p className="m-auto mt-[32px] w-[828px] text-center text-[30px] text-[#FFFFFF] opacity-80 proxima-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="grid grid-cols-2 w-fit gap-16 m-auto mt-[100px]">
        <div className="bg-white rounded-md p-[32px] w-[509px]">
          <Image src={icon} alt="Icon" width={85} height={85} />
          <h2 className="text-[#350053] text-[41px] my-[14px] proxima-bold">
            Digital Strategy
          </h2>
          <p className="text-[#4A4A4A] text-[20px] pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="bg-white rounded-md p-[32px] w-[509px]">
          <Image src={icon} alt="Icon" width={85} height={85} />
          <h2 className="text-[#350053] text-[41px] my-[14px] proxima-bold">
            Estratégia digital
          </h2>
          <p className="text-[#4A4A4A] text-[20px] pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-white rounded-md p-[32px] w-[509px]">
          <Image src={icon} alt="Icon" width={85} height={85} />
          <h2 className="text-[#350053] text-[41px] my-[14px] proxima-bold">
            Social Midia
          </h2>
          <p className="text-[#4A4A4A] text-[20px] pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-white rounded-md p-[32px] w-[509px]">
          <Image src={icon} alt="Icon" width={85} height={85} />
          <h2 className="text-[#350053] text-[41px] my-[14px] proxima-bold">
            Social Midia
          </h2>
          <p className="text-[#4A4A4A] text-[20px] pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
