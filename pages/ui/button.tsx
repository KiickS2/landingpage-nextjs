const Button = ({ label }: { label: string }) => {
  return (
    <button className="py-[15px] px-[50px] rounded-md text-[16px] font-bold bg-[#0DC74F] hover:bg-[#0FCE33] transition duration-500 ease-in-out">
      {label}
    </button>
  );
};

export default Button;
