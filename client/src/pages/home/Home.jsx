import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useAuthContext } from "../../context/AuthContext";

const Home = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Navbar />
      <div className="mt-12 text-3xl mb-80">Welcome {authUser.fullName}! Click on Apply for Loan for redeem your referral!</div>
      <Footer />
    </div>
  );
};

export default Home;
