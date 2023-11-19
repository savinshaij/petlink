import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Home from "./pages/home/Home";
import Signup from "./pages/login-signup/signup"
import Login from "./pages/login-signup/login"
import Profile from "./pages/profile/profile";
import Profile2 from "./pages/profile/profileEdit/Profile2";
import PetCareServices from "./pages/petCareServices/petCareServices";
import CommunityPage from "./pages/Community/CommunityPage";
import LostAndFoundReg from "./pages/LostandFound/LostAndFound";
import LostAndFoundRequestUpdates from "./pages/LostandFound/lostAndFoundReg/Lost";
import Feedback from "./pages/feedback/feedback";
import About from "./pages/about/about";
import PetDatingHub from "./pages/petDHub/petDHub";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/profile-edit" element={<Profile2/>} />
          <Route path="/pet-Care-Services" element={<PetCareServices/>} />
          <Route path="/community" element={<CommunityPage/>} />
          <Route path="/lost-and-found-reg" element={<LostAndFoundReg/>} />
          <Route path="/lost-and-found" element={<LostAndFoundRequestUpdates/>} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/petdatinghub" element={<PetDatingHub/>} />
       
      </Routes>
    </BrowserRouter>
  );
}
