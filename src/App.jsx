import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";
import SignIn from "./components/SignIn/SignIn";  
import SuccessSignup from "./components/Success/SuccessSignup";
import SuccessSignin from "./components/Success/SuccessSignin";


const App = () => {
  return (
    <div className="bg-[#050414]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative pt-20">
        <Router>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/success-signup" element={<SuccessSignup/>} />
            <Route path="/success-signin" element={<SuccessSignin/>} />
            <Route path="/SignIn" element={<SignIn />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
