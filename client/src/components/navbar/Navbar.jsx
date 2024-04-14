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
    <div className="flex flex-row w-screen p-3 border-b justify-between">
      <div className="w-1/12 ml-4">
      <Link to="/">
        <img src="ndflogo.png"/>
        </Link>
      </div>
      <div className="flex flex-row items-center w-5/12 justify-evenly mr-32 text-sm font-semibold text-gray-500">
        <div>
          <p className="hover:underline cursor-pointer">Inspiration</p>
        </div>
        <div>
          <p className="hover:underline cursor-pointer">Find Work</p>
        </div>
        <div>
          <p className="hover:underline cursor-pointer">Learn Design</p>
        </div>
        <div>
          <p className="hover:underline cursor-pointer">Go Pro</p>
        </div>
        <div>
          <Link to="/applyforloan" className="hover:underline cursor-pointer">Apply for Loan</Link>
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
          <div className="mx-2 cursor-pointer flex justify-center items-center">
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
        <div className="mx-2">
          <button className="w-28 h-10 bg-pink-500 rounded-lg text-white shadow-sm hover:shadow-sm">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
