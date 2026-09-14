import {Hero} from "@/sections/Hero"
import { NavBar } from "@/layout/NavBar"
import {About} from "@/sections/About"
import {Skills} from "@/sections/Skills"
import {Experience} from "@/sections/Experience"
import {Projects} from "@/sections/Projects"
import {OtherProjects} from "@/sections/OtherProjects"
import {Certifications} from "@/sections/Certifications"
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
          <Skills />
          <Experience />
          <Projects />
          <OtherProjects />
          <Certifications />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App
