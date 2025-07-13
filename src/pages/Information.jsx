import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import { RxUpload } from "react-icons/rx";

const Information = () => {

  const location = useLocation();
  const propertyTitle = location.state?.propertyTitle || 'Property';

  return (
    <div className='flex flex-col min-h-screen bg-white'>
      {/* information section */}
      <div className="px-8 md:px-10 lg:px-14 py-10 flex-1 overflow-hidden">
        <h2 className='text-lg font-semibold text-dark mb-7'>{propertyTitle} Information</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
            {/* first column */}
            <div>
                <div className='border-[1.6px] rounded-2xl p-5 flex items-center justify-between w-full border-secondary bg-white mb-5'>
                    <h5 className="text-dark font-semibold">Property Address <span className='text-[#FF6A62]'>(Required)</span></h5> 
                    <div className='flex gap-1.5 items-center'>
                        <button className='text-primary cursor-pointer text-lg'>
                            <AiOutlinePlus/>
                        </button>
                        <button className='text-primary font-semibold underline underline-offset-[2px] cursor-pointer'>Add</button>
                    </div>  
                </div>
                <div className='border-[1.6px] rounded-2xl p-5 flex items-center justify-between w-full border-secondary bg-white mb-5'>
                    <h5 className="text-dark font-semibold">Leasing Info <span className='text-[#FF6A62]'>(Required)</span></h5> 
                    <div className='flex gap-1.5 items-center'>
                        <button className='text-primary cursor-pointer text-lg'>
                            <AiOutlinePlus/>
                        </button>
                        <button className='text-primary font-semibold underline underline-offset-[2px] cursor-pointer'>Add</button>
                    </div>  
                </div>
                <div className='border-[1.6px] rounded-2xl p-5 flex items-center justify-between w-full border-secondary bg-white mb-5'>
                    <h5 className="text-dark font-semibold">Charges <span className='text-[#FF6A62]'>(Required)</span></h5> 
                    <div className='flex gap-1.5 items-center'>
                        <button className='text-primary cursor-pointer text-lg'>
                            <AiOutlinePlus/>
                        </button>
                        <button className='text-primary font-semibold underline underline-offset-[2px] cursor-pointer'>Add</button>
                    </div>  
                </div>
                <div className='border-[1.6px] rounded-2xl p-5 flex items-center justify-between w-full border-secondary bg-white mb-5'>
                    <h5 className="text-dark font-semibold">Rent frequency & payment reminder <span className='text-[#FF6A62]'>(Required)</span></h5> 
                    <div className='flex gap-1.5 items-center'>
                        <button className='text-primary cursor-pointer text-lg'>
                            <AiOutlinePlus/>
                        </button>
                        <button className='text-primary font-semibold underline underline-offset-[2px] cursor-pointer'>Add</button>
                    </div>  
                </div>
                <div className='border-[1.6px] rounded-2xl p-5 flex items-center justify-between w-full border-secondary bg-white mb-5'>
                    <h5 className="text-dark font-semibold">Application Agreement <span className='text-[#777980]'>(Optional)</span></h5> 
                    <div className='flex gap-1.5 items-center'>
                        <button className='text-primary cursor-pointer text-lg'>
                            <AiOutlinePlus/>
                        </button>
                        <button className='text-primary font-semibold underline underline-offset-[2px] cursor-pointer'>Add</button>
                    </div>  
                </div>
                <div className='border-[1.6px] rounded-2xl p-5 flex items-center justify-between w-full border-secondary bg-white mb-5'>
                    <h5 className="text-dark font-semibold">About the Property <span className='text-[#777980]'>(Optional)</span></h5> 
                    <div className='flex gap-1.5 items-center'>
                        <button className='text-primary cursor-pointer text-lg'>
                            <AiOutlinePlus/>
                        </button>
                        <button className='text-primary font-semibold underline underline-offset-[2px] cursor-pointer'>Add</button>
                    </div>  
                </div>
                <div className='border-[1.6px] rounded-2xl p-5 flex items-center justify-between w-full border-secondary bg-white'>
                    <h5 className="text-dark font-semibold">Community’s Amenity/Features <span className='text-[#777980]'>(Optional but recommended)</span></h5> 
                    <div className='flex gap-1.5 items-center'>
                        <button className='text-primary cursor-pointer text-lg'>
                            <AiOutlinePlus/>
                        </button>
                        <button className='text-primary font-semibold underline underline-offset-[2px] cursor-pointer'>Add</button>
                    </div>  
                </div>
            </div>

            {/* second column */}
            <div>
                <div className='border-[1.6px] rounded-2xl p-5 flex items-center justify-between w-full border-secondary bg-white mb-5'>
                    <h5 className="text-dark font-semibold">Pet Fees <span className='text-[#777980]'>(Optional, add fees if you allow pet)</span></h5> 
                    <div className='flex gap-1.5 items-center'>
                        <button className='text-primary cursor-pointer text-lg'>
                            <AiOutlinePlus/>
                        </button>
                        <button className='text-primary font-semibold underline underline-offset-[2px] cursor-pointer'>Add</button>
                    </div>  
                </div>
                <div className='border-[1.6px] rounded-2xl p-5 flex items-center justify-between w-full border-secondary bg-white mb-5'>
                    <h5 className="text-dark font-semibold">Parking <span className='text-[#777980]'>(Optional)</span></h5> 
                    <div className='flex gap-1.5 items-center'>
                        <button className='text-primary cursor-pointer text-lg'>
                            <AiOutlinePlus/>
                        </button>
                        <button className='text-primary font-semibold underline underline-offset-[2px] cursor-pointer'>Add</button>
                    </div>  
                </div>
                <div className='border-[1.6px] rounded-2xl p-5 flex items-center justify-between w-full border-secondary bg-white mb-5'>
                    <h5 className="text-dark font-semibold">Nearest educational institution <span className='text-[#777980]'>(Optional but recommended)</span></h5> 
                    <div className='flex gap-1.5 items-center'>
                        <button className='text-primary cursor-pointer text-lg'>
                            <AiOutlinePlus/>
                        </button>
                        <button className='text-primary font-semibold underline underline-offset-[2px] cursor-pointer'>Add</button>
                    </div>  
                </div>
                <div className='border-[1.6px] rounded-2xl p-5 flex items-center justify-between w-full border-secondary bg-white mb-5'>
                    <h5 className="text-dark font-semibold">Nearest Stations <span className='text-[#777980]'>(Optional but recommended)</span></h5> 
                    <div className='flex gap-1.5 items-center'>
                        <button className='text-primary cursor-pointer text-lg'>
                            <AiOutlinePlus/>
                        </button>
                        <button className='text-primary font-semibold underline underline-offset-[2px] cursor-pointer'>Add</button>
                    </div>  
                </div>
                <div className='border-[1.6px] rounded-2xl p-5 flex items-center justify-between w-full border-secondary bg-white mb-5'>
                    <h5 className="text-dark font-semibold">Nearest Landmark <span className='text-[#777980]'>(Optional but recommended)</span></h5> 
                    <div className='flex gap-1.5 items-center'>
                        <button className='text-primary cursor-pointer text-lg'>
                            <AiOutlinePlus/>
                        </button>
                        <button className='text-primary font-semibold underline underline-offset-[2px] cursor-pointer'>Add</button>
                    </div>  
                </div>
                <div className='border-[1.6px] rounded-2xl p-5 flex items-center justify-between w-full border-secondary bg-white'>
                    <h5 className="text-dark font-semibold">Utilities Provider <span className='text-[#777980]'>(Optional but recommended)</span></h5> 
                    <div className='flex gap-1.5 items-center'>
                        <button className='text-primary cursor-pointer text-lg'>
                            <AiOutlinePlus/>
                        </button>
                        <button className='text-primary font-semibold underline underline-offset-[2px] cursor-pointer'>Add</button>
                    </div>  
                </div>
            </div>      
        </div>

        {/* gallery section */}
        <div className='border-[1.6px] rounded-2xl w-full border-secondary bg-white mb-6'>
            <div className='p-5'>
                <h5 className="text-dark font-semibold">Property Gallery <span className='text-[#777980]'>(It's not unit photo)*</span></h5> 
            </div>

            <div className="border-t-[1.6px] border-secondary w-full"/>

            <div className='p-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                    <h5 className="text-dark font-semibold mb-2">Featured Photos<span className='text-[#FF6A62]'>*</span></h5> 
                    <div className='grid grid-cols-2 gap-3'>
                        <div className="flex flex-col items-center justify-center gap-1 border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-5 text-[#6F6C6A] text-sm font-semibold w-full">
                            <div className='border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-2 mb-1'>
                                <RxUpload className='text-lg text-dark'/>
                            </div>
                            <h5 className="text-dark font-semibold text-center">Upload Cover Photo</h5> 
                            <p className="text-xs font-medium text-[#777980]">(jpg, png only)</p>
                        </div>
                        <div className='grid grid-cols-2 gap-2 lg:gap-3'>
                            <div className="flex flex-col items-center justify-center gap-1 border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-5 text-[#6F6C6A] text-sm font-semibold w-full">
                                <div className='border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-2 mb-1'>
                                    <RxUpload className='text-lg text-dark'/>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-5 text-[#6F6C6A] text-sm font-semibold w-full">
                                <div className='border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-2 mb-1'>
                                    <RxUpload className='text-lg text-dark'/>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-5 text-[#6F6C6A] text-sm font-semibold w-full">
                                <div className='border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-2 mb-1'>
                                    <RxUpload className='text-lg text-dark'/>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-5 text-[#6F6C6A] text-sm font-semibold w-full">
                                <div className='border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-2 mb-1'>
                                    <RxUpload className='text-lg text-dark'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className="text-dark font-semibold mb-2">More Photos <span className='text-[#777980]'>(Optional)</span></h5> 
                    <div className='grid grid-cols-4 gap-2 lg:gap-3'>
                        <div className="flex flex-col items-center justify-center gap-1 border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-5 text-[#6F6C6A] text-sm font-semibold w-full">
                            <div className='border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-2 mb-1'>
                                <RxUpload className='text-lg text-dark'/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-5 text-[#6F6C6A] text-sm font-semibold w-full">
                            <div className='border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-2 mb-1'>
                                <RxUpload className='text-lg text-dark'/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-5 text-[#6F6C6A] text-sm font-semibold w-full">
                            <div className='border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-2 mb-1'>
                                <RxUpload className='text-lg text-dark'/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-5 text-[#6F6C6A] text-sm font-semibold w-full">
                            <div className='border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-2 mb-1'>
                                <RxUpload className='text-lg text-dark'/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-5 text-[#6F6C6A] text-sm font-semibold w-full">
                            <div className='border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-2 mb-1'>
                                <RxUpload className='text-lg text-dark'/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-5 text-[#6F6C6A] text-sm font-semibold w-full">
                            <div className='border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-2 mb-1'>
                                <RxUpload className='text-lg text-dark'/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-5 text-[#6F6C6A] text-sm font-semibold w-full">
                            <div className='border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-2 mb-1'>
                                <RxUpload className='text-lg text-dark'/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-5 text-[#6F6C6A] text-sm font-semibold w-full">
                            <div className='border-primary bg-[#F9FBFF] border-[1.6px] border-dashed rounded-md p-2 mb-1'>
                                <RxUpload className='text-lg text-dark'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* video section */}
        <div className='border-[1.6px] rounded-2xl p-5 flex items-center justify-between w-full border-secondary bg-white'>
            <h5 className="text-dark font-semibold">Videos <span className='text-[#777980]'>(Optional)*</span></h5> 
            <IoIosArrowDropdown className='text-xl lg:text-2xl'/>
        </div>
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
