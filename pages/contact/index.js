// components
import Circles from "/components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";



const Contact = () => {
  return (
    <div className="h-full bg-primary/80">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h2 text-center mb-12 russo-one">
            <span className="text-accent">Contact</span> Me.
          </motion.h2>
          {/* form */}
          <motion.form 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="flex-1 flex flex-col gap-6 w-full mx-auto">
            {/* group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Name" className="input" />
              <input type="text" placeholder="Email" className="input" />
            </div>
            <input type="text" placeholder="Subject" className="input" />
            <textarea placeholder="Message" className="textarea"></textarea>
            <a 
            href="mailto:khuzen.ard@gmail.com"
            className="btn rounded-full border max-w-[170px] py-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-tranlate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s Talk
              </span>
              <BsArrowRight className="-trasnlate-y-[120%] opacity-0 group-hover:flex group-hover:-traslate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </a>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
