import assets from "../assets/assets";

const Hero = ( {theme}) => {
  return (
    <section
      id="hero"
      className="flex text-center flex-col justify-center items-center gap-y-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white"
    >
      <div className="flex items-center border pr-4 border-gray-300 p-1.5 rounded-full gap-x-2">
        <img
          src={assets.group_profile}
          alt="A group profile image"
          className="w-20"
        />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-24 max-w-5xl">
        Turning imagination into{" "}
        <span className="bg-gradient-to-r  from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact
      </h1>
      <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">Creating meaningful connections and turning big ideas into interactive digital experiences.</p>
      <div className="relative">
        <img src={assets.hero_img} alt="Hero image" className="max-w-6xl w-full"/>
        <img src={assets.bgImage1} alt="background image" className="absolute -top-40 -right-40 sm:-top-100 -z-10 sm:-right-70 dark:hidden"/>
      </div>
    </section>
  );
};

export default Hero;
