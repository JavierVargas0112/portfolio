import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const experiences = [
    {
        period: "Feb 2025 – Jun 2025",
        role: { fr: "Développeur Backend", en: "Backend Developer" },
        company: "IHUBBS Business Solutions",
        description: {
          fr: "Développement backend de systèmes informatiques pour des écoles en utilisant Node.js et Express.",
          en: "Backend development of school systems using Node.js and Express.",
        },
        technologies: ["Node.js", "Express", "MongoDB", "SQL"],
        current: false,
    },
    {
        period: "Sept 2024 – Déc 2024",
        role: { fr: "Développeur Logiciel", en: "Software Developer" },
        company: "Nesco inversiones",
        description: {
          fr: "Administration de bases de données SQL et NoSQL, développement et déploiement d'un site web d'entreprise avec React.js, et gestion des demandes de contact via Django.",
          en: "Administered SQL/NoSQL databases, developed and deployed a company website with React.js, and managed contact requests with Django.",
        },
        technologies: ["React", "Django", "PostgreSQL", "MongoDB"],
        current: false,
    },
    {
        period: "Sept 2025 – Présent",
        role: { fr: "Étudiant en Master", en: "Master Student" },
        company: "IMT Nord Europe",
        description: {
          fr: "Master Systèmes Intelligents Sécurisés et Communicants (double diplôme avec l'Universidad Nacional de Colombia).",
          en: "Master in Secure and Intelligent Systems (double degree with Universidad Nacional de Colombia).",
        },
        technologies: ["Python", "C++", "SCRUM"],
        current: true,
    },
    {
        period: "Jan 2021 – Présent",
        role: { fr: "Étudiant en Ingénierie des systèmes et informatique", en: "Systems and Computer Engineering Student" },
        company: "Universidad Nacional de Colombia",
        description: {
          fr: "Cours en ingénierie des systèmes et informatique avec projets en programmation et bases de données.",
          en: "Courses in systems and computer engineering with programming and database projects.",
        },
        technologies: ["Java", "C++", "Matlab"],
        current: false,
    }
];


export const Experience = () => {
    const { lang } = useLanguage();
    const t = translations.experience;
    const displayExperiences = experiences.map((exp) => ({
      ...exp,
      role: typeof exp.role === "object" ? exp.role[lang] : exp.role,
      description: typeof exp.description === "object" ? exp.description[lang] : exp.description,
    }));
    return (
    <section
        id="experience"
        className="py-32 relative overflow-hidden"
    >
        <div className="absolute top-1/2 left-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" 
        />
        
        <div className="container mx-auto px-6 relative z-10">

            {/* Section Header */}
            <div className="max-w-3xl mb-16">
                <span 
                className="text-secondary-foreground text-sm 
                font-medium tracking-wider uppercase animate-fade-in"
                >
                    Parcours professionnel
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold 
                  mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
                >
                    {t.tagline[lang]}
                </h2>

                <p
                    className="text-muted-foreground 
                    animate-fade-in animation-delay-200"
                >
                    {t.description[lang]}
                </p>

            </div>

            {/* Timeline */}
            <div className="relative" >
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
                
                {/* Experience Items */}
                <div className="space-y-12">
                    {displayExperiences.map((exp, idx) => (
                        <div 
                            key={idx} 
                            className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) *150}ms`}}
                        >
                            {/* timeline */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" >
                                {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
                            </div>

                            {/* content */}
                            <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}` } >
                                <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 `}>
                                    <span className="text-sm text-primary font-medium ">{exp.period}</span>
                                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                    <p className="text-muted-foreground">{exp.company}</p>
                                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                                        {exp.technologies.map((tech, techIdx) => (
                                            <span className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground" key={techIdx}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </section>
)
}