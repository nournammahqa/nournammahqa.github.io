import { homePage } from "@db";
import { IoLogoLinkedin, IoMailOpen } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container mx-auto min-h-[60px] h-[60px] flex items-center justify-between">
      <div className="uppercase h-[60px] flex items-center gap-2 tracking-[0.24em] text-[11px] text-white/70">
        <span className="inline-block w-2 h-2 rounded-full bg-[#f7b543] shadow-[0_0_16px_rgba(247,181,67,0.5)]"></span>
        <span className="text-white text-[28px] font-semibold tracking-[-0.06em] normal-case">
          Nour
        </span>
      </div>
      <div className="flex items-center gap-2 md:gap-3 z-10">
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${homePage.email}`}
          target="_blank"
          rel="noreferrer"
          className="text-white/70 h-[44px] w-[44px] flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:text-[#f7b543] hover:border-[#f7b543]/40 hover:bg-[#f7b543]/10 transition-all duration-300 cursor-pointer text-[18px]"
        >
          <IoMailOpen />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={homePage.linkedIn}
          className="text-white/70 h-[44px] w-[44px] flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:text-[#6ad5cb] hover:border-[#6ad5cb]/40 hover:bg-[#6ad5cb]/10 transition-all duration-300 cursor-pointer text-[18px]"
        >
          <IoLogoLinkedin />
        </a>
        <a
          title="Download QA CV"
          href={homePage.cv}
          download="Nour_CV.pdf"
          className="text-white/80 h-[44px] px-4 md:px-5 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:text-[#08111d] hover:border-[#f7b543]/30 hover:bg-[#f7b543] hover:shadow-[0_14px_28px_rgba(247,181,67,0.22)] transition-all duration-300 cursor-pointer text-[14px] font-medium"
        >
          <FaFileDownload />
          <span className="hidden md:inline">QA CV</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
