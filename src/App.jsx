import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import Home from "./components/Home.jsx";
import Connect from "./components/Connect.jsx";
import Request from "./components/Request.jsx";
import Events from "./components/Events.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Groups from "./components/Groups.jsx";
import Members from "./components/Members.jsx";

import Navbar from "./tools/Header.jsx";
import Footer from "./tools/Footer.jsx";

import PageTransition from "./tools/PageTransition.jsx";
import ScrollToTop from "./tools/ScrollToTop.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    const titleMap = {
      "/": "Home | Kihew Awasis Wakamik",
      "/connect-with-us": "Connect With Us | Kihew Awasis Wakamik",
      "/request-care": "Request Care | Kihew Awasis Wakamik",
      "/events-calendar": "Events Calendar | Kihew Awasis Wakamik",
      "/newsletter": "Newsletter | Kihew Awasis Wakamik",
      "/groups": "Groups | Kihew Awasis Wakamik",
      "/members": "Members | Kihew Awasis Wakamik",
    };

    document.title = titleMap[location.pathname] || "Kihew Awasis Wakamik";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition> <Home /> </PageTransition>}/>
              <Route path="/connect-with-us" element={<PageTransition> <Connect /> </PageTransition>}/>
              <Route path="/request-care" element={<PageTransition> <Request /> </PageTransition>}/>
              <Route path="/events-calendar" element={<PageTransition> <Events /> </PageTransition>}/>
              <Route path="/newsletter" element={<PageTransition> <Newsletter /> </PageTransition>}/>
              <Route path="/groups" element={<PageTransition> <Groups /> </PageTransition>}/>
              <Route path="/members" element={<PageTransition> <Members /> </PageTransition>}/>
            </Routes>
          </AnimatePresence>
      </main>

      {/* Always visible */}
      <Footer />
    </div>
  );
}

export default App;
