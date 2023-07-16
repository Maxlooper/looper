import React from "react";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import Contact from "./component/contact/Contact";
import Services from "./component/services/Services";
import Skills from "./component/skills/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="skills" element={<Skills />} />
        <Route path="services" element={<Services />} />
        <Route
          path="/"
          exact
          element={
            <>
              <Header />
              <Contact />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
