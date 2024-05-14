import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './Home.js'
import Schedule from './Schedule.js'
import Cart from './Cart.js'
import Confirm from './Confirm.js'



const Stepper = () => {
  const steps = ["SelectTask", "Schedule", "Cart", "Confirm"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
   <div className="flex flex-col space-y-4">

    <div className='w-[1216] h-[146]'>
    <h1 className="w-[179] h-28 font-sans text-2xl font-semibold text-center">Project Progress</h1>
    <div className="flex justify-between mx-32">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="mb-2">{step}</p>
          </div>
        ))}
    </div>
    </div> 
       
  


<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/schedule" element={<Schedule />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/confirm" element={<Confirm />} />
 
</Routes>



      <div className='w-[1216] h-[146] mx-auto '>
      {!complete && (
        <Link to={`/${steps[currentStep]?.toLowerCase() || ''}`} className="btn mt-3 mb-5"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >         
          {currentStep === steps.length ? "Finish" : `Continue to ${steps[currentStep]}`}
        </Link>
      )}


      <div className="text-center">Save for Later   <i className="fa-solid fa-arrow-right"></i></div>
    </div>

   </div>
    
  );
};

export default Stepper;