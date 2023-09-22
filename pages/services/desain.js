// components
import Image from "next/image";
import Bulb from "../../components/Bulb";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Desain = () => {
  return (
    <div className="h-full bg-primary/80 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[40vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2 xl:mt-0 russo-one">
              Design<span className="text-accent">.</span>
            </motion.h2>
            <motion.p 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="mb-4 max-w-[400x] mx-auto lg:mx-0 text-white/70">
            Inspiring and engaging web design is the key to tantalizing your visitors, keeping them mesmerized by your message, and bringing them deeper into your world. We are experts in creating web experiences that not only amaze but also convert visitors into loyal customers. Trust us to take your brand to the next level with a unique and evocative web design. Let's create a website that not only looks stunning but also tells your story effectively to the world.
            </motion.p>
            <div className="flex flex-row gap-4">
            <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="btn rounded-full border max-w-[170px] mx-auto xl:mx-0 py-8 transition-all duration-150 flex items-center justify-center overflow-hidden hover:border-accent group"
          >
            <Link href='/services/branding' className="flex flex-row items-center m-8">
            <BsArrowLeft />
            &nbsp;Branding
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="btn rounded-full border max-w-[190px] mx-auto xl:mx-0 py-8 transition-all duration-150 flex items-center justify-center overflow-hidden hover:border-accent group"
          >
            <Link href='/services/development' className="flex flex-row items-center m-8">
              Development &nbsp;
              <BsArrowRight />
            </Link>
          </motion.div>
            </div>
            
          </div>
          {/* images */}
          <motion.div 
          variants={fadeIn('up', 0.5)}
          initial= 'hidden'
          animate= 'show'
          exit= 'hidden'
          transition={{duration:1, ease: 'easeInOut'}}
          className="w-full h-full max-w-[850px] max-h-[700px] absolute -bottom-32 lg:bottom-0 lg:left-[42%]">
            <div className="hidden xl:flex xl:max-w-none">
              <Image 
              src={'/desain-2.png'}
              width={'737'}
              height={'678'}
              alt=""
              className="translate-z-0 w-full h-full"
              />
            </div>
        </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Desain;
