"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiSolidRightArrow } from "react-icons/bi";
import SearchBar from "./ui/searchBar";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  const controls = useAnimation();
  const fadeControls = useAnimation();
  const { ref, inView } = useInView();
  const { ref: fadeRef, inView: fadeInView } = useInView();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1 - scrollY / 5000,
        scale: 1 - scrollY / 2000,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  }, [controls, inView, scrollY]);

  useEffect(() => {
    if (fadeInView) {
      fadeControls.start({
        opacity: Math.min(1, scrollY / 1000),
        scale: Math.min(1, 0.5 + scrollY / 1000),
        transition: { duration: 0.1, ease: "easeOut" },
      });
    }
  }, [fadeControls, fadeInView, scrollY]);

  return (
    <main className="h-screen w-screen sticky top-0 ">
      <div className="w-screen h-screen flex justify-center items-center">
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ opacity: 1, scale: 1 }}
          className="relative w-1/2 sm:w-1/3 aspect-square "
        >
          <Image
            src="/lp.png"
            fill
            alt="picture of lp"
            className={"animate-spin h-auto w-auto"}
          />
        </motion.div>
      </div>
      <motion.div
        ref={fadeRef}
        animate={fadeControls}
        initial={{ opacity: 0, scale: 0.5 }}
        className="h-screen w-screen flex flex-col gap-5 justify-center items-center pb-40 scroll-smooth "
      >
        <Image
          width={200}
          height={200}
          src="/logo.png"
          alt="logo"
          className=" "
        />
        <SearchBar />
        <button
          className="bg-[#9039FE] p-[10px] mt-[40px] rounded-full text-white flex justify-center items-center gap-2 hover:scale-125 hover:bg-[#7406FF] tranform duration-200 ease-out"
          onClick={() => router.push("/search")}
        >
          <p>find my playlist !</p>
          <BiSolidRightArrow />
        </button>
      </motion.div>
    </main>
  );
};
export default Home;
