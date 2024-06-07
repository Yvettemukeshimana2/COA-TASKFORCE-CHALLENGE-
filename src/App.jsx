 import React, { useState } from "react";
 import cut from "./images/cut.png";
 import fish from "./images/fish.png";
 import cow from "./images/cow.png";
 import monkey from "./images/monkey.png";
  import { FaArrowRight } from "react-icons/fa";

 

 const Gallery = () => {
   const [hoveredIndex, setHoveredIndex] = useState(null);

   const handleMouseEnter = (index) => {
     setHoveredIndex(index);
   };

   const handleMouseLeave = () => {
     setHoveredIndex(null);
   };

   const images = [
     { src: cut, title: "FENNEC", subtitle: "FOX", location: "India" },
     { src: fish, title: "HUMPBACK", subtitle: "WHALE", location: "South Africa" },
     { src: monkey, title: "COMMON BROWN", subtitle: "BABOON", location: "South Africa" },
     { src: cow, title: "SPORTTED", subtitle: "DEER", location: "Amazon" },
   ];

   return (
     <div className="p-3 bg-black inset-0">
       {/* <div className="p-10 inset-0 rounded-3xl bg-red-700">
         <div className="relative w-full h-full overflow-y-hidden">
           <div className="relative top-0 left-0 w-full h-full overflow-hidden">
             <div className="relative w-full h-full">
               <div className="relative top-0 left-0 w-full h-full overflow-y-auto">
                 <div className="font-poppins relative text-[80px] font-light leading-[100px] text-white text-left">
                   <p>The designs represent both desktop and mobile view.</p>
                   <p className="mt-40">
                     To view interactions, run the designs in prototype mode.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div> */}
       <div className="flex">
         {images.map((image, index) => (
           <div
             key={index}
             className="flex-1 bg-opacity-75 relative overflow-hidden group"
             onMouseEnter={() => handleMouseEnter(index)}
             onMouseLeave={handleMouseLeave}
           >
             <img
               src={image.src}
               alt={image.title}
               className="w-full  h-full transition-all opacity-85 duration-300 ease-out transform scale-109 group-hover:scale-110 group-hover:opacity-70 group-hover:blur-sm group-hover:brightness-90 group-hover:saturate-0"
             />
             <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 ease-out group-hover:bg-opacity-35"></div>
             <div
               className={`absolute bottom-20 left-3 mb-4 ml-4 text-white  
                  "opacity-100" : "opacity-0"
               } transition-opacity duration-300 ease-in-out`}
               style={{
                 fontFamily: "DIN Condensed",
                 fontSize: "28px",
                 fontWeight: "700",
                 lineHeight: "38px",
                 textAlign: "left",
                 transition: "transform 0.5s ease-in-out",
                 transform:
                   hoveredIndex === index
                     ? "translateY(-20px)"
                     : "translateY(0)",
               }}
             >
               <p className="hidden md:block">{image.title}</p>
               <p className="hidden md:block">{image.subtitle}</p>
               <div
                 className={`absolute left-1 top-24 text-white transition-opacity duration-300 ease-in-out 
                   "opacity-100" : "opacity-0"
                 }`}
                 style={{
                   fontFamily: "Poppins",
                   fontSize: "15px",
                   fontWeight: "400",
                   lineHeight: "16.02px",
                   textAlign: "left",
                   width: "213px",
                   height: "16px",
                   gap: "0px",
                   opacity: "0.7",
                 }}
               >
                 <p className="hidden md:block">{image.location}</p>
                 <div className="flex flex-col">
                   {hoveredIndex === index && (
                     <div className="flex space-x-2 mt-2 left-10">
                       <p className="text-md text-cyan-400 hidden md:block">know more</p>
                       <FaArrowRight className="text-cyan-400 mt-0 h-4 hidden md:block" />
                     </div>
                   )}
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 };

 export default Gallery;
