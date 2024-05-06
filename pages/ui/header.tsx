import NavLinks from "./navLinks";
import Button from "./button";

const Header = () => {
  return (
    <header className="flex width-full border-b-[0.5px] border-solid border-[#afafaf49] text-white items-center justify-between py-[34px] px-[180px]">
      <div>
        <span className="text-[49px] proxima-bold">agência</span>
      </div>
      <NavLinks />
      <Button label={"Fale conosco"} kind={"about"} />
    </header>
  );
};

export default Header;
