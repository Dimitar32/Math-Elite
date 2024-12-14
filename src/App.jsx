import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/Home/Home.jsx"; 
import Header from "./components/Header/Header.jsx"; 
import Footer from "./components/Footer/Footer.jsx";
import Mission from "./components/OurMission/OurMission.jsx";
import About from "./components/AboutUs/AboutUs.jsx";
import Registration from "./Authorization/Registration/Registration.jsx";
import Login from "./Authorization/Login/Login.jsx";
import LoginReg from "./Authorization/LoginAndRegistration/LoginAndRegistration.jsx";

const App = () => {
    return (
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
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
