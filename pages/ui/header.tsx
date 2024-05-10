import NavLinks from "./navLinks";
import Button from "./button";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-[34px] xl:px-[60px] xxl:px-[180px] m-auto text-white">
      <div>
        <span className="text-[49px] proxima-bold">agência</span>
      </div>
      <NavLinks />
      <Button label={"Fale conosco"} kind={"about"} />
    </header>
  );
};

export default Header;
