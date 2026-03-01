import { AnimatedBorderButton } from "../components/AnimatedBorderButton"
import { Button } from "../components/Button"
import { ArrowRight, Download, Github, Linkedin, ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/translations"

const skills = [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Django",
    "Springboot",
    "Python",
    "Matlab",
    "Figma",
    "Git",

]
export const Hero = () => {
    const { lang } = useLanguage();
    const t = translations.hero;

    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0">
            <img src="/bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_,i) => (
                <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60" style={{
                    backgroundColor: "#20B2A6",
                    left: `${Math.random()* 100}%`,
                    top:  `${Math.random()* 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`
                }}/>
            ))}
        </div>

        {/* content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left column - Text Content  */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                {t.role[lang]}
                        </span>
                    </div>

                    {/* HeadLine */}
                    <div className="space-y-4 ">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            {t.headline[lang]}
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            {t.summary[lang]}
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            {t.ctaContact[lang]} <ArrowRight className="w-5 h-5"/>
                        </Button>
                        <a href="/CV Javier Santiago Vargas Parra (Fr).pdf" target="_blank" rel="noopener noreferrer">
                            <AnimatedBorderButton>
                                <Download/>
                                {t.ctaDownload[lang]}
                            </AnimatedBorderButton>
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">{t.follow[lang]} </span>
                        {[
                        {icon: Github, href: "#"},
                        {icon: Linkedin, href: "#"},
                        
                        ].map((social, idx) => (
                            <a 
                                key={idx}
                                href={social.href} 
                                className="p-2 rounded-full glass  hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                {<social.icon className="w-5 h-5"/>}
                            </a>
                        ))}
                        
                    </div>
                </div>

                {/* Right Column - Profile Image*/}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* profile image  */}
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-0
                        rounded-3xl bg-gradient-to-br
                        to-primary/10 blur-2xl animate-pulse"
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="/Me.png" alt="Javier Vargas" className="w-full aspect-[4/5] object-cover rounded-2xl"/>
                            {/* Floatin Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-sm font-medium"> {t.available[lang]}</span>
                                </div>
                            </div>
                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animation-delay-500">
                                <div className="text-2xl font-bold text-primary">M1</div>
                                <div className="text-xs text-muted-foreground">Étudiant</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Skills */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">
                    {t.skillsHeading[lang]}
                </p>
                <div className="relative overflow-hidden ">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="flex-shrink-0 px-8 py-4"> 
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">{t.scroll[lang]}</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
    )
}