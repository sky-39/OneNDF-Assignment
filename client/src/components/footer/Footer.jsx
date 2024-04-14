import {
  FaBasketballBall,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

import { HiOutlineMail, HiOutlinePhoneMissedCall } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between bg-gray-100 mt-auto w-screen text-white">
      <div className="flex flex-row h-96 bg-zinc-800 p-6 items-center justify-start">
        <div className="flex flex-col w-1/3 ml-20">
          <div className="text-8xl">Join our newsletter</div>
          <br></br>
          <div className="font-light">
            Expert insights, and industry updates to grow the financial health
            for your business.
          </div>
        </div>
        <div className="flex flex-col ml-72 w-1/3 h-80 bg-white rounded-xl text-zinc-900 p-6 justify-evenly">
          <div className="flex flex-col my-2">
            <label className="font-bold">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="border-2 h-12 mt-2 p-4"
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="font-bold">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="border-2 h-12 mt-2 p-4"
            />
          </div>
          <div className="flex justify-center h-20 w-96 text-center cursor-pointer">
            <div className="flex justify-center mt-6 w-80 border-2 rounded-lg bg-zinc-800 text-white text-lg items-center hover:shadow-2xl">
              SUBSCRIBE NOW
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around h-40 items-center text-center">
        <div className="flex flex-row justify-around items-center bg-zinc-800 h-12 w-52 px-6 rounded-full"><FaWhatsapp size={24}/>Chat with us</div>
        <div className="flex flex-row justify-around items-center bg-zinc-800 h-12 w-52 px-6 rounded-full"><HiOutlineMail size={24}/> Email Support</div>
        <div className="flex flex-row justify-around items-center bg-zinc-800 h-12 w-52 px-6 rounded-full"><HiOutlinePhoneMissedCall size={24}/>+91 7290041855</div>
        <div className="flex flex-col w-52 text-zinc-800">
          <div className="text-2xl font-light">Connect with us</div>
          <div className="flex flex-row justify-center">
            <div className="mx-1">
              <FaFacebook size={24} />
            </div>
            <div className="mx-1">
              <FaTwitter size={24} />
            </div>
            <div className="mx-1">
              <FaInstagram size={24} />
            </div>
            <div className="mx-1">
              <FaBasketballBall size={24} />
            </div>
            <div className="mx-1">
              <FaPinterest size={24}/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-800 flex flex-row justify-evenly p-12 items-start">
        <div className="w-80">
          <div>
            <img src="ndflogo.png" />
          </div>
          <div className="mt-6">
            We are a credit marketplace for MSME, redefining how Micro, Small,
            and Medium Enterprises (MSMEs) access credit in today’s dynamic
            financial landscape. Our platform, powered by advanced API
            technology, offers a unique blend of financial insights, tailored
            recommendations, and a comprehensive loan marketplace.
          </div>
        </div>
        <div>
          <div className="text-2xl underline decoration-orange-500 underline-offset-8">Products</div>
          <div className="text-md ml-4 my-8 font-extralight">business Loan</div>
          <div className="text-md ml-4 my-8 font-extralight">Working Capital Loan</div>
          <div className="text-md ml-4 my-8 font-extralight">Loan Against Property</div>
          <div className="my-8 underline decoration-orange-500 underline-offset-8">Business Loan by Location</div>
          <div className="my-8 underline decoration-orange-500 underline-offset-8">LAP by Location</div>
          <div className="my-8 underline decoration-orange-500 underline-offset-8">Home Loan by Location</div>
        </div>
        <div className="">
          <div className="text-2xl underline decoration-orange-500 underline-offset-8">Knowledge Center</div>
          <div className="ml-4 my-8 text-md font-extralight">Blog</div>
          <div className="ml-4 my-8 text-md font-extralight">News</div>
          <div className="ml-4 my-8 text-md font-extralight">Webstories</div>
          <div className="ml-4 my-8 text-md font-extralight">Glossary</div>
          <div className="ml-4 my-8 text-md font-extralight">FAQs</div>
          <div className="ml-4 my-8 text-md font-extralight">Authers</div>
          <div className="ml-4 my-8 text-md font-extralight">Customers Success Stories</div>
        </div>
        <div className="flex flex-col items-end w-60 text-end">
          <div>
            <FaWhatsapp size={50}/>
          </div>
          <div className="my-6 font-light">For Industry updates Subsribe to our Whatsapp Channel</div>
          <div className="flex w-40 h-12 bg-white text-zinc-800 items-center justify-center rounded-md my-4">Join Our Channel</div>
          <div className="flex w-36 h-12 bg-white text-zinc-800 items-center justify-center rounded-md my-4">Refer and Earn</div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center text-3xl">
              <div>
                <FaStar />
              </div>
              <div>Trustpilot</div>
            </div>
            <div className="flex flex-row text-orange-500">
              <FaStarHalfAlt size={30}/>
              <FaStarHalfAlt size={30}/>
              <FaStarHalfAlt size={30}/>
              <FaStarHalfAlt size={30}/>
              <FaStarHalfAlt size={30}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
