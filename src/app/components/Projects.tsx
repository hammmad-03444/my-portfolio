// import { motion } from 'framer-motion';

// const projects = [
//   { name: 'Project 1', description: 'This is an awesome project', link: '#' },
//   { name: 'Project 2', description: 'Another cool project', link: '#' }
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="min-h-screen py-20 bg-gray-100 text-center">
//       <h2 className="text-4xl font-bold mb-8">Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="p-8 bg-white shadow-lg rounded-lg"
//             whileHover={{ scale: 1.05 }}>
//             <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
//             <p className="text-lg text-gray-600">{project.description}</p>
//             <a href={project.link} className="text-purple-500 underline">View Project</a>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

// import { motion } from 'framer-motion';
// import { img } from 'framer-motion/client';

// const projects = [
//   { name: 'Project 1', description: 'This is an awesome project', link: '#',img:'/checktapak.png' },
//   { name: 'Project 2', description: 'Another cool project', link: '#',img:''  },
//   // You can add more projects here
// ];

// const Projects = () => {
//   // Animation variants
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1 }
//   };

//   return (
//     <motion.section
//       id="projects"
//       className="min-h-screen py-20 bg-gradient-to-t  from-sky-900 from-20% via-cyan-950 via-50% to-black to-30 text-center"
//       initial="hidden"
//       whileInView="visible"
//       variants={sectionVariants}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: false }} // Allows animation to trigger on every visit
//     >
//       <motion.h2
//         className="text-4xl font-bold mb-8 text-white"
//         initial="hidden"
//         whileInView="visible"
//         variants={sectionVariants}
//         transition={{ duration: 0.5 }}
//       >
//         Projects
//       </motion.h2>
     
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="p-8 bg-white shadow-lg rounded-lg"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 0.5, delay: index * 0.1 }} // Staggering animation
//             whileHover={{ scale: 1.05 }}
//           >
//             <img className='w-full h-40 object-cover mb-4' src={project.img} alt={project.name} />
//             <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
//             <p className="text-lg text-gray-600">{project.description}</p>
//             <a href={project.link} className="text-purple-500 underline">View Project</a>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Projects;


// import { motion } from 'framer-motion';

// const projects = [
//   { name: 'Project 1', description: 'This is an awesome project', link: '#', img: '/checktapak.png' },
//   { name: 'Project 2', description: 'Another cool project', link: '#', img: '/another-image.png' },
//   // { name: 'Project 3', description: 'Yet another cool project', link: '#', img: '/project-image.png' },
//   // { name: 'Project 4', description: 'A fantastic project', link: '#', img: '/another-image2.png' },
//   // { name: 'Project 5', description: 'One more awesome project', link: '#', img: '/image3.png' },
//   // Add more projects as needed
// ];

// const Projects = () => {
//   // Animation variants
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1 }
//   };

//   return (
//     <motion.section
//       id="projects"
//       className="min-h-screen py-20 bg-gradient-to-t from-sky-900 via-cyan-950 to-black text-center"
//       initial="hidden"
//       whileInView="visible"
//       variants={sectionVariants}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: false }} // Allows animation to trigger on every visit
//     >
//       <motion.h2
//         className="text-4xl font-bold mb-8 text-white"
//         initial="hidden"
//         whileInView="visible"
//         variants={sectionVariants}
//         transition={{ duration: 0.5 }}
//       >
//         Projects
//       </motion.h2>
     
//       {/* Responsive grid for project cards */}
//       <div className=" items-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="overflow-hidden border border-gray-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
//             whileHover={{ scale: 1.03 }}
//           >
//             <img className="w-full h-56 object-cover" src={project.img} alt={project.name} />
//             <div className="p-4">
//               <h3 className="text-2xl font-semibold mb-2 text-white">{project.name}</h3>
//               <p className="text-md text-gray-400 mb-4">{project.description}</p>
//               <a href={project.link} className="text-cyan-400 underline">View Project</a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Projects;







// import { motion } from 'framer-motion';

// const projects = [
//   { name: 'Project 1', description: 'This is an awesome project', link: '#', img: '/checktapak.png' },
//   { name: 'Project 2', description: 'Another cool project', link: '#', img: '/another-image.png' },
//   { name: 'Project 3', description: 'Yet another cool project', link: '#', img: '/project-image.png' },
//   { name: 'Project 4', description: 'A fantastic project', link: '#', img: '/another-image2.png' },
//   { name: 'Project 5', description: 'One more awesome project', link: '#', img: '/image3.png' },
// ];

// const Projects = () => {
//   // Animation variants
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1 }
//   };

//   return (
//     <motion.section
//       id="projects"
//       className="min-h-screen py-20 bg-gradient-to-t from-sky-900 via-cyan-950 to-black text-center"
//       initial="hidden"
//       whileInView="visible"
//       variants={sectionVariants}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: false }} // Allows animation to trigger on every visit
//     >
//       <motion.h2
//         className="text-4xl font-bold mb-8 text-white"
//         initial="hidden"
//         whileInView="visible"
//         variants={sectionVariants}
//         transition={{ duration: 0.5 }}
//       >
//         Projects
//       </motion.h2>
     
//       {/* Responsive grid for project cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="max-w-xs w-full overflow-hidden border border-gray-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
//             whileHover={{ scale: 1.03 }}
//           >
//             <img className="w-full h-56 object-cover" src={project.img} alt={project.name} />
//             <div className="p-4">
//               <h3 className="text-2xl font-semibold mb-2 text-white">{project.name}</h3>
//               <p className="text-md text-gray-400 mb-4">{project.description}</p>
//               <a href={project.link} className="text-cyan-400 underline">View Project</a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Projects;







/* eslint-disable @next/next/no-img-element */


import { motion } from 'framer-motion';

const projects = [
  { name: 'Project 1', description: 'This is an awesome project', link: '#', img: '/checktapak.png' },
  { name: 'Project 2', description: 'Another cool project', link: '#', img: '/another-image.png' },
  { name: 'Project 3', description: 'Yet another cool project', link: '#', img: '/project-image.png' },
  { name: 'Project 4', description: 'A fantastic project', link: '#', img: '/another-image2.png' },
  // { name: 'Project 5', description: 'One more awesome project', link: '#', img: '/image3.png' },
  // Add more projects as needed
];

const Projects = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.section
      id="projects"
      className="min-h-screen py-20 bg-gradient-to-t from-sky-900 via-cyan-950 to-black text-center"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }} // Allows animation to trigger on every visit
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-white"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
     
      {/* Responsive grid for project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="overflow-hidden border border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-transparent"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
            whileHover={{ scale: 1.03 }}
          >
            <img
              className="w-full h-48 object-cover"
              src={project.img}
              alt={project.name}
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2 text-white">{project.name}</h3>
              <p className="text-md text-gray-400 mb-4">{project.description}</p>
              <a href={project.link} className=" text-cyan-400  p-2 w-full py-2 bg-transparent rounded border border-gray-600 hover:bg-gray-800 hover:text-gray-200 hover:shadow-xl shadow-md transition-all duration-300 ">View Project</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;


