import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider
import Home from "./components/Home/Home.jsx"; 
import Header from "./components/Header/Header.jsx"; 
import Footer from "./components/Footer/Footer.jsx";
import Mission from "./components/OurMission/OurMission.jsx";
import About from "./components/AboutUs/AboutUs.jsx";
import Registration from "./Authorization/Registration/Registration.jsx";
import Login from "./Authorization/Login/Login.jsx";
import LoginReg from "./Authorization/LoginAndRegistration/LoginAndRegistration.jsx";
import UserProfile from "./components/UserProfile/UserProfile.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import TaskPage from "./components/TaskPage/TaskPage.jsx";


const CLIENT_ID = "1057640799920-ao2d1u399ms60vt30mjido36p8tjt7gh.apps.googleusercontent.com";

const App = () => {
    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/mission" element={<Mission />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/registration" element={<Registration />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/loginOrRegistration" element={<LoginReg />} />
                        <Route path="/profile" element={<UserProfile />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/tasks" element={<TaskPage />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </GoogleOAuthProvider>
    );
};

export default App;
