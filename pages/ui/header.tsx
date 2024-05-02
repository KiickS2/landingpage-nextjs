import NavLinks from "./navLinks";
import Button from "./button";

const Header = () => {
  return (
    <header className="flex width-full bg-[#380158] border-b-2 border-solid border-[#AFAFAF] text-white items-center justify-between py-[34px] px-[180px]">
      <div>
        <span className="text-[49px] proxima-bold">agência</span>
      </div>
      <NavLinks />
      <Button label={'Fale conosco'}/>
    </header>
  );
};

export default Header;
