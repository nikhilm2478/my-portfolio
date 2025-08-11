import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const AboutMe = () => {
  const paragraphs = [
    "Curiosity has always fueled my passion for technology and collaboration. I aim to leverage my background in Computer Science and Economics to bridge technical innovation with business strategy, helping organizations solve complex problems effectively.",
    "In past roles at Santander Bank and GoApptiv, I worked cross-functionally with data, software, and business teams, using SQL, Python, and data visualization to drive automation and client-focused solutions.",
    "Through hands-on experience, I’ve sharpened my ability to translate technical challenges into clear, actionable strategies.",
    "I thrive in dynamic, collaborative environments where learning and innovation go hand-in-hand. I'm excited to continue growing as a problem-solver, building solutions that make a real impact. Let's connect and explore how we can collaborate.",
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        {/* Static Profile Image */}
        <motion.img
          src="/1691946511052.jpeg"
          alt="Nikhil Mukherjee"
          className="rounded-full shadow-lg border-4 border-blue-400 hover:shadow-blue-500/50 transition-shadow duration-300 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Bio Section */}
        <div className="md:col-span-2 space-y-4 sm:space-y-6">
          <h2 className="text-blue-400 text-xl sm:text-2xl font-semibold tracking-widest drop-shadow-[0_0_10px_rgba(0,191,255,0.6)]">
            ABOUT ME
          </h2>

          {paragraphs.map((text, idx) => (
            <p key={idx} className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {text}
            </p>
          ))}

          <div className="flex gap-5 sm:gap-6">
            <a
              href="https://github.com/nikhilm2478"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaGithub size={28} className="sm:w-[36px] sm:h-[36px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/n-mukherjee/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin size={28} className="sm:w-[36px] sm:h-[36px]" />
            </a>
            <a
              href="/Nikhil_Mukherjee_Resume_BS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 flex items-center gap-2"
            >
              <FaFileAlt size={24} className="sm:w-[30px] sm:h-[30px]" />
              <span className="text-sm sm:text-base">Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Skills Cloud */}
      <div className="mt-10 sm:mt-16 flex flex-wrap justify-center gap-3 sm:gap-6">
        {[
          "Software Engineering",
          "Data Engineering",
          "Product Development",
          "AI",
          "Data Visualization",
          "Business Analysis",
        ].map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.2 }}
            className="bg-blue-400/20 text-blue-300 px-4 py-2 sm:px-6 sm:py-3 rounded-full cursor-pointer shadow hover:shadow-blue-500/50 transition-shadow text-xs sm:text-base"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
