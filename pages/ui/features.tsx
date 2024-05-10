import Card from "./card";

const Features = () => {
  return (
    <div className="p-[34px] py-[100px]">
      <h2 className="max-w-[845px] m-auto text-[26px] md:text-[50px] lg:text-[45px] xxl:text-[65px] text-center text-white proxima-bold">
        Neste bairro, não há agência melhor. Garantimos.
      </h2>
      <p className="text-[20px] md:text-[26px] xxl:text-[30px] text-center text-white my-[20px] mb-[50px] opacity-80 max-w-[828px] m-auto proxima-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex flex-col gap-6 xl:gap-12 md:grid md:grid-cols-2 w-fit m-auto">
        <Card
          label={"Digital Strategy"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
          }
        />
        <Card
          label={"Estratégia digital"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <Card
          label={"Social Midia"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <Card
          label={"Social Midia"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </div>
    </div>
  );
};

export default Features;
