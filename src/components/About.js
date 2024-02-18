import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });
  const animationLeft = useAnimation();
  const animationRight = useAnimation();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      animationLeft.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3
        }
      });
      animationRight.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3
        }
      });
    } else if (!inView) {
      animationLeft.start({
        x: "-100vw"
      });
      animationRight.start({
        x: "100vw"
      });
    }
  }, [inView, animationLeft, animationRight]);

  return (
    <div
      className="about bg-white dark:bg-dark w-full py-6 text-center overflow-hidden"
      id="about"
    >
      <h2 className="subtitle">About Me</h2>
      <div
        ref={ref}
        className="about-wrapper w-full flex md:justify-center md:items-center md:text-left"
      >
        <motion.div
          className="illustration hidden md:block"
          animate={animationLeft}
        >
          <img
            src="https://i.ibb.co/XV8cC0x/Web-Developer.png"
            alt="Web-Developer"
            className="w-96 lg:w-[400px] xl:w-[450px]"
          />
        </motion.div>
        <motion.div
          className="about-details-wrapper flex flex-col justify-center items-center md:items-start mt-2 md:mt-0 p-4 max-w-md mx-auto md:mx-0"
          animate={animationRight}
        >
          <img
            src="https://i.ibb.co/VMbx5By/Hola.png"
            alt="Hola"
            className="animate-wave origin-[30%_30%]"
            style={{ width: '100px', height: 'auto' }}
          />
          <p className="text-dark dark:text-white text-sm font-medium my-2 lg:text-lg">
          How is everyone? My name is Rosyad Shidqi Dikpimmas and you can call me Rosyad. 
          I am 21 years old and am a final year student in Computer Engineering at Diponegoro University, Indonesia.
          I have studied various concepts and practices in software development. I am always ready
          to face new challenges and continue to hone my skills in solving complex problems. Effective communication 
          and solid collaboration are the principles that I adhere to in every project I undertake.
          I hope to continue to grow and contribute to the world of software development. I have explored various 
          projects in software development. During college, I was involved in creating school websites and simple 
          Android applications using various technologies such as Laravel, React Native, Vue, and Kotlin. Thank you for knowing me!

          </p>
          <div className="links mt-12">
            <Link
              to="/full-profile"
              className="text-dark dark:text-white flex justify-center items-center gap-1 transition-all hover:text-blue dark:hover:text-blue-light underline"
            >
              Read More <AiOutlineArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
