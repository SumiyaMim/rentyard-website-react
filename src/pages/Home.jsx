import { useState } from 'react';
import { PiHouseLine, PiBuildingApartment, PiBuildingOffice } from "react-icons/pi";
import { HiOutlineKey } from "react-icons/hi2";
import { LiaUserTieSolid } from "react-icons/lia";
import { BiBuildingHouse } from "react-icons/bi";
import { RxUpload } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import Footer from '../components/Footer';
import { useNavigate  } from 'react-router-dom';

const Home = () => {

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+880");
  const navigate = useNavigate();

  const propertyTypes = [
    {
      id: 1,
      icon: <PiHouseLine/>,
      title: 'Single House Property',
      desc: 'Single unit house for single family',
    },
    {
      id: 2,
      icon: <PiBuildingApartment/>,
      title: 'Apartments complex',
      desc: 'Multiple unit house for families',
    },
    {
      id: 3,
      icon: <PiBuildingOffice/>,
      title: 'Condominiums',
      desc: 'Multiple unit house for families',
    },
  ];

  const roles = [
    {
      id: 1,
      icon: <HiOutlineKey/>,
      title: 'Landlord',
      desc: 'Owner of the property',
    },
    {
      id: 2,
      icon: <LiaUserTieSolid/>,
      title: 'Realtor',
      desc: 'Manage property on behalf on owner',
    },
    {
      id: 3,
      icon: <BiBuildingHouse/>,
      title: 'Property management company',
      desc: 'For management company',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen bg-white'>
        <div className="px-8 md:px-10 lg:px-14 py-10 flex-1 overflow-hidden">
            {/* Property type */}
            <h3 className="text-xl font-bold text-dark mb-5">Property type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {propertyTypes.map(property => {
                const isSelected = selectedProperty === property.id;
                return (
                    <div
                    key={property.id}
                    onClick={() => setSelectedProperty(property.id)}
                    className={`border-[1.6px] rounded-xl p-5 flex items-center gap-4 w-full cursor-pointer transition-all duration-200 ${
                        isSelected ? 'border-primary bg-[#F9FBFF]' : 'border-secondary bg-white'
                    }`}
                    >
                        <div className="bg-[#F9FBFF] p-6 rounded-xl text-3xl">
                            {property.icon}
                        </div>
                        <div>
                            <h5 className="text-dark font-semibold mb-1">{property.title}</h5>
                            <p className="text-sm font-medium text-[#777980]">{property.desc}</p>
                        </div>
                    </div>
                );
                })}
            </div>

            {/* Select role */}
            <h3 className="text-xl font-bold text-dark mt-8 mb-5">Select your role</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {roles.map(role => {
                const isSelected = selectedRole === role.id;
                return (
                    <div
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`border-[1.6px] rounded-xl p-5 flex items-center gap-4 w-full cursor-pointer transition-all duration-200 ${
                        isSelected ? 'border-primary bg-[#F9FBFF]' : 'border-secondary bg-white'
                    }`}
                    >
                        <div className="bg-[#F9FBFF] p-6 rounded-xl text-3xl">
                            {role.icon}
                        </div>
                        <div>
                            <h5 className="text-dark font-semibold mb-1">{role.title}</h5>
                            <p className="text-sm font-medium text-[#777980]">{role.desc}</p>
                        </div>
                    </div>
                );
                })}
            </div>

            {/* selected role = 1, show more */}
            {selectedProperty && selectedRole === 1 && (
                <div>        
                    <div className="mt-8 border-[1.6px] border-secondary rounded-xl overflow-hidden">
                        <h4 className="bg-[#f0f0f0] text-[#6F6C6A] font-medium text-lg mb-0 px-6 py-3">
                            Proof of ownership
                        </h4>
                        <div className="bg-white px-6 py-4">
                            <p className="text-dark mb-2 font-semibold">Ownership doc*</p>
                            <button className="flex items-center justify-center gap-3 bg-[#f0f0f0] border-[1.6px] border-secondary border-dashed rounded-md px-4 py-3 text-[#6F6C6A] text-sm font-semibold w-full lg:w-2/6">
                                <RxUpload className='text-lg text-dark'/>
                                <span>(Pdf only)</span>
                            </button>
                        </div>
                    </div>
                    <label className="flex items-center gap-3 mt-6 cursor-pointer text-dark">
                        <input
                            type="checkbox"
                            defaultChecked
                            className="appearance-none w-4 h-4 rounded-sm bg-white border-2 border-black checked:bg-white checked:border-black checked:before:content-['✔'] checked:before:text-xs checked:before:font-medium checked:before:text-black checked:before:flex checked:before:items-center checked:before:justify-center"
                        />
                        <span className="text-dark font-semibold text-sm">
                            Accept RentYard property adding terms & condition
                        </span>
                    </label>
                </div>
            )}

            {/* selected role = 2, show more */}
            {selectedProperty && selectedRole === 2 && (
                <div>        
                    <div className="mt-8 border-[1.6px] border-secondary rounded-xl overflow-hidden">
                        <h4 className="bg-[#f0f0f0] text-[#6F6C6A] font-medium text-lg mb-0 px-6 py-3">
                            Realtor verification
                        </h4>
                        <div className="bg-white px-6 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <div>
                                <p className="text-dark mb-2 font-semibold">Lenience number*</p>
                                <input
                                type="text"
                                placeholder='000000000000'
                                className="bg-white border-[1.6px] border-secondary rounded-md px-4 py-3 text-[#6F6C6A] text-sm font-semibold w-full placeholder:text-[#6F6C6A] outline-none"
                                />
                            </div>
                            <div>
                                <p className="text-dark mb-2 font-semibold">Additional documents for realtor</p>
                                <button className="flex items-center justify-center gap-3 bg-[#f0f0f0] border-[1.6px] border-secondary border-dashed rounded-md px-4 py-3 text-[#6F6C6A] text-sm font-semibold w-full">
                                    <RxUpload className='text-lg text-dark'/>
                                    <span>(Pdf only)</span>
                                </button>
                            </div>
                            <div>
                                <p className="text-dark mb-2 font-semibold">Agreement with landlord*</p>
                                <button className="flex items-center justify-center gap-3 bg-[#f0f0f0] border-[1.6px] border-secondary border-dashed rounded-md px-4 py-3 text-[#6F6C6A] text-sm font-semibold w-full">
                                    <RxUpload className='text-lg text-dark'/>
                                    <span>(Pdf only)</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <label className="flex items-center gap-3 mt-6 cursor-pointer text-dark">
                        <input
                            type="checkbox"
                            defaultChecked
                            className="appearance-none w-4 h-4 rounded-sm bg-white border-2 border-black checked:bg-white checked:border-black checked:before:content-['✔'] checked:before:text-xs checked:before:font-medium checked:before:text-black checked:before:flex checked:before:items-center checked:before:justify-center"
                        />
                        <span className="text-dark font-semibold text-sm">
                            Accept RentYard property adding terms & condition
                        </span>
                    </label>
                </div>
            )}

            {/* selected role = 3, show more */}
            {selectedProperty && selectedRole === 3 && (
                <div>        
                    <div className="mt-8 border-[1.6px] border-secondary rounded-xl overflow-hidden">
                        <h4 className="bg-[#f0f0f0] text-[#6F6C6A] font-medium text-lg mb-0 px-6 py-3">
                            Company & office info
                        </h4>
                        <div className="bg-white px-6 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <p className="text-dark mb-2 font-semibold">Company name*</p>
                                <input
                                type="text"
                                placeholder='e.g. Runyan Trade Center'
                                className="bg-white border-[1.6px] border-secondary rounded-md px-4 py-3 text-[#6F6C6A] text-sm font-semibold w-full placeholder:text-[#6F6C6A] outline-none"
                                />
                            </div>
                            <div>
                                <p className="text-dark mb-2 font-semibold">Company Identifier(EIN/TIN)*</p>
                                <input
                                type="text"
                                placeholder="e.g. 12-3456789"
                                className="bg-white border-[1.6px] border-secondary rounded-md px-4 py-3 text-[#6F6C6A] text-sm font-semibold w-full placeholder:text-[#6F6C6A] outline-none"
                                />
                            </div>
                            <div>
                                <p className="text-dark mb-2 font-semibold">Your job title*</p>
                                <input
                                type="text"
                                placeholder='e.g. Manager'
                                className="bg-white border-[1.6px] border-secondary rounded-md px-4 py-3 text-[#6F6C6A] text-sm font-semibold w-full placeholder:text-[#6F6C6A] outline-none"
                                />
                            </div>
                            <div>
                                <p className="text-dark mb-2 font-semibold">Agreement with landlord/owner* </p>
                                <button className="flex items-center justify-center gap-3 bg-[#f0f0f0] border-[1.6px] border-secondary border-dashed rounded-md px-4 py-3 text-[#6F6C6A] text-sm font-semibold w-full">
                                    <RxUpload className='text-lg text-dark'/>
                                    <span>(Pdf only)</span>
                                </button>
                            </div>
                            <div className="relative">
                                <p className="text-dark mb-2 font-semibold">Country/Region*</p>
                                <select
                                    className="bg-white border-[1.6px] border-secondary rounded-md px-4 py-3 text-[#6F6C6A] text-sm font-semibold w-full outline-none appearance-none"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                    Choose country
                                    </option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="India">India</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="United States">United States</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Germany">Germany</option>
                                </select>
                                <IoIosArrowDown className="pointer-events-none absolute right-4 top-[65px] transform -translate-y-1/2 text-[#6F6C6A]" />
                            </div>
                            <div>
                                <p className="text-dark mb-2 font-semibold">Street address*</p>
                                <input
                                type="text"
                                placeholder='e.g. 111 Austin Ave'
                                className="bg-white border-[1.6px] border-secondary rounded-md px-4 py-3 text-[#6F6C6A] text-sm font-semibold w-full placeholder:text-[#6F6C6A] outline-none"
                                />
                            </div>
                            <div>
                                <p className="text-dark mb-2 font-semibold">Apt, suit, unit (if applicable)</p>
                                <input
                                type="text"
                                placeholder='e.g. 3050'
                                className="bg-white border-[1.6px] border-secondary rounded-md px-4 py-3 text-[#6F6C6A] text-sm font-semibold w-full placeholder:text-[#6F6C6A] outline-none"
                                />
                            </div>
                            <div>
                                <p className="text-dark mb-2 font-semibold">Phone number*</p>
                                <div className="flex border-[1.6px] border-secondary rounded-md overflow-hidden w-full max-w-sm">
                                    <select
                                    value={selectedCountryCode}
                                    onChange={(e) => setSelectedCountryCode(e.target.value)}
                                    className="bg-white px-3 py-3 text-sm font-semibold text-[#6F6C6A] appearance-none outline-none cursor-pointer"
                                    style={{ minWidth: "20px" }}
                                    >
                                    <option value="+880">+880</option>
                                    <option value="+91">+91</option>
                                    <option value="+1">+1</option>
                                    <option value="+44">+44</option>
                                    <option value="+61">+61</option>
                                    <option value="+81">+81</option>
                                    <option value="+49">+49</option>
                                    <option value="+33">+33</option>
                                    <option value="+7">+7</option>
                                    <option value="+55">+55</option>
                                    </select>

                                    <div className="border-l-[1.6px] border-secondary"></div>

                                    <input
                                    type="text"
                                    className="flex-grow px-4 py-3 outline-none text-[#6F6C6A] font-semibold text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-dark mb-2 font-semibold">Contact email*</p>
                                <input
                                type="text"
                                placeholder='e.g. majarul2025@gmail.com'
                                className="bg-white border-[1.6px] border-secondary rounded-md px-4 py-3 text-[#6F6C6A] text-sm font-semibold w-full placeholder:text-[#6F6C6A] outline-none"
                                />
                            </div>
                            <div>
                                <p className="text-dark mb-2 font-semibold">City/Town*</p>
                                <input
                                type="text"
                                placeholder='e.g. Dallas'
                                className="bg-white border-[1.6px] border-secondary rounded-md px-4 py-3 text-[#6F6C6A] text-sm font-semibold w-full placeholder:text-[#6F6C6A] outline-none"
                                />
                            </div>
                            <div className="relative">
                                <p className="text-dark mb-2 font-semibold">State/Territory*</p>
                                <select
                                    className="bg-white border-[1.6px] border-secondary rounded-md px-4 py-3 text-[#6F6C6A] text-sm font-semibold w-full outline-none appearance-none"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                    Choose state
                                    </option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Chattogram">Chattogram</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Barishal">Barishal</option>
                                    <option value="Sylhet">Sylhet</option>
                                    <option value="Rangpur">Rangpur</option>
                                    <option value="Mymensingh">Mymensingh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="West Bengal">West Bengal</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="California">California</option>
                                    <option value="New South Wales">New South Wales</option>
                                    <option value="Florida">Florida</option>
                                    <option value="New York">New York</option>
                                    <option value="Ontario">Ontario</option>
                                    <option value="Quebec">Quebec</option>
                                    <option value="Victoria">Victoria</option>
                                </select>
                                <IoIosArrowDown className="pointer-events-none absolute right-4 top-[65px] transform -translate-y-1/2 text-[#6F6C6A]" />
                            </div>
                            <div>
                                <p className="text-dark mb-2 font-semibold">Zip code*</p>
                                <input
                                type="text"
                                placeholder='e.g. 75061'
                                className="bg-white border-[1.6px] border-secondary rounded-md px-4 py-3 text-[#6F6C6A] text-sm font-semibold w-full placeholder:text-[#6F6C6A] outline-none"
                                />
                            </div>
                        </div>
                    </div>
                    <label className="flex items-center gap-3 mt-6 cursor-pointer text-dark">
                        <input
                            type="checkbox"
                            defaultChecked
                            className="appearance-none w-4 h-4 rounded-sm bg-white border-2 border-black checked:bg-white checked:border-black checked:before:content-['✔'] checked:before:text-xs checked:before:font-medium checked:before:text-black checked:before:flex checked:before:items-center checked:before:justify-center"
                        />
                        <span className="text-dark font-semibold text-sm">
                            Accept RentYard property adding terms & condition
                        </span>
                    </label>
                </div>
            )}
        </div>

        {/* footer */}
        <Footer
            backText="Back"
            buttonText="Get Started"
            disabled={!(selectedProperty && selectedRole)}
            onClick={() =>
                navigate('/information', {
                state: {
                    propertyTitle: propertyTypes.find(p => p.id === selectedProperty)?.title,
                },
                })
            }        
        />
    </div>
  );
};

export default Home;
