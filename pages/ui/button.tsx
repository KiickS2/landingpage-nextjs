const Button = ({ label, kind }: { label: string; kind: "about" | "sell" }) => {
  if (kind === "about") {
    return (
      <button className="py-[15px] px-[50px] rounded-md text-[16px] font-bold bg-[#0DC74F] hover:bg-[#0FCE33] transition duration-500 ease-in-out">
        {label}
      </button>
    );
  }

  if (kind === "sell") {
    return (
      <button className="py-[15px] px-[80px] rounded-md text-[#380158] text-[22px] font-bold bg-[#FFFFFF] hover:bg-[#0FCE33] transition duration-500 ease-in-out">
        {label}
      </button>
    );
  }
};

export default Button;
