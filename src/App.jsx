// App.jsx
import React, { useState } from "react";
import Hero from "./components/Homepage/Hero";
import Content1 from "./components/Homepage/Content1";
import Content2 from "./components/Homepage/Content2";
import Content3 from "./components/Homepage/Content3";
import buttonConfig from "./config/buttonConfig";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";
import NavBarLight from "./components/NavBarLight";



function App() {
  let location = useLocation
  console.log(location)
  return (
    <div>
      <div className="min-h-screen bg-homebg bg-cover bg-no-repeat flex flex-col">
        {/* Navigation Bar */}
        <NavBarLight />
        {/* Hero Section */}
        <div
          className="flex-grow xs:mx-5 sm:mx-10 lg:mx-40"
          style={{ height: "calc(100vh - 60px)" }}
        >
          <Hero buttonlinks={[buttonConfig.seeAllProduce]} />
        </div>
      </div>
    
      {/* Content 1 */}
      <div className="xs:mx-5 sm:mx-10 lg:mx-40">
        <Content1 />
      </div>
      {/* Content 2 */}
      <div>
        <Content2 buttonlinks={[buttonConfig.learnMore]} />
      </div>
      {/* Content 3 */}
      <div className="xs:mt-10 sm:mt-0">
        <Content3 />
      </div>
      {/* Footer*/}
      <div >
        <Footer buttonlinks={[buttonConfig.workWithUs]}/>
      </div>

    </div>
  );
}

export default App;
