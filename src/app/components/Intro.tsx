// import React from 'react';
// import { Typewriter } from 'react-simple-typewriter';



// const Intro = () => {
//   return (
//     <section id="intro" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-t  from-sky-900 from-20% via-cyan-950 via-50% to-black to-30">
//       <h1 className="text-5xl font-bold text-white mb-4">Hi, I'm <span className="text-yellow-300">Muhammad Hammad Khan</span></h1>
//       <div className="text-3xl text-yellow-200">
//       <Typewriter
//           words={['Web Developer', 'Full-Stack Developer', 'UI/UX Designer']}
//           loop={0} // Infinite loop
//           typeSpeed={50}
//           deleteSpeed={30}
//           delaySpeed={1000} // Delay before typing the next word
//         />
//       </div>

//     </section>
//   );
// };

// export default Intro;

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { useState,useEffect} from 'react';

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
        const section = document.getElementById('intro');
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);  // Trigger animation when visible
              } else {
                setIsVisible(false); // Reset animation when out of view
              }
            });
          },
          { threshold: 0.5 } // Adjust as needed to trigger at 50% visibility
        );
    
        if (section) observer.observe(section);
    
        return () => observer.disconnect(); // Cleanup observer on unmount
      }, []);
    
  return (
    <section
      id="intro"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-t from-sky-900 from-20% via-cyan-950 via-50% to-black to-30"
    >{isVisible &&(
      <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="mb-4"
      >
        {/* Add your image here */}
        <img
          src="/checktapak.png"
          alt="Muhammad Hammad Khan"
          className="rounded-full border-4 border-yellow-300 w-40 h-40 object-cover sm:w-48 sm:h-48 lg:w-56 lg:h-56"
        />
      </motion.div>
      <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 md:mb-0"
          >
      <h1 className="text-5xl font-bold text-white mb-4">
        Hi, I'm <span className="text-yellow-300">Muhammad Hammad Khan</span>
      </h1>
      <div className="text-3xl text-yellow-200">
        <Typewriter
          words={['Web Developer', 'Full-Stack Developer', 'UI/UX Designer']}
          loop={0} // Infinite loop
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1000} // Delay before typing the next word
        />
        
      </div>
      </motion.div>
      </>
      )}
    </section>
  );
};

export default Intro;      //second prefence

// import React, { useState, useEffect } from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import { motion } from 'framer-motion';

// const Intro = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const section = document.getElementById('intro');
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);  // Trigger animation when visible
//           } else {
//             setIsVisible(false); // Reset animation when out of view
//           }
//         });
//       },
//       { threshold: 0.5 } // Adjust as needed to trigger at 50% visibility
//     );

//     if (section) observer.observe(section);

//     return () => observer.disconnect(); // Cleanup observer on unmount
//   }, []);

//   return (
//     <section id="intro" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-t from-sky-900 from-20% via-cyan-950 via-50% to-black to-30 md:flex-row md:justify-between">
//       {isVisible && (
//         <>
//            {/* Image Section */}
//            <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-yellow-300 shadow-lg"
//           >
//             <img
//               src="/checktapak.png" // Replace with your image path
//               alt="Muhammad Hammad Khan"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="mb-8 md:mb-0"
//           >
//             <h1 className="text-5xl font-bold text-white mb-4">
//               Hi, I'm <span className="text-yellow-300">Muhammad Hammad Khan</span>
//             </h1>
//             <div className="text-3xl text-yellow-200">
//               <Typewriter
//                 words={['Web Developer', 'Full-Stack Developer', 'UI/UX Designer']}
//                 loop={0} // No loop
//                 typeSpeed={50}
//                 deleteSpeed={30}
//                 delaySpeed={1000} // Delay before typing the next word
//               />
//             </div>
//           </motion.div>

         
//         </>
//       )}
//     </section>
//   );
// };

// export default Intro;


// import React from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import { motion } from 'framer-motion'; // For animation

// const Intro = () => {
//   return (
//     <section id="intro" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-t from-sky-900 from-20% via-cyan-950 via-50% to-black to-30 md:flex-row md:justify-between">
//       <motion.div
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="mb-8 md:mb-0"
//       >
//         <h1 className="text-5xl font-bold text-white mb-4">
//           Hi, I'm <div className="text-yellow-300">Muhammad Hammad Khan</div>
//         </h1>
//         <div className="text-3xl text-yellow-200">
//           <Typewriter
//             words={['Web Developer', 'Full-Stack Developer', 'UI/UX Designer']}
//             loop={0} // Infinite loop
//             typeSpeed={50}
//             deleteSpeed={30}
//             delaySpeed={1000} // Delay before typing the next word
//           />
//         </div>
//       </motion.div>

//       {/* Image Section */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-yellow-300 shadow-lg"
//       >
//         <img
//           src="/checktapak.png" // Replace with your image path
//           alt="Muhammad Hammad Khan"
//           className="w-full h-full object-cover"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default Intro;

