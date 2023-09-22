// Links
import Link from "next/link";

// Icons
import { 
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine,
  RiMailLine,
 } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.youtube.com/@KhuzainilArdiansyah/featured'} className="hover:text-[#F6C90E] transition-all duration-300">
    <RiYoutubeLine />
    </Link>
    <Link href={'https://instagram.com/khuzen.a?igshid=NGVhN2U2NjQ0Yg=='} className="hover:text-[#F6C90E] transition-all duration-300">
    <RiInstagramLine />
    </Link>
    <Link href={'https://www.facebook.com/khuzainil.ardiansyah?mibextid=ZbWKwL'} className="hover:text-[#F6C90E] transition-all duration-300">
    <RiFacebookLine />
    </Link>
    <Link href={'https://wa.me/6285298421674'} className="hover:text-[#F6C90E] transition-all duration-300">
    <RiWhatsappLine />
    </Link>
    <Link href={'mailto:khuzen.ard@gmail.com'} className="hover:text-[#F6C90E] transition-all duration-300">
    <RiMailLine />
    </Link>
  </div>
  );
};

export default Socials;
