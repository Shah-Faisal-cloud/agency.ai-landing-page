import Title from "./Title"
import { workData } from "../assets/assets"
const OurWork = () => {
    return (
        <section id="our-work" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white">
            <Title title={'Our Latest Work'} description={'From strategy to execution, we craft digital solutions that move your business forward.'}/>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                {workData.map((work, index) => (
                    <div key={index} className="hover:scale-102 transition-all cursor-pointer duration-500">
                        <img src={work.image} alt="An image showcasing a work" />
                        <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
                        <p className="text-sm opacity-60 w-5/6">{work.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurWork