import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {

  const location = useLocation(); 

  const isHomePage = location.pathname === '/'; 
  const buttonText = isHomePage ? 'Exit' : 'Save & Exit'; 

  return (
    <div className='border-b-2 border-secondary px-8 md:px-10 lg:px-14 py-5 flex justify-between items-center bg-white'>
      <img src={logo} alt="logo" className="w-30 cursor-pointer" />
      <button className='btn-primary'>
        {buttonText}
      </button>
    </div>
  );
};

export default Navbar;
