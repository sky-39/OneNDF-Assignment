import {Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import ApplyForLoan from "./pages/apply/ApplyForLoan";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div>
      <Routes>
      <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/applyforloan" element={authUser ? <ApplyForLoan /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App;
