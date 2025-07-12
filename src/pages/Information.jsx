import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const Information = () => {
  const location = useLocation();
  const propertyTitle = location.state?.propertyTitle || 'Property';

  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <div className="px-8 md:px-10 lg:px-14 py-10 flex-1 overflow-hidden">
        <h2 className='text-lg font-semibold text-dark mb-5'>{propertyTitle} Information</h2>
      </div>

      {/* footer */}
      <Footer 
      backText="Back" 
      buttonText="Next" 
      />
    </div>
  );
};

export default Information;
