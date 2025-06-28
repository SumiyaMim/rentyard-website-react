import React, { useState } from 'react';
import {
  PiHouseLine,
  PiBuildingApartment,
  PiBuildingOffice
} from "react-icons/pi";
import { HiOutlineKey } from "react-icons/hi2";
import { LiaUserTieSolid } from "react-icons/lia";
import { BiBuildingHouse } from "react-icons/bi";

const Home = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const propertyTypes = [
    {
      id: 1,
      icon: <PiHouseLine className="text-3xl" />,
      title: 'Single House Property',
      desc: 'Single unit house for single family',
    },
    {
      id: 2,
      icon: <PiBuildingApartment className="text-3xl" />,
      title: 'Apartments complex',
      desc: 'Multiple unit house for families',
    },
    {
      id: 3,
      icon: <PiBuildingOffice className="text-3xl" />,
      title: 'Condominiums',
      desc: 'Multiple unit house for families',
    },
  ];

  const roles = [
    {
      id: 1,
      icon: <HiOutlineKey className="text-3xl" />,
      title: 'Landlord',
      desc: 'Owner of the property',
    },
    {
      id: 2,
      icon: <LiaUserTieSolid className="text-3xl" />,
      title: 'Realtor',
      desc: 'Manage property on behalf on owner',
    },
    {
      id: 3,
      icon: <BiBuildingHouse className="text-3xl" />,
      title: 'Property management company',
      desc: 'For management company',
    },
  ];

  return (
    <div className="px-8 md:px-10 lg:px-14 py-10">
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
              <div className="bg-[#F9FBFF] p-6 rounded-xl">
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
              <div className="bg-[#F9FBFF] p-6 rounded-xl">
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
    </div>
  );
};

export default Home;
