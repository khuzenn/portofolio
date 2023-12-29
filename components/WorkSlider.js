// import required modul
import { Pagination } from "swiper";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import 'swiper/css';
import 'swiper/css/free-mode';
import "swiper/css/pagination";

// icons
import { BsArrowRight, BsGithub } from "react-icons/bs";

// image
import Image from "next/image";
import Link from "next/link";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/prjct1.png',
          href: "https://github.com/khuzenn/tugas-akhir.git",
        },
        {
          title: 'title',
          path: '/prjct-2.png',
          href: "https://github.com/khuzenn/react-native-vapebuilder.git",
        },
        {
          title: 'title',
          path: '/prjct-4.png',
          href: "https://github.com/khuzenn/noumena-id.git",
        },
        {
          title: 'title',
          path: '/prjct-3.png',
          href: "https://www.figma.com/file/9bw5698ynuUfEuOlkGfLef/Untitled?type=design&mode=design&t=8Ga8FGMzyetmv8Yv-1",
        },
      ],
    },
    {
      images: [ 
        {
          title: 'title',
          path: '/prjct-2.png',
          href: "https://github.com/khuzenn/portofolio.git",
        },
        {
          title: 'title',
          path: '/prjct1.png',
          href: "https://github.com/khuzenn/portofolio.git",
        },
        {
          title: 'title',
          path: '/prjct-3.png',
          href: "https://github.com/khuzenn/portofolio.git",
        },
        {
          title: 'title',
          path: '/prjct-4.png',
          href: "https://github.com/khuzenn/portofolio.git",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
    spaceBetween={10}
    pagination= {{
      clickable: true,
    }}
    modules={[Pagination]}
    className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((images, index) => {
                return(
                  <div 
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* images */}
                      <Image src={images.path} width={500} height={300} alt='' />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F6C90E] to-[#303841] opacity-0 group-hover:opacity-80 tranition-all duration-700">
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <Link href={images.href} target="_blank" rel="noopener noreferrer">
                          <div className="flex items-center ml-6 gap-x-2 text-[13px] text-black russo-one">
                            {/* title 1 */}
                            <div className="delay-100">Live</div>
                            {/* title 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              Project
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                          </Link>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
