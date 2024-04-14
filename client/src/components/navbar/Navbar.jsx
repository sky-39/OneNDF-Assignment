import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toast } from "react-hot-toast";
import {Link} from "react-router-dom";

import { useState } from "react";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [hiddenOrNot, setHiddenOrNot] = useState(true);
  const { loading, logout } = useLogout();

  const {authUser} = useAuthContext();


  const handleReferalClick = () => {
    toast.success("Referral code copied to clipboard!");
  }

  return (
    <div className="flex flex-row w-screen p-3 border-b justify-between bg-zinc-800">
      <div className="w-1/12 ml-20">
      <Link to="/">
        <img src="ndflogo.png"/>
        </Link>
      </div>
      <div className="flex flex-row items-center w-7/12 justify-evenly mr-32 text-md text-white">
        <div>
        <Link to="/">
          <p className="hover:underline cursor-pointer underline-offset-8 underline decoration-orange-500">Home</p>
          </Link>
        </div>
        <div>
          <p className="hover:underline hover:underline-offset-8 cursor-pointer">Products</p>
        </div>
        <div>
          <p className="hover:underline hover:underline-offset-8 cursor-pointer">Loan Marketplace</p>
        </div>
        <div>
          <p className="hover:underline hover:underline-offset-8 cursor-pointer">EMI Calculator</p>
        </div>
        <div>
          <p className="hover:underline hover:underline-offset-8 cursor-pointer">About</p>
        </div>
        <div>
          <Link to="/applyforloan" className="hover:underline hover:underline-offset-8 cursor-pointer">Apply for Loan</Link>
        </div>
      </div>
      <div className="flex flex-row w-4/12 justify-end items-center">
        <div className="flex flex-row items-center justify-evenly border rounded-md w-32 h-8 bg-gray-200 mx-2">
          <IoIosSearch />
          <input
            type="text"
            className="w-24 h-6 bg-gray-200 focus:outline-none"
            placeholder="Search"
          />
        </div>
        <div>
          <div className="mx-2 cursor-pointer flex justify-center items-center text-white">
            <button
              id="menu-button"
              onClick={() => {
                setHiddenOrNot(!hiddenOrNot);
              }}
            >
              <FaUserCircle size={30} />
            </button>
          </div>
          <div
            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              hiddenOrNot ? "hidden" : ""
            }`}
          >
            <div className="py-1" role="none">
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm">
                View Profile
              </a>
              <div className="text-gray-700 block px-4 py-2 text-sm cursor-pointer">
                Update Profile
              </div>
              <CopyToClipboard text={authUser.referral_code} onCopy={handleReferalClick}>
              <div className="text-gray-700 block px-4 py-2 text-sm cursor-pointer">
                Refer a friend
              </div>
              </CopyToClipboard>
            </div>
            <div className="py-1" role="none">
              <button
                className="text-gray-700 block px-4 py-2 text-sm"
                onClick={logout}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Log Out"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
