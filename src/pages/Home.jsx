import { PiHouseLine } from "react-icons/pi";
import { PiBuildingApartment } from "react-icons/pi";
import { PiBuildingOffice } from "react-icons/pi";
import { HiOutlineKey } from "react-icons/hi2";
import { LiaUserTieSolid } from "react-icons/lia";
import { BiBuildingHouse } from "react-icons/bi";

const Home = () => {
  return (
    <div className="px-8 md:px-10 lg:px-14 py-10">

      {/* property type */}
      <h3 className="text-xl font-bold text-black mb-5">Property type</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border-[1.6px] border-secondary rounded-xl p-5 flex items-center gap-4 w-full cursor-pointer">
            <div className="bg-[#F9FBFF] p-6 rounded-xl">
                <PiHouseLine className="text-3xl"/>
            </div>
            <div>
                <h5 className="font-semibold mb-1">Single House Property</h5>
                <p className="text-sm font-medium text-[#777980]">Single unit house for single family</p>
            </div>
        </div>
        <div className="border-[1.6px] border-secondary rounded-xl p-5 flex items-center gap-4 w-full cursor-pointer">
            <div className="bg-[#F9FBFF] p-6 rounded-xl">
                <PiBuildingApartment className="text-3xl"/>
            </div>
            <div>
                <h5 className="font-semibold mb-1">Apartments complex</h5>
                <p className="text-sm font-medium text-[#777980]">Multiple unit house for families</p>
            </div>
        </div>
        <div className="border-[1.6px] border-secondary rounded-xl p-5 flex items-center gap-4 w-full cursor-pointer">
            <div className="bg-[#F9FBFF] p-6 rounded-xl">
                <PiBuildingOffice className="text-3xl"/>
            </div>
            <div>
                <h5 className="font-semibold mb-1">Condominiums</h5>
                <p className="text-sm font-medium text-[#777980]">Multiple unit house for families</p>
            </div>
        </div>
      </div>

      {/* select role */}
      <h3 className="text-xl font-bold text-black mt-8 mb-5">Select your role</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border-[1.6px] border-secondary rounded-xl p-5 flex items-center gap-4 w-full cursor-pointer">
            <div className="bg-[#F9FBFF] p-6 rounded-xl">
                <HiOutlineKey className="text-3xl"/>
            </div>
            <div>
                <h5 className="font-semibold mb-1">Landlord</h5>
                <p className="text-sm font-medium text-[#777980]">Owner of the property</p>
            </div>
        </div>
        <div className="border-[1.6px] border-secondary rounded-xl p-5 flex items-center gap-4 w-full cursor-pointer">
            <div className="bg-[#F9FBFF] p-6 rounded-xl">
                <LiaUserTieSolid className="text-3xl"/>
            </div>
            <div>
                <h5 className="font-semibold mb-1">Realtor</h5>
                <p className="text-sm font-medium text-[#777980]">Manage property on behalf on owner</p>
            </div>
        </div>
        <div className="border-[1.6px] border-secondary rounded-xl p-5 flex items-center gap-4 w-full cursor-pointer">
            <div className="bg-[#F9FBFF] p-6 rounded-xl">
                <BiBuildingHouse className="text-3xl"/>
            </div>
            <div>
                <h5 className="font-semibold mb-1">Property management company</h5>
                <p className="text-sm font-medium text-[#777980]">For management company</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
