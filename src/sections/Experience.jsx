import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const experiences = [
    {
        period: "Mai 2026 – Août 2026",
        role: { fr: "Assistant-ingénieur — plateforme 5G", en: "Engineering Assistant — 5G Platform" },
        company: "IMT Nord Europe — CERI Systèmes Numériques",
        description: {
          fr: "Déploiement d'un réseau 5G Standalone privé de bout en bout (cœur OpenAirInterface CN5G conteneurisé, station de base nr-softmodem, radio USRP B210). Diagnostic d'une perte de 20 à 65 % des échantillons radio en machine virtuelle, cause isolée au temps réel de l'hyperviseur ; passage en bare metal pour zéro échantillon perdu. Validation par trace du registre 5G-AKA et terminaux commerciaux en n77, 51 Mbit/s applicatifs.",
          en: "Deployed a private end-to-end 5G Standalone network (containerized OpenAirInterface CN5G core, nr-softmodem base station, USRP B210 radio). Diagnosed a 20-65% radio sample loss in a virtual machine, tracing the cause to hypervisor real-time jitter; moved to bare metal for zero sample loss. Validated via 5G-AKA registration traces and commercial terminals on n77, reaching 51 Mbit/s at the application layer.",
        },
        technologies: ["5G Standalone", "OpenAirInterface", "Docker", "Linux", "USRP"],
        current: false,
    },
    {
        period: "Feb 2025 – Jun 2025",
        role: { fr: "Développeur Backend", en: "Backend Developer" },
        company: "IHUBBS Business Solutions",
        description: {
          fr: "Plateforme de suivi scolaire (notes, présences, enseignants) pour 3 écoles et 1 000 élèves, démarrée de zéro et portée seul côté backend dans une équipe de 5. Modèle de données proposé et validé avec le client, avec deux refontes de schéma. Authentification JWT et bcrypt, rôles administrateur et superviseur, import/export CSV et Excel.",
          en: "Built a school tracking platform (grades, attendance, teachers) for 3 schools and 1,000 students, starting from scratch and owning the backend solo within a team of 5. Proposed and validated the data model with the client, through two schema redesigns. JWT and bcrypt authentication, administrator and supervisor roles, CSV and Excel import/export.",
        },
        technologies: ["Node.js", "Express", "MySQL", "JWT", "bcrypt"],
        current: false,
    },
    {
        period: "Fév 2024 – Déc 2024",
        role: { fr: "Développeur Logiciel", en: "Software Developer" },
        company: "Nesco Inversiones",
        description: {
          fr: "Seul développeur du projet, de la maquette à la mise en production. Maquette, design et développement du site vitrine sous React.js avec formulaire de contact en Django, ainsi qu'une application interne de gestion des tâches utilisée par une quinzaine de collaborateurs.",
          en: "Sole developer on the project, from mockup to production. Designed and built the showcase website in React.js with a Django contact form, plus an internal task management app used by about fifteen employees.",
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