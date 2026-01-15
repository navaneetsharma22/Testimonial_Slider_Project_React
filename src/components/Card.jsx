import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const Card = ({ reviews }) => {
  if (!reviews) return null;

  return (
    <div className="flex flex-col md:relative ">
      <div className="absolute -top-28 z-10 mx-auto "> 
        <img
          src={reviews.image}
          referrerPolicy="no-referrer" // 🔴 ADDED
          alt={reviews.name}
          className="aspect-square rounded-full w-35 h-35 z-25"
         
        />
        <div className="w-35 h-35 bg-violet-500 rounded-full absolute
        -top-1.5 -z-10 left-2.5]"></div>
        </div>

             

    <div className="text-center mt-7"> 
            <p className="font-bold text-sm capitalize ">{reviews.name}</p>
             <p className="text-violet-300 uppercase text-sm ">{reviews.job}</p>
    </div>
      

  
    
    <div className="text-violet-400 mx-auto mt-5 ">
          <FaQuoteLeft />
    </div>
     
     <div className="text-center mt-4 text-slate-500">
         <p>{reviews.text}</p>
     </div>

     <div className="text-violet-400 mx-auto mt-5">
           <FaQuoteRight />
     </div>
   

    </div>
  );
};

export default Card;
