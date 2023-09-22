// components
import Image from "next/image";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Development = () => {
  return (
    <div className="h-full bg-primary/80 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[60vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2 xl:mt-0 russo-one">
              Development<span className="text-accent">.</span>
            </motion.h2>
            <motion.p 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="mb-4 max-w-[400x] mx-auto lg:mx-0 text-white/70">
            Web development is the very foundation of any successful online presence. We are a team of expert web developers ready to turn your ideas into a dynamic and perfectly functional digital reality. With in-depth knowledge and extensive experience, we will build a website that not only stands out, but also supports your business growth. Join us to start the journey to unlimited online success.
            </motion.p>
            <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="btn rounded-full border max-w-[170px] mx-auto xl:mx-0 py-8 transition-all duration-150 flex items-center justify-center overflow-hidden hover:border-accent group mt-4"
          >
            <Link href='/services/desain' className="flex flex-row items-center">
            <BsArrowLeft />
            &nbsp;Desain
            </Link>
            
          </motion.div>
          </div>

          {/* images */}
          <motion.div 
          variants={fadeIn('up', 0.5)}
          initial= 'hidden'
          animate= 'show'
          exit= 'hidden'
          transition={{duration:1, ease: 'easeInOut'}}
          className="w-full h-full max-w-[870px] max-h-[870px] absolute -bottom-32 lg:top-12 lg:left-[50%] mix-blend-color-dodge">
            <div className="hidden xl:flex xl:max-w-none">
              <Image 
              src={'/web-4.jpeg'}
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

export default Development;
