<meta name="viewport" content="width=device-width, initial-scale=1.0" />

// components
import Image from "next/image";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Branding = () => {
  return (
    <div className="h-full bg-primary/80 py-36 flex items-center">
      <Circles />
      <div className="scroll-container container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[60vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2 xl:mt-0 russo-one mt-12">
              Branding<span className="text-accent">.</span>
            </motion.h2>
            <motion.p 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="mb-4 max-w-[400x] mx-auto lg:mx-0 text-white/70">
            Progress never stops, and in this ever-changing world, you need a strong digital identity to rise to the challenge and stand out from the crowd. Digital branding is the key to building a deep connection with your audience, creating a memorable impression, and winning the hearts and minds of customers. Let's create an unforgettable digital footprint with us, and together, we will shape a bright future for your brand.
            </motion.p>
            <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="btn rounded-full border max-w-[170px] mx-auto xl:mx-0 py-8 transition-all duration-150 flex items-center justify-center overflow-hidden hover:border-accent group mt-4"
          >
            <Link href='/services/desain' className="flex flex-row items-center">
              Desain &nbsp;
              <BsArrowRight />
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
          className="w-full h-full max-w-[650px] max-h-[650px] absolute -bottom-32 lg:bottom-0 lg:right-[0%]">
            <div className="hidden xl:flex xl:max-w-none">
              <Image 
              src={'/branding.png'}
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

export default Branding;
