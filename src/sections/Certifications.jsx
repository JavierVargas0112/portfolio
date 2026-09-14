import { Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const certifications = [
    {
        title: { fr: "Spécialisation en science des données", en: "Data Science Specialization", es: "Especialización en ciencia de datos" },
        institution: "Universidad de los Andes",
    },
    {
        title: {
          fr: "Programmation, approfondissement applications Web (800 h)",
          en: "Programming, Advanced Web Applications (800 h)",
          es: "Programación, profundización en aplicaciones web (800 h)",
        },
        institution: "Universidad Sergio Arboleda",
    },
];

export const Certifications = () => {
    const { lang } = useLanguage();

    return (
    <section id="certifications" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    {{ fr: "Certifications", en: "Certifications", es: "Certificaciones" }[lang]}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    {{ fr: "Formation continue.", en: "Continuous learning.", es: "Formación continua." }[lang]}
                </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {certifications.map((cert, idx) => (
                    <div
                        key={idx}
                        className="glass p-6 rounded-2xl animate-fade-in flex items-start gap-4"
                        style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Award className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-base font-semibold">{cert.title[lang]}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{cert.institution}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
}
