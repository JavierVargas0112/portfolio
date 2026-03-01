import { Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

// highlights will be derived from translations so that titles/descriptions can switch language
const iconMap = { Code2 };


export const About = () => {
    const { lang } = useLanguage();
    const t = translations.about;
    const highlights = t.highlights.map((h) => ({
      icon: iconMap[h.icon],
      title: h.title[lang],
      description: h.description[lang],
    }));
    const languageList = t.languages[lang];

    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column  */}
                <div className="space-y-8 ">
                    <div className="animate-fade-in ">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">{t.heading ? t.heading[lang] : "About Me"}</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                      {t.headline[lang]}
                    </h2>
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        {t.paragraphs[lang].map((p, idx) => (
                            <p key={idx}>{p}</p>
                        ))}
                    </div>

                    <div className="space-y-4 animate-fade-in animation-delay-300">
                        <div>
                            <h3 className="text-lg font-semibold">{lang === "fr" ? "Langues" : "Languages"}</h3>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {languageList.map((langStr, i) => (
                                    <li key={i}>{langStr}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border">
                            <p className="text-lg font-medium italic text-foreground">
                                {t.mission[lang]}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Highlights  */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(idx + 1) *100}ms`}}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary"/> 
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        
                    ))}

                </div>

            </div>
        </div>


    </section>);
}