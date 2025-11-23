import assets from "../assets/assets";

const Footer = ({ theme }) => {
  return (
    <section className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-20 px-4 sm:px-10 lg:px-24 xl:px-40">
        {/* Footer Top Section */}
      <div className="flex justify-between max-lg:flex-col pb-8 lg:items-center gap-10">
        <div className="text-sm text-gray-700 dark:text-gray-400">
          <a href="#">
            <img
              src={theme === "dark" ? assets.logo_dark : assets.logo}
              alt="brand logo"
              className="w-32 sm:w-40"
            />
          </a>
          <p className="mt-5 max-w-md">From strategy to execution, we craft digital solutions that move your business forward.</p>
          <ul className="mt-5 flex gap-8">
            <li className="hover:text-primary transition-colors duration-300 ease-linear"><a href="#hero" >Home</a></li>
            <li className="hover:text-primary transition-colors duration-300 ease-linear"><a href="#services">Services</a></li>
            <li className="hover:text-primary transition-colors duration-300 ease-linear"><a href="#our-work">Our Work</a></li>
            <li className="hover:text-primary transition-colors duration-300 ease-linear"><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className="text-gray-600 dark:text-gray-400">
            <h4 className="font-semibold">Subscribe to our newsletter</h4>
            <p className="text-sm mt-2 mb-6">The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className="flex gap-2 text-sm">
                <input type="email" placeholder="Enter your email" className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"/>
                <button className="bg-primary cursor-pointer hover:scale-102  text-white rounded px-6">Subscribe</button>
            </div>
        </div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600 "/>
      <div className="flex justify-between pb-6 text-sm text-gray-500 max-sm:justify-center max-sm:gap-4 flex-wrap  pt-8">
        <p className="">Copyright 2025 &copy; shah-faisal-cloud - All Rights Reserved.</p>
        <div className="flex items-center justify-between gap-4">
            <a href="#"><img src={assets.facebook_icon} alt="facebook_icon" /></a>
            <a href="#"><img src={assets.twitter_icon} alt="twitter_icon" /></a>
            <a href="#"><img src={assets.instagram_icon} alt="instagram_icon" /></a>
            <a href="#"><img src={assets.linkedin_icon} alt="linkedin_icon" /></a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
