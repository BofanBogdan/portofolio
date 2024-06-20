"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {



  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <motion.div className="relative lg:h-full lg:w-1/2 w-48 h-48 self-center lg:self-start">
          <Image
            src="/profile-img.jpg"
            alt="profile-photo"
            fill
            className="object-cover rounded-full"
          />
        </motion.div>

        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center mt-8 lg:mt-0 lg:ml-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to my portofolio{" "}
          </h1>
          <p className="md:text-xl">
            description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores cumque, voluptate, quidem ipsa tempora esse corporis
            quisquam suscipit eligendi earum quas perferendis aliquid magnam
            accusamus dolore doloremque nisi odio temporibus?
          </p>
          <div className="w-full flex  items-center justify-center gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Check out my projects
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact me for details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
