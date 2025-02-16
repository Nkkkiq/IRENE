interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="border border-white rounded-lg px-5 py-2 hover:text-[#f2d5a0] hover:bg-[#292929c0]">
      {text}
    </button>
  );
};

export default Button;
