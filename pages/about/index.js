import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiCanva,
  SiAdobephotoshop,
} from "react-icons/si";


// about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3Alt />,
          <FaJs />,
          <FaReact />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobephotoshop />, <SiCanva />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Remake PT INTI - Company Profile Website',
        stage: '2022',
      },
      {
        title: 'Develop PT INTI - Marketing & Sales Information System',
        stage: '2022',
      },
      {
        title: 'Developing a Creative Media Website Nomena',
        stage: '2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counters
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/80 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div 
      variants= {fadeIn('right', 0.2)}
      initial= 'hidden'
      animate= 'show'
      exit= 'hidden'
      className="hidden xl:flex absolute top-13 -left-[380px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <motion.div 
        variants= {fadeIn('down', 0.2)}
        initial= 'hidden'
        animate= 'show'
        exit= 'hidden'
        className="flex-1 flex-col justify-center">
          <h2 className="h2 mt-6 russo-one">
            Description of <span className="text-[#F6C90E]">Myself</span>
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12  px-2 xl:px-0 text-white/90">
            I am fresh graduate from Telkom University majoring in Computer engineering graduating in 2023. Currently i am exploring several programming language and design mockup tools. I also have my career Interest as a Full-Stack Developer and Website Design
          </p>
          {/* Counters */}
          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after-w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-[#F6C90E] mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Year of Experience</div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after-w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-[#F6C90E] mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Clients</div>
              </div>
              {/* project */}
              <div className="relative flex-1 after-w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-[#F6C90E] mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Project</div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* info */}
        <motion.div 
        variants= {fadeIn('down', 0.4)}
        initial= 'hidden'
        animate= 'show'
        exit= 'hidden'
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className=" flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 mt-20">
            {aboutData.map((item, itemIndex) => {
              return (
                <div 
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/90">
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">{icon}</div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <a
            href="/my-cv.pdf"  // Ganti dengan URL sebenarnya ke file PDF Anda
            className="btn rounded-full border max-w-[170px] mx-auto xl:mx-0 py-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mt-4"
            download  // Atribut download untuk menandakan sebagai tautan unduhan
          >
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              Check Out My CV
            </span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;