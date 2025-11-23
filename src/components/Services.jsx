import { useState, useRef } from "react"
import assets, { servicesData } from "../assets/assets"
import Title from "./Title"

const Services = () => {

    return (
        <section id="services" className="flex flex-col items-center gap-y-7 relative px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white">
            <img src={assets.bgImage2} alt="background image" className="absolute -top-110 -left-70 -z-10 dark:hidden"/>
            <Title title='How Can We Help?' description='From strategy to execution, we craft digital solutions that move your business forward.'/>
            <div className="flex flex-col md:grid grid-cols-2">
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </section>
    )
}

const ServiceCard = ({ service }) => {
    
    const [position, setPosition] = useState({x : 0, y : 0})
    const [isVisible, setIsVisible] = useState(false)

    const divRef = useRef(null)

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({x: e.clientX - bounds.left, y: e.clientY - bounds.top})
    }

    return (
        <div className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} ref={divRef} onMouseMove={handleMouseMove}>
            <div className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to bg-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${isVisible ? 'opacity-70' : 'opacity-0'}`} style={{top: position.y - 150, left:position.x - 150}} />
            <div className="flex items-center gap-10 hover:p-7.5 p-8 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative">
                <div className="border-gray-100 dark:border-gray-700 border-8 rounded-full">
                    <img src={service.icon} alt="Icon" />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold ">{service.title}</h3>
                    <p className="text-sm mt-2">{service.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Services