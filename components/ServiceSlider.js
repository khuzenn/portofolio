// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modul
import { FreeMode, Pagination } from "swiper";

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    link: '/services/branding',
    description: 'With strong branding in your web design, you will generate memorable experiences for visitors, and create ongoing customer loyalty.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    link: '/services/desain',
    description: 'Invest in an attractive and functional web design to ensure that your business remains relevant and attractive to online customers.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    link: '/services/development',
    description: 'With technology constantly evolving, a well-designed website is the best tool to reach out to clients and increase your competitive edge.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

    }}
    freeMode= {true}
    pagination= {{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <a href= {item.link}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
            </a>
            
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default ServiceSlider;
