// const Footer = () => {
//     return (
//       <footer className="bg-purple-900 py-4 text-center text-white">
//         <motion.p
//           className="text-lg"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           © 2024 Muhammad Hammad Khan. All rights reserved.
//         </motion.p>
//       </footer>
//     );
//   };
  
//   export default Footer;
// import { motion } from 'framer-motion';

// const Footer = () => {
//   return (
//     <footer className="bg-purple-900 py-4 text-center text-white">
//       <motion.p
//         className="text-lg"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         © 2024 Muhammad Hammad Khan. All rights reserved.
//       </motion.p>
//     </footer>
//   );
// };

// export default Footer;

  






import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-sky-900 via-cyan-950 to-black py-8 text-center text-white">
      <motion.p
        className="text-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © 2024 Muhammad Hammad Khan. All rights reserved.
      </motion.p>
      
      {/* Social Icons */}
      <motion.div
        className="flex justify-center space-x-6 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.a
          href="https://github.com/yourprofile" // Replace with your GitHub link
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300 transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn link
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300 transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://twitter.com/yourprofile" // Replace with your Twitter link
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300 transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
        >
          <FaTwitter />
        </motion.a>
      </motion.div>
    </footer>
  );
};

export default Footer;
