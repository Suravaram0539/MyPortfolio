import React, { lazy } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Card =lazy(() => import("./Card"));

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="about">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] w-full leading-[30px]'
      >
        
        As a Software Developer at Wipro Technologies, I specialize in building scalable and efficient applications using Java, Spring Boot, <br />
        and Microservices.My expertise lies in developing RESTful APIs, optimizing database performance, and implementing caching solutions <br />
        to improve system efficiency. I am a strong advocate of Agile methodologies and test-driven development, ensuring robust <br />
        and maintainable code. With a keen eye for problem-solving and a commitment to continuous learning, I am dedicated to delivering high-quality software solutions that drive business success.<br />
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <Card key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
