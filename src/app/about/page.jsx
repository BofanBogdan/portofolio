"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutPage = () => {
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-40 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 ">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML5
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React-Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React-Hooks
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React-Router
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NextJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GitHub
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Agile Web Development
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Supabase
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                FireBase
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next-Auth
              </div>
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              <div className="flex justify-between h-48">
                <div className="w-1/3 ">
                  <div className="cursor-pointer bg-black text-white	 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Junior WebDeveloper
                  </div>
                  <div className="p-3 text-sm italic">
                    description of the job
                  </div>
                  <div className="p-3 text-gray-800 text-sm font-semibold">
                    Apr. 2024 - Present
                  </div>
                  <div className="p-1 rounded bg-cyan-800	text-gray-100	 font0	 text-sm font-semibold w-fit">
                    Kotys
                  </div>
                </div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-black rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-cyan-950	-left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 "></div>
              </div>
              <div className="flex justify-between h-48">
                <div className="w-1/3 "></div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-black rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-cyan-950	-left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 ">
                  <div className="cursor-pointer bg-black text-white	 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Student
                  </div>
                  <div className="p-3 text-sm italic">
                    description of the job
                  </div>
                  <div className="p-3 text-gray-800 text-sm font-semibold">
                    2023 - 2024
                  </div>
                  <div className="p-1 rounded bg-cyan-800	text-gray-100	 font0	 text-sm font-semibold w-fit">
                    SkilBrain Academy
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-48">
                <div className="w-1/3 ">
                  <div className="cursor-pointer bg-black text-white	 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Team Leader
                  </div>
                  <div className="p-3 text-sm italic">Description job</div>
                  <div className="p-3 text-gray-800 text-sm font-semibold">
                    Oct. 2020 - Present
                  </div>
                  <div className="p-1 rounded bg-cyan-800	text-gray-100	 font0	 text-sm font-semibold w-fit">
                    Global Remote Services (YS Group)
                  </div>
                </div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-black rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-cyan-950	-left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
