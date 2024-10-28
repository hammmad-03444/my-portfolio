// 'use client'
// import { motion } from 'framer-motion';
// import React from 'react';

// const Contact = () => {
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const textVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } }
//   };

//   return (
//     <motion.section
//       id="contact"
//       className="min-h-screen py-20 bg-gradient-to-b from-sky-900 from-20% via-cyan-950 via-50% to-black to-30 text-center"
//       initial="hidden"
//       whileInView="visible"
//       variants={sectionVariants}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: false }} // Allows the animation to trigger every time you visit the section
//     >
//       <motion.h2
//         className="text-4xl font-bold mb-8 text-white"
//         variants={textVariants}
//       >
//         Contact Me
//       </motion.h2>
//       <motion.p className="text-lg text-gray-200" variants={textVariants}>
//         Email: hammad@example.com
//       </motion.p>
//       <motion.p className="text-lg text-gray-200" variants={textVariants}>
//         Phone: +92 300 1234567
//       </motion.p>
//     </motion.section>
//   );
// };

// export default Contact;






'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setIsSubmitted(true);
    }
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen py-20 bg-gradient-to-b from-sky-900 from-20% via-cyan-950 via-50% to-black to-30 text-center"
      initial="hidden"
      whileInView="visible"
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <motion.h2 className="text-4xl font-bold mb-8 text-white">
        Contact Me
      </motion.h2>
      {isSubmitted ? (
        <p className="text-lg text-green-500">Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 w-full py-2 bg-transparent rounded border border-gray-600 hover:bg-gray-800 hover:text-gray-200 hover:shadow-xl shadow-md transition-all duration-300 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 w-full py-2 bg-transparent rounded border border-gray-600 hover:bg-gray-800 hover:text-gray-200 hover:shadow-xl shadow-md transition-all duration-300 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className=" p-2 w-full py-2 bg-transparent rounded border border-gray-600 hover:bg-gray-800 hover:text-gray-200 hover:shadow-xl shadow-md transition-all duration-300 text-white"
            required
          />
          {/* <button type="submit" className="w-full py-2 bg-transparent  rounded border border-gray-700 hover:shadow-xl shadow-md transition-shadow duration-300 text-white  "> */}
          <button
  type="submit"
  className="w-full py-2 bg-transparent rounded border border-gray-700 hover:bg-gray-800 hover:text-gray-200 hover:shadow-xl shadow-md transition-all duration-300 text-white"
>
  Submit
</button>

            {/* Send Message
          </button> */}
        </form>
      )}
    </motion.section>
  );
};

export default Contact;
