import { useState, useEffect } from "react";
import assets from "../assets/assets"

const Header = ({ theme, setTheme }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    useEffect(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', theme)
    }, [theme])

  return (
    <header className="flex justify-between items-center px-4 md:px-16 lg:px-24 xl:px-40 sticky top-0 py-4 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900">
      <a href="#">
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          alt="brand logo"
          className="w-32 sm:w-40"
        />
      </a>
      <nav className={`absolute right-8 max-md:bg-gray-100/95 max-md:dark:bg-gray-800/90 max-md:rounded-2xl backdrop-blur-xl max-md:px-12 max-md:py-10 max-md:shadow-[0_4px_30px_rgba(0,0,0,0.1)] md:opacity-100 md:pointer-events-auto -bottom-60 md:static ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'max-md:opacity-0 max-md:pointer-events-none'}`}>
        <ul className="flex gap-5 md:text-sm text-gray-700 dark:text-white max-md:flex-col ">
          <li onClick={() => setIsSidebarOpen(false)}>
            <a href="#" className="bb-hover">
              Home
            </a>
          </li>
          <li onClick={() => setIsSidebarOpen(false)}>
            <a href="#services" className="bb-hover">
              Services
            </a>
          </li>
          <li onClick={() => setIsSidebarOpen(false)}>
            <a href="#our_work" className="bb-hover">
              Our Work
            </a>
          </li>
          <li onClick={() => setIsSidebarOpen(false)}>
            <a href="#contact" className="bb-hover">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-x-4 ">
        <button
          className="border rounded-full w-8 h-8 md:w-10 md:h-10 flex justify-center items-center p-1 border-gray-500 cursor-pointer"
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          <img
            src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
            alt="theme change"
          />
        </button>
        <button className="hidden md:flex gap-2 bg-primary px-6  text-sm rounded-full items-center text-white cursor-pointer hover:scale-105 transition-all duration-300 ease-linear">
          Connect
          <img src={assets.arrow_icon} alt="Arrow Icon" width={14} />
        </button>
        <button className="md:hidden cursor-pointer" onClick={() => setIsSidebarOpen(prev => !prev)}>
          <img
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            alt="Menu Icon"
            className="size-6"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
