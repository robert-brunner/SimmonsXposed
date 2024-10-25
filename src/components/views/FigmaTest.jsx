import React from "react";
import '../../App.css'
import Hitchcock from "../dollyZoom/vertigo";

const Box = () => {
  return (
    <>
      {/* Navbar with higher z-index */}
      <div className="fixed w-full h-[87px] top-0 left-0 bg-[#1c1e1f] shadow-[0px_4px_4px_#00000040] z-10" />

      {/* Full-screen black background with lower z-index */}
      <div className="fixed w-full h-full top-0 left-0 bg-black z-0"></div>
      <Hitchcock/>
      {/* Bottom section, responsive, positioned at the bottom */}
      <div className="fixed w-full h-[334px] bottom-0 left-0 bg-[#1c1e1f] shadow-[0px_-4px_4px_#00000040] z-10">
        

        <div id="gnome" className="flex justify-between items-center h-full px-9 gap-3">
          {/* Rectangle 1 */}
          <div id="mushroom" className="w-[422px] h-[296px] bg-[#1c1e1f]"></div>
          {/* Rectangle 2 */}
          <div id="mushroom" className="w-[422px] h-[296px] bg-[#1c1e1f]"></div>
          {/* Rectangle 3 */}
          <div id="mushroom" className="w-[422px] h-[296px] bg-[#1c1e1f]"></div>
          {/* Rectangle 4 */}
          <div id="mushroom" className="w-[422px] h-[296px] bg-[#1c1e1f]"></div>

        </div>
      </div>
    </>
  );
};

export default Box;







/*
<div className="fixed w-full h-[290px] bottom-0 left-0 bg-black  z-10">
import React from "react";

const Box = () => {
  return (
    <>

      <div className="fixed w-full h-[87px] top-0 left-0 bg-[#1c1e1f] shadow-[0px_4px_4px_#00000040] z-10" />


      <div className="fixed w-full h-full top-0 left-0 bg-black z-0"></div>

      <div className="fixed w-full h-[334px] bottom-0 left-0 bg-[#1c1e1f] shadow-[0px_-4px_4px_#00000040] z-10"></div>

      <div className="fixed w-full h-[300px] bottom-0 left-0 bg-black shadow-[0px_-4px_4px_#00000040] z-10"></div>
    </>
  );
};

export default Box;



*/