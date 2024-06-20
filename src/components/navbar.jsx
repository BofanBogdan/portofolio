"use client";
import NavLink from "./navLink";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portofolio", title: "Portofolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 lg:w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center lg:justify-center">
        <Link
          href="/"
          className="text-sm bg-cyan-950 rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white w-full mr-1">Bogdan B.</span>
          <span className="w-full h-8 rounded bg-white text-black flex items-center justify-center">
            WebDeveloper
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 lg:w-1/3 justify-end">
        <Link href="/">
          <Image
            src="/github-color-svgrepo-com.svg"
            alt="github-logo"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/">
          <Image
            src="/linkedin-color-svgrepo-com.svg"
            alt="linkedin-logo"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/">
          <Image
            src="/facebook-svgrepo-com.svg"
            alt="facebook-logo"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/">
          <Image
            src="/Instagram-Logo.wine.svg"
            alt="Instagram-logo"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/">
          <Image
            src="/new-logo-gmail-svgrepo-com.svg"
            alt="gmail-logo"
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* Responsive menu */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black
           rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black
           rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black
           rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            // style={{ overflow: "hidden" }}
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
