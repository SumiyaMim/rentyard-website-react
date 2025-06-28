import logo from '../assets/images/logo.png'; 

const Navbar = () => {
  return (
    <div className='border-b-2 border-secondary px-8 md:px-10 lg:px-14 py-5 flex justify-between items-center'>
        <img src={logo} alt="logo" className="w-30" />
        <button className='btn-primary'>
            Exit
        </button>
    </div>
  )
}

export default Navbar
