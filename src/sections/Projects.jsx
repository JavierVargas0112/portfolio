import { Github, ArrowUpRight } from "lucide-react";
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

// projects data includes both languages for title and description
const rawProjects = [
    {
        title: { fr: "x506 Certificate Analysis", en: "x506 Certificate Analysis" },
        description: {
          fr: "L'outil d'analyse des certificats X.509 est une application Python pour analyser et valider les certificats numériques localement ou à distance sur des connexions réseau. Il offre des interfaces GUI et CLI avec un lanceur unifié pour le mode serveur (partage de certificats), le mode client (analyse à distance) et l'analyse locale. Les fonctionnalités clés incluent la validation automatique, l'évaluation de sécurité, la vérification des algorithmes et la journalisation détaillée avec support multi-thread.",
          en: "The X.509 Certificate Analysis Tool is a Python application for analyzing and validating digital certificates locally or remotely over network connections. It provides GUI and CLI interfaces with a unified launcher for server mode (certificate sharing), client mode (remote analysis), and local analysis. Key features include automatic certificate validation, security assessment, algorithm verification, and detailed logging with multi-threaded support for simultaneous connections.",
        },
        image: "projects/Certificate-Analisis.png",
        tags: ["Python", "Tkinter", "OpenSSL", "Multi-threading", "Network Sockets"],
        link: "https://github.com/JavierVargas0112/x509-certificate-analisis",
        github: "https://github.com/JavierVargas0112/x509-certificate-analisis" 
    },
    {
        title: { fr: "Company Ranker", en: "Company Ranker" },
        description: {
          fr: "Projet axé sur le développement d'une application permettant d'évaluer des entreprises et des produits. Réalisé en équipe à l'aide de la méthodologie agile Scrum. Réalisation du backend dans express.js, d'une base de données MySql et d'un frontend dans React.js.",
          en: "Project focused on developing an application for rating companies and products. Carried out as a team using the agile Scrum methodology. Backend developed in express.js with a MySql database and frontend in React.js.",
        },
        image: "projects/Company-Ranker.png",
        tags: ["React.js", "Express.js", "MySql", "Agile Scrum", "JavaScript", "Node.js", "HTML", "CSS"],
        link: "https://github.com/GustavoR-ivera/Company-Ranker",
        github: "https://github.com/GustavoR-ivera/Company-Ranker"
    },
    {
        title: { fr: "Portfolio personnel", en: "Personal portfolio" },
        description: {
          fr: "Projet réalisé pour la modernisation des référentiels d'informations de la faculté des sciences économiques de l'université nationale de Colombie. Migration des données vers un site web réalisé principalement avec Angular, un backend en Django et une base de données PostgresSQL et MongoDB. Projet remarquable pour sa mise en œuvre formelle de la sécurité des données, la gestion des bases de données et le suivi des réglementations en matière de protection des données.",
          en: "Project carried out to modernize the information repositories of the Faculty of Economic Sciences at the National University of Colombia. Data migration to a website built mainly with Angular, a Django backend, and a PostgresSQL and MongoDB database. Project notable for its formal implementation of data security, database administration, and monitoring of data protection regulations.",
        },
        image: "projects/Repositorio-FCE.png",
        tags: ["Angular", "Django", "PostgreSQL", "MongoDB", "Data Security", "Data Protection"],
        link: "#",
        github: "https://github.com/JavierVargas0112/"
    }
];

export const Projects = () => {
    const { lang } = useLanguage();
    const t = translations.projects;
    const projects = rawProjects.map(p => ({
      ...p,
      title: p.title[lang],
      description: p.description[lang],
    }));
    return (
    <section id="projects" className="py-32 relative overflow-hidden">

        {/* BG Glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

         <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium uppercase animate-fade-in">{t.featured[lang]}</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    {t.tagline[lang]}
                </h2>
            </div>
            <p className="text-muted-foreground animate-fade-im animation-delay-200">
                {t.intro[lang]}
            </p>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div 
                        key={idx} 
                        className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" 
                        style={{animationDelay: `${(idx + 1) * 100}ms`}}
                    >
                        <div className="relative overflow-hidden aspect-video">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 "
                            />
                        </div>
                        <div className=" absolute inset-0
                        bg-gradient-to-t from-card via-card/50
                        to transparent opacity-60"
                        />

                        {/* Overlay Links */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a 
                                href={project.link} 
                                className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                            <a
                                href={project.github} 
                                className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>


                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <ArrowUpRight className="w-5 h-5
                                text-muted-foreground group-hover:text-primary
                                group-hover:translate-x-1
                                group-hover:-translate-y-1 transition-all"
                                />
                            </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx} 
                                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                    >
                                        {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    
                ))}
            </div>
            {/* View All CTA */}

            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBorderButton>
                    {t.viewAll[lang]}
                    <ArrowUpRight className="w-5 h-5" />
                </AnimatedBorderButton>
            </div>

         </div>

    </section>
    );
}