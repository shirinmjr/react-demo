import { Link } from "react-scroll";
import { Box } from "@mui/material";
//import Image from "next/image";

export default function NavBar() {
  const navBarData = [
    {
      title: "Projects",
    },
    {
      title: "Resume",
    },
    {
      title: "About Me",
    },
  ];

  return (
    <header className="fixed z-50 w-full top-0 left-0 bg-white text-black font-source-sans-3 shadow-md py-[10px] px-[10px] min-h-[50px]">
      <div className="flex flex-wrap items-center justify-around relative bg-white text-black">
        <a href="/" className="block">
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* <Image
              src={AtlasLogo}
              className="atlas-logo"
              alt="Atlas Logo"
              width={170}
              height={80}
              priority
            /> */}
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            {/* <Image
              src={LogoOnly}
              className="atlas-logo"
              alt="Atlas Logo"
              width={36}
              height={36}
              priority
            /> */}
          </Box>
        </a>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <ul className="pl-[10px]">
            <Box sx={{ display: { sm: "none", md: "block flex " } }}>
              {navBarData.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      //   href={item.href}
                      //   smooth={true}
                      //   duration={800}
                      //   onClick={() => {
                      //     scrollToSection(item.ref);
                      //  }}
                      className={
                        "text-gray-800 lg:hover:text-[#007bff] block py-[10px] px-[20px] text-[16px] leading-[24px]"
                      }
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </Box>
          </ul>
        </Box>
      </div>
    </header>
  );
}
