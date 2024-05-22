import React from "react";



import imgDoctor from '../assets/images/88108.jpg';
import { Link } from "react-router-dom";
function Doctor({name ,lastname,img,specialite ,doctorId,PatientId}) {
  return ( <div className="mt-12  relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
    // src = {imgDoctor}
         src = {img}
         
        
    alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
     Dr.{name}-{lastname}
    </h5> 
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    speciality: {specialite}
    </p>
  </div>
  <div className="p-6 pt-0">
    <Link to={`/createrdv/${doctorId}/${PatientId}`}
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
     NEW RDV
    </Link>
  </div>
</div>  
  );
}

export default Doctor;
