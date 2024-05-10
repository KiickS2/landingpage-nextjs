import Image from "next/image";
import Link from "next/link";
import facebook from '../../public/images/facebook.png';
import youtube from '../../public/images/youtube.png';
import instagram from '../../public/images/instagram.png';
import linkedin from '../../public/images/linkedin.png';

const Footer = () => {
  return (
    <footer className="flex flex-col p-[34px] xl:px-[60px] xl:mt-[100px] text-white bg-[#26003B]">
      <h2 className="text-[50px] pb-[30px] proxima-bold">agência</h2>
      <div className="flex flex-col xl:flex-row xl:gap-0 gap-6 md:gap-10 md:grid md:grid-cols-2
      xl:grid-cols-4 proxima-regular">
        <div className="flex flex-col">
          <span className="text-[29px] mb-[14px]">0800 800 800</span>
          <span className="text-[22px] proxima-regular">
            comercial@agencia.com.br
          </span>
        </div>
        <div className="flex flex-col">
          <h4>MENU</h4>
          <Link href={"/"} className="w-fit">Quem somos</Link>
          <Link href={"/"} className="w-fit">Cases</Link>
        </div>
        <div className="flex flex-col">
          <h4>CONTEÚDO</h4>
          <Link href={"/"} className="w-fit">E-books</Link>
          <Link href={"/"} className="w-fit">Fórmulas prontas</Link>
        </div>
        <div className="flex flex-col">
          <h4 className="xl:text-end">SOCIAL</h4>
          <div className="flex gap-10 xl:justify-end">
              <Link href={'/'}><Image src={instagram} alt="instagram-logo"/></Link>
              <Link href={'/'}><Image src={facebook} alt="facebook-logo" height={37}/></Link>
              <Link href={'/'}><Image src={linkedin} alt="linkedin-logo"/></Link>
              <Link href={'/'}><Image src={youtube} alt="youtube-logo"/></Link>
          </div>
        </div>
      </div>
      <p className="mt-[30px] md:mt-[50px] xxl:mt-[150px] text-[20px] text-center opacity-80">©2022 AGENCIA - Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
