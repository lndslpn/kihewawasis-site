import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./components/Home.jsx";
import Connect from "./components/Connect.jsx";
// import Request from "./components/Request.jsx";
// import Events from "./components/Events.jsx";
// import Newsletter from "./components/Newsletter.jsx";
// import Groups from "./components/Groups.jsx";
// import Members from "./components/Members.jsx";

import Navbar from "./tools/Header.jsx";
import Footer from "./tools/Footer.jsx";

import PageTransition from "./tools/PageTransition.jsx";
import ScrollToTop from "./tools/ScrollToTop.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition> <Home /> </PageTransition>}/>
            <Route path="/connect-with-us" element={<PageTransition> <Connect /> </PageTransition>}/>
            {/* <Route path="/" element={<Home />}/> */}
              {/* <Route path="/connect-with-us" element={<Connect />} />
              <Route path="/request-care" element={<Request />} />
              <Route path="/events-calendar" element={<Events />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/members" element={<Members />} /> */}
            </Routes>
          </AnimatePresence>
      </main>

      {/* Always visible */}
      <Footer />
    </div>
  );
}

export default App;