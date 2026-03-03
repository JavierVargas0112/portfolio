import { Github, ArrowUpRight } from "lucide-react";
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

// projects data includes both languages for title and description
const rawProjects = [
    {
        title: { fr: "Backend pour systèmes scolaires", en: "Backend for school systems" },
        description: {
          fr: "Conception et implémentation d'un backend Node.js/Express pour gérer les données d'élèves et l'administration d'écoles, déployé en environnement cloud avec MongoDB.",
          en: "Designed and implemented a Node.js/Express backend to manage student data and school administration, deployed to the cloud with MongoDB.",
        },
        image: "Certificate Analiaias.png",
        tags: ["Node.js", "Express", "MongoDB"],
        link: "#",
        github: "https://github.com/JavierVargas0112/ihubbs-backend"
    },
    {
        title: { fr: "Site web d'entreprise & gestion des contacts", en: "Company website & contact management" },
        description: {
          fr: "Développement d'un site React.js pour une entreprise, avec backend Django permettant de stocker et traiter les demandes de contact dans des bases SQL/NoSQL.",
          en: "Developed a React.js website for a company with a Django backend to store and process contact requests using SQL/NoSQL databases.",
        },
        image: "https://via.placeholder.com/400x300",
        tags: ["React", "Django", "PostgreSQL"],
        link: "#",
        github: "https://github.com/JavierVargas0112/nesco-website"
    },
    {
        title: { fr: "Portfolio personnel", en: "Personal portfolio" },
        description: {
          fr: "Ce site web réactif a été créé pour présenter mon parcours, mes compétences et mes projets professionnels.",
          en: "This responsive website was built to showcase my background, skills, and professional projects.",
        },
        image: "https://via.placeholder.com/400x300",
        tags: ["React", "Vite", "Tailwind CSS"],
        link: "#",
        github: "https://github.com/JavierVargas0112/portfolio"
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