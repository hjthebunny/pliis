"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Home = () => {
  const controls = useAnimation();
  const fadeControls = useAnimation();
  const { ref, inView } = useInView();
  const { ref: fadeRef, inView: fadeInView } = useInView();
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    setIsScrolling(true);
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
        opacity: 1 - (scrollY / 1000) * 5,
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
    <main className="h-screen w-screen ">
      <div className="w-screen sticky top-0 h-screen ">
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ opacity: 1, scale: 1 }}
          className="w-screen h-screen flex justify-center items-center"
        >
          <div className="relative w-1/2 sm:w-1/3 aspect-square ">
            <Image
              src="/lp.png"
              fill
              alt="picture of lp"
              className={isScrolling ? "animate-spin" : ""}
            />
          </div>
        </motion.div>
        <motion.div
          ref={fadeRef}
          animate={fadeControls}
          initial={{ opacity: 0, scale: 0.5 }}
          className="h-screen w-screen flex flex-col gap-5 justify-center items-center pb-40  "
        >
          <Image
            width={200}
            height={200}
            src="/logo.png"
            alt="logo"
            className=" "
          />
          <div className="block border border-[#B77FFF] p-3 md:w-1/3 w-2/3 rounded-full bg-[#F2EFFF]">
            <input
              type="text"
              className=" w-full  bg-transparent focus:outline-none"
              placeholder="키워드를 입력해 플레이리스트를 검색해보세요"
            ></input>
          </div>
        </motion.div>
      </div>
    </main>
  );
};
export default Home;
