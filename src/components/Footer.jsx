const Footer = ({ backText, buttonText }) => {
  return (
    <div className="border-t-2 border-secondary px-8 md:px-10 lg:px-14 py-5 flex justify-between items-center bg-white">
      <h5
        className="text-dark font-semibold underline underline-offset-[2px] cursor-pointer"
      >
        {backText}
      </h5>
      <button className="btn-secondary">
        {buttonText}
      </button>
    </div>
  );
};

export default Footer;
