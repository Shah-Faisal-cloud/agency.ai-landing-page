import Title from "./Title"
import assets from "../assets/assets"
import toast from "react-hot-toast"
import { useRef } from "react"

const ContactUs = () => {
    const formRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success("Thank you for your information")
        formRef.current.reset()
    }

    return (
        <section id="contact-us" className="flex flex-col pb-20 sm:pb-40 items-center px-4 gap-7 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white">
            <Title title={'Reach Out To Us'} description={'From strategy to execution, we craft digital solutions that move your business forward.'}/>
            <form className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full" onSubmit={handleSubmit} ref={formRef}>
                <div>
                    <label htmlFor="name" className="mb-2 text-sm font-medium inline-block">Your Name</label>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.person_icon} alt="person icon" />
                        <input type="text" name="name" id="name" placeholder="Enter your name" autoComplete="off" className="w-full p-3 text-sm outline-none" required/>
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="mb-2 text-sm font-medium inline-block">Email Address</label>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.email_icon} alt="person icon" />
                        <input type="email" email="email" id="email" placeholder="Enter your email address" autoComplete="off" className="w-full p-3 text-sm outline-none" required/>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-2 text-sm font-medium inline-block">Email Address</label>
                    <textarea name="message" id="message" placeholder="Enter your message" rows={8} className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300"></textarea>
                </div>
                <button type="submit" className="w-max flex gap-2 bg-primary text-white text-sm py-3 px-10 rounded-full cursor-pointer hover:scale-103 transition-all">
                    Submit <img src={assets.arrow_icon} alt="arrow icon" className="w-4"/>
                </button>
            </form>
        </section>
    )
}

export default ContactUs