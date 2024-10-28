// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <motion.section id="about" className="min-h-screen py-20 bg-white text-center"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}>
//       <h2 className="text-4xl font-bold mb-8">About Me</h2>
//       <p className="text-xl text-gray-700">I'm a passionate developer with skills in Next.js, TypeScript, and TailwindCSS.</p>
//     </motion.section>
//   );
// };

// export default About;
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <motion.section
//       id="about"
//       className="min-h-screen py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center flex flex-col justify-center items-center"
//       initial={{ opacity: 0, scale: 0.8 }} // Start opacity 0 and scale smaller
//       whileInView={{ opacity: 1, scale: 1 }} // Fade in and scale up when in view
//       transition={{ duration: 1.2, ease: "easeInOut" }} // Smooth transition
//       viewport={{ once: true }} // Animation triggers only once when in view
//     >
//       <h2 className="text-5xl font-extrabold mb-8 text-white">About Me</h2>
//       <p className="text-2xl text-gray-200 max-w-2xl">
//         I'm a passionate developer with skills in Next.js, TypeScript, and TailwindCSS.
//       </p>
//     </motion.section>
//   );
// };

// export default About;

// import { motion } from 'framer-motion';

// const About = () => {
//   const sectionVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1 }
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <motion.section
//       id="about"
//       className="min-h-screen py-20 bg-gradient-to-b from-sky-900 from-20% via-cyan-950 via-50% to-black to-30 text-center flex flex-col justify-center items-center"
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//       viewport={{ once: false }} // Allows animation to trigger on every visit
//     >
//       <motion.h2
//         className="text-5xl font-extrabold mb-8 text-white"
//         variants={textVariants}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ duration: 0.5 }}
//       >
//         About Me
//       </motion.h2>
//       <motion.p
//         className="text-xl text-gray-200 max-w-2xl"
//         variants={textVariants}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         I'm a passionate developer with skills in Next.js, TypeScript, and TailwindCSS.
//       </motion.p>
//     </motion.section>
//   );
// };

// export default About;

// import React from 'react';
// import { motion } from 'framer-motion'; // For animation
// import { Typewriter } from 'react-simple-typewriter'; // For typewriter effect

// const About = () => {
//   const sectionVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1 }
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <motion.section
//       id="about"
//       className="min-h-screen py-20 bg-gradient-to-b from-sky-900 from-20% via-cyan-950 via-50% to-black to-30 text-center flex flex-col justify-center items-center"
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//       viewport={{ once: false }} // Allows animation to trigger on every visit
//     >
//       <motion.h2
//         className="text-5xl font-extrabold mb-8 text-white"
//         variants={textVariants}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ duration: 0.5 }}
//       >
//         About Me
//       </motion.h2>

//       {/* Typewriter effect applied here */}
//       <motion.div
//         className="text-xl text-gray-200 max-w-2xl"
//         variants={textVariants}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <Typewriter
//           words={[
//             "I'm a passionate developer with skills in Next.js, TypeScript, and TailwindCSS.I love building responsive and dynamic web applications.I enjoy collaborating on exciting projects!",
            
//           ]}
//           loop={1} // Infinite loop
//           typeSpeed={50}
//           deleteSpeed={30}
//           delaySpeed={1000} // Delay before typing the next word
//         />
//       </motion.div>
//     </motion.section>
//   );
// };

// export default About;



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // For animation
import { Typewriter } from 'react-simple-typewriter'; // For typewriter effect

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [showTypewriter, setShowTypewriter] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);

  // Use IntersectionObserver to detect when the About section is in view
  useEffect(() => {
    const section = document.getElementById('about');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTyped) {
            setShowTypewriter(true); // Start Typewriter when in view
            setHasTyped(true); // Ensure it only types once during this view
          } else if (!entry.isIntersecting) {
            setShowTypewriter(false); // Reset when out of view to allow retrigger
            setHasTyped(false); // Allows typing animation to start again
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (section) observer.observe(section);

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, [hasTyped]);

  return (
    <motion.section
      id="about"
      className="min-h-screen py-20 bg-gradient-to-b from-sky-900 from-20% via-cyan-950 via-50% to-black to-30 text-center flex flex-col justify-center items-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      viewport={{ once: false }} // Re-triggers animation on every visit
    >
      <motion.h2
        className="text-5xl font-extrabold mb-8 text-white"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      {/* Typewriter effect with new line and re-triggering */}
      <motion.div
        className="text-xl text-gray-200 max-w-2xl"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {showTypewriter && (
          <Typewriter
            words={[
              "I'm a passionate developer with skills in Next.js, TypeScript, and TailwindCSS.I love building responsive and dynamic web applications.I enjoy collaborating on exciting projects!",
            
            ]}
            loop={0} // No looping, only type once
            typeSpeed={50}
            deleteSpeed={50} // No deleting
            delaySpeed={3000} // Delay before typing the next line
          />
        )}
      </motion.div>
    </motion.section>
  );
};

export default About;

