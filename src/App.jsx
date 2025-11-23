import { useState } from "react"
import { Toaster } from "react-hot-toast"
import Header from "./components/Header"
import Hero from "./components/Hero"
import TrustedBy from "./components/Trustedby"
import Services from "./components/Services"
import OurWork from "./components/OurWork"
import Team from "./components/team"
import ContactUs from "./components/ContactUs"
import Footer from "./components/footer"

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <>
      <Header theme={theme} setTheme={setTheme}/>
      <Toaster />
      <main className={theme === 'dark' ? 'bg-gray-950' : 'bg-transparent'}>
        <Hero theme={theme}/>
        <TrustedBy />
        <Services />
        <OurWork />
        <Team />
        <ContactUs />
      </main>
      <Footer theme={theme}/>
    </>
  )
}

export default App