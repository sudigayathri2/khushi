import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";

import SignIn from "./components/SignIn";
import Join from "./components/Join";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
};

export default App;
