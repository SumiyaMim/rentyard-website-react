import { useNavigate } from "react-router-dom";

const Footer = ({ backText, buttonText, disabled = false, onClick = () => {}, }) => {

  const navigate = useNavigate();

  return (
    <div className="border-t-2 border-secondary px-8 md:px-10 lg:px-14 py-5 flex justify-between items-center bg-white">
      <h5 onClick={() => navigate(-1)} className="text-dark font-semibold underline underline-offset-[2px] cursor-pointer">
        {backText}
      </h5>
      <button
        className={`btn-secondary ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={disabled}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Footer;
