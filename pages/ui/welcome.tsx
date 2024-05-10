import Button from "./button";
import Image from "next/image";
import bannerWelcome from "../../public/images/bannerWelcome.svg";

const Welcome = () => {
  return (
    <div className="flex flex-col text-white p-[34px] md:py-[100px] xl:px-[60px] xxl:px-[180px] m-auto md:bg-[url(/images/backgroundWelcome.svg)] md:bg-cover xl:h-[80vh] bg-no-repeat lg:flex-row lg:gap-16 items-center">
      <div className="flex-1">
        <h1 className="text-[38px] md:text-[70px] lg:text-[45px] xl:text-[70px] proxima-bold">
          Melhor agência de marketing do bairro
        </h1>
        <p className="text-[20px] md:text-[28px] lg:text-[24px] xxl:text-[30px] my-[18px] md:mb-[50px] opacity-80 proxima-light">
          Somos uma agência de performance digital, aceleramos vendas e
          aquisição de leads para grandes marcas.
        </p>
        <Button label={"Aumentar vendas"} kind={"sell"} />
      </div>
      <div className="xs:hidden lg:flex lg:flex-1 lg:justify-center">
        <Image src={bannerWelcome} alt="Welcome Banner" />
      </div>
    </div>
  );
};

export default Welcome;
