import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-row h-screen w-screen justify-stretch">
      <div className="flex flex-col w-2/5 bg-zinc-800 pl-6 pr-2 font-bold">
        <div className="flex flex-row items-center text-center">
          <p
            style={{
              fontFamily: "Dancing Script",
              fontWeight: "400",
            }}
            className="text-orange-500 mt-14 text-4xl"
          >
            OneNDF
          </p>
          <img src="ndflogo.png" className="w-12 h-12 mt-14" />
        </div>
        <p className="text-2xl w-96 text-blue-500 mt-8">
          Unlocking access to debt capital for India{"'"}s SMEs
        </p>
        <div className="text-blue-400 mt-12">
          Meet your debt capital needs with India{"’"}s fast-growing SME
          business loan marketplace. We aim to nurture SMEs to make informed
          decisions while creating an eco-system of cheaper & smarter debt
          and/or non-traditional ways of Debt Financing. We work with
          Non-Fundable Small Businesses to provide them access to credit via
          Non-Traditional Lending and offer recommendations for becoming
          future-ready for organized credit.
          <div className="mt-12 border w-1/2 p-4 rounded-lg">
            Create an account to get started
          </div>
        </div>
      </div>
      <div className="h-100 w-3/5 mt-28">
        <p className="absolute right-10 top-5 text-black font-medium">
          New to OneNDF?{" "}
          <Link
            to="/signup"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        <div className="flex flex-col">
          <p className="font-bold text-3xl ml-5 mt-14 text-center">
            Sign In to OneNDF
          </p>
          <form className="self-center" onSubmit={handleSubmit}>
            <div className="flex flex-col ml-5 my-8">
              <label className="font-bold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="JohnDoe@gmail.com"
                className="bg-slate-200 h-8 w-96 rounded-md pl-3 placeholder-black placeholder-opacity-50"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col ml-5 my-8">
              <label className="font-bold">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-slate-200 h-8 w-96 rounded-md pl-3 placeholder-black placeholder-opacity-50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="my-10 ml-5">
              <button
                className={`w-48 h-10 bg-blue-500 rounded-lg text-white shadow-sm hover:bg-black disabled:opacity-45 disabled:cursor-not-allowed`}
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign In"
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

export default Login;
