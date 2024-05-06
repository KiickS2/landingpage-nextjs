import Button from "./button";
import Image from "next/image";
import bannerWelcome from "../../public/images/bannerWelcome.svg";

const Welcome = () => {
  return (
    <div className="h-[90vh] flex gap-[220px] py-[131px] px-[180px] bg-[url('/images/backgroundWelcome.svg')] bg-no-repeat bg-contain bg-[bottom]">
      <div className="flex-1 text-white">
        <h1 className="font-bold text-[65px]">
          Melhor agência de marketing do bairro
        </h1>
        <p className="my-[32px] text-[28px] opacity-70 proxima-light">
          Somos uma agência de performance digital, aceleramos vendas e
          aquisição de leads para grandes marcas.
        </p>
        <Button label={"Aumentar vendas"} kind={"sell"} />
      </div>
      <div>
        <Image src={bannerWelcome} alt="Welcome Banner"/>
      </div>
    </div>
  );
};

export default Welcome;
