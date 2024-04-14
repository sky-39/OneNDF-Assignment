import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useApply from "../../hooks/useApply";

const ApplyForLoan = () => {
  const {applyforloan} = useApply();
  
  const handleApplyForLoan = async () => {
    await applyforloan();
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Navbar />
      <div className="flex mt-44 mb-44 border-2 border-black w-44 h-14 text-center items-center justify-center cursor-pointer rounded-lg hover:shadow-lg bg-zinc-800 text-white hover:bg-white hover:text-zinc-800" onClick={handleApplyForLoan}>
          <button>Apply For Loan</button>
      </div>
      <Footer />
    </div>
  )
}

export default ApplyForLoan