"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const PortofolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const items = [
    {
      id: 1,
      color: "from-gray-100 to-gray-200",
      title: "Weather APP",
      desc: "Weather APP with HTML + CSS + JS & API",
      img: "/bridge-01@2x.png",
      link: "https://github.com/BofanBogdan/-Weather-in-JS-2",
    },
    {
      id: 2,
      color: "bg-gray-300",
      title: "FunnyRobot",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "/bridge-01@2x.png",
      link: "https://github.com/BofanBogdan/FunnyRobot",
    },
    {
      id: 3,
      color: "from-gray-100 to-gray-200",
      title: "Advice App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "/bridge-01@2x.png",
      link: "https://github.com/BofanBogdan/Advice-project",
    },
    {
      id: 4,
      color: "bg-gray-300",
      title: "Movie Store",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "/bridge-01@2x.png",
      link: "https://github.com/BofanBogdan/StoreMovie",
    },
    {
      id: 5,
      color: "from-gray-100 to-gray-200",
      title: "TaskManager-with-db",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "/bridge-01@2x.png",
      link: "https://github.com/BofanBogdan/TaskManager-with-db",
    },
    {
      id: 6,
      color: "bg-gray-300",
      title: "Booking.Clone App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "/bridge-01@2x.png",
      link: "https://github.com/BofanBogdan/Booking.Clone",
    },
    {
      id: 7,
      color: "from-gray-100 to-gray-200",
      title: "Tetris-JS ",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "/bridge-01@2x.png",
      link: "https://github.com/BofanBogdan/Tetris-JS",
    },
    {
      id: 8,
      color: "bg-gray-300",
      title: "Netflix-Clone",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "/bridge-01@2x.png",
      link: "https://github.com/BofanBogdan/Netflix-Clone",
    },
    {
      id: 9,
      color: "from-gray-100 to-gray-200",
      title: "Watch List",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "/bridge-01@2x.png",
      link: "https://github.com/BofanBogdan/watch-list",
    },
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gray-300 " />
            <div className="h-screen w-screen flex items-center justify-center bg-gray-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col items-center gap-8 p-8">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt={item.title} fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-black text-white font-semibold m-4 rounded">
                      See on GitHub
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Explore GitHub profile</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="https://github.com/BofanBogdan"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Github
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortofolioPage;
