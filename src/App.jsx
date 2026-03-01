import {Hero} from "@/sections/Hero"
import { NavBar } from "@/layout/NavBar"
import {About} from "@/sections/About"
import {Projects} from "@/sections/Projects"
import {Experience} from "@/sections/Experience"
import {Testimonials} from "@/sections/Testimonials"
import {Contact} from "@/sections/Contact"


import { LanguageProvider } from "@/contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden">
        <NavBar />

        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App
