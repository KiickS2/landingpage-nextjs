import Image from "next/image";
import icon from "../../public/images/Outline.svg";

const Card = ({ label, text }: { label: string, text: string }) => {
  return (
    <div className="flex flex-col bg-white p-[28px] xl:p-[34px] rounded-md max-w-[509px] m-auto">
      <Image src={icon} alt="Icon" width={85} height={85} />
      <h3 className="text-[#350053] text-[30px] py-[18px] proxima-bold">{label}</h3>
      <p className="text-[#4A4A4A] text-[20px] proxima-light">
        {text}
      </p>
    </div>
  );
};

export default Card;
