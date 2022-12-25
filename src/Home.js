import React from "react";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Inboxpage from "./Pages/Inboxpage";
import Databasepage from "./Pages/Databasepage";
import Uploaddocspage from "./Pages/Uploaddocspage";
import Writepage from "./Pages/Writepage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Viewpage from "./Pages/Viewpage";
import Projectdetailspage from "./Pages/Projectdetailspage";

function Home() {
  const [close, setClose] = useState(false);

  const toggleSideBar = () => {
    setClose(!close);
  };

  return (
    <Router>
      <div className="home">
        <Sidebar closeBar={close} />
        <Routes>
          <Route
            path="/inbox"
            element={<Inboxpage toggle={toggleSideBar} closeBar={close} />}
          />
          <Route
            path="/activites"
            element={<Databasepage toggle={toggleSideBar} closeBar={close} />}
          />
          <Route
            path="/upload"
            element={<Uploaddocspage toggle={toggleSideBar} closeBar={close} />}
          />
          <Route
            path="/view"
            element={<Viewpage toggle={toggleSideBar} closeBar={close} />}
          />
          <Route
            path="/write"
            element={<Writepage toggle={toggleSideBar} closeBar={close} />}
          />
          <Route
            path="/projectdetails"
            element={
              <Projectdetailspage toggle={toggleSideBar} closeBar={close} />
            }
          />
          <Route
            path="/"
            element={<Inboxpage toggle={toggleSideBar} closeBar={close} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
