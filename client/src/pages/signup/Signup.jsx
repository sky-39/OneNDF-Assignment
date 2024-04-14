import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import toast from "react-hot-toast";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    referral_code: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  const handleGetStarted = () => {
    toast('Please Fill in the details and Create Account!!',
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
  }

  const [termAccepted, setTermAccepted] = useState(false);

  return (
    <div className="flex flex-row h-screen w-screen justify-stretch">
      <div className="flex flex-col w-2/5 bg-zinc-800 p-8 font-bold">
        <div>
          <img src="ndflogo.png" className="w-30 h-30 my-6" />
        </div>
        <div className="text-3xl text-white font-light my-6">
          Unlocking access to debt capital for India{"'"}s SMEs |{" "}
          <span className="text-orange-500 underline underline-offset-8">
            OneNDF
          </span>
        </div>
        <div className="text-white text-md font-light leading-9 my-8">
          Meet your debt capital needs with India{"’"}s fast-growing SME
          business{" "}
          <span className="text-orange-500 underline underline-offset-8">
            loan marketplace
          </span>
          . We aim to nurture SMEs to make informed decisions while creating an
          eco-system of cheaper & smarter debt and/or non-traditional ways of{" "}
          <span className="text-orange-500 underline underline-offset-8">
            Debt Financing
          </span>
          . We work with Non-Fundable Small Businesses to provide them access to
          credit via Non-Traditional Lending and offer recommendations for
          becoming{" "}
          <span className="text-orange-500 underline underline-offset-8">
            future-ready
          </span>{" "}
          for organized credit.
        </div>
        <div
          className="h-20 bg-white rounded flex justify-center items-center my-8 cursor-pointer hover:shadow-2xl"
          onClick={handleGetStarted}
        >
          Get Started
        </div>
      </div>
      <div className="h-100 w-3/5 mt-14">
        <p className="absolute right-10 top-5 text-black font-medium">
          Already a member?{" "}
          <Link to="/login" className="dark:text-zinc-800 hover:underline">
            Sign In
          </Link>
        </p>
        <div className="flex flex-col">
          <p className="font-bold text-3xl ml-5 mt-14 text-center">
            Sign Up to OneNDF
          </p>
          <form className="self-center" onSubmit={handleSubmit}>
            <div className="flex flex-row my-8">
              <div className="flex flex-col mx-5">
                <label className="font-bold">Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  className="bg-slate-200 h-8 w-96 rounded-md pl-3 placeholder-black placeholder-opacity-50"
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 my-8">
              <label className="font-bold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="test@example.com"
                className="bg-slate-200 h-8 w-96 rounded-md pl-3 placeholder-black placeholder-opacity-50"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col ml-5 my-8">
              <label className="font-bold">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-slate-200 h-8 w-96 rounded-md pl-3 placeholder-black placeholder-opacity-50"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col ml-5 my-8">
              <label className="font-bold">
                Have a referral?{" "}
                <span className="text-gray-400 font-light">{"(Optional)"}</span>{" "}
              </label>
              <input
                type="text"
                name="referral_code"
                placeholder="Enter referral code"
                className="bg-slate-200 h-8 w-96 rounded-md pl-3 placeholder-black placeholder-opacity-50"
                value={inputs.referral_code}
                onChange={(e) =>
                  setInputs({ ...inputs, referral_code: e.target.value })
                }
              />
            </div>
            <div className="flex flex-row w-96 ml-5 text-sm my-8">
              <input
                type="checkbox"
                name="conditionCheck"
                className="w-10 h-10 border-gray-300 rounded mr-4"
                value={termAccepted}
                onChange={(e) => setTermAccepted(e.target.checked)}
              />
              <p className="text-slate-500 mt-4">
                Creating an account means you are okay with our
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Terms of Service,
                </a>{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Privacy Policy
                </a>
                , and our default
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  {" "}
                  Notification Settings
                </a>
              </p>
            </div>
            <div className="my-10 ml-5">
              <button
                className={`w-48 h-10 bg-zinc-800 rounded-lg text-white shadow-sm hover:bg-orange-500 disabled:opacity-45 disabled:cursor-not-allowed`}
                disabled={loading || !termAccepted}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Create Account"
                )}
              </button>
              <p className="w-72 text-xs mt-8 leading-4">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Terms of Service apply
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
