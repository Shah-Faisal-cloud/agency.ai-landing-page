import { company_logos } from "../assets/assets";

const TrustedBy = () => {
  return (
    <section className="px-4 flex flex-col items-center sm:px-12 lg:px-24 xl:px-40 gap-y-10 text-gray-700 dark:text-white/80">
      <h3 className="font-semibold capitalize">Trusted by leading companies</h3>
      <div className="flex items-center justify-center flex-wrap gap-10 m-4">
        {company_logos.map((logo, index) => (
            <img key={index} src={logo} alt="Company Logo" className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"/>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
