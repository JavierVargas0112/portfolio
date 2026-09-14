import { Github, ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

// projects data includes both languages for title and description
const rawProjects = [
    {
        title: { fr: "x506 Certificate Analysis", en: "x506 Certificate Analysis", es: "x506 Certificate Analysis" },
        description: {
          fr: "L'outil d'analyse des certificats X.509 est une application Python pour analyser et valider les certificats numériques localement ou à distance sur des connexions réseau. Il offre des interfaces GUI et CLI avec un lanceur unifié pour le mode serveur (partage de certificats), le mode client (analyse à distance) et l'analyse locale. Les fonctionnalités clés incluent la validation automatique, l'évaluation de sécurité, la vérification des algorithmes et la journalisation détaillée avec support multi-thread.",
          en: "The X.509 Certificate Analysis Tool is a Python application for analyzing and validating digital certificates locally or remotely over network connections. It provides GUI and CLI interfaces with a unified launcher for server mode (certificate sharing), client mode (remote analysis), and local analysis. Key features include automatic certificate validation, security assessment, algorithm verification, and detailed logging with multi-threaded support for simultaneous connections.",
          es: "La herramienta de análisis de certificados X.509 es una aplicación Python para analizar y validar certificados digitales de forma local o remota sobre conexiones de red. Ofrece interfaces GUI y CLI con un lanzador unificado para modo servidor (compartición de certificados), modo cliente (análisis remoto) y análisis local. Sus funciones clave incluyen validación automática, evaluación de seguridad, verificación de algoritmos y registro detallado con soporte multihilo para conexiones simultáneas.",
        },
        image: "projects/Certificate-Analisis.png",
        tags: ["Python", "Tkinter", "OpenSSL", "Multi-threading", "Network Sockets"],
        link: "https://github.com/JavierVargas0112/x509-certificate-analisis",
        github: "https://github.com/JavierVargas0112/x509-certificate-analisis"
    },
    {
        title: { fr: "Company Ranker", en: "Company Ranker", es: "Company Ranker" },
        description: {
          fr: "Projet axé sur le développement d'une application permettant d'évaluer des entreprises et des produits. Réalisé en équipe à l'aide de la méthodologie agile Scrum. Réalisation du backend dans express.js, d'une base de données MySql et d'un frontend dans React.js.",
          en: "Project focused on developing an application for rating companies and products. Carried out as a team using the agile Scrum methodology. Backend developed in express.js with a MySql database and frontend in React.js.",
          es: "Proyecto centrado en el desarrollo de una aplicación para evaluar empresas y productos. Realizado en equipo usando la metodología ágil Scrum. Backend en express.js, base de datos MySql y frontend en React.js.",
        },
        image: "projects/Company-Ranker.png",
        tags: ["React.js", "Express.js", "MySql", "Agile Scrum", "JavaScript", "Node.js", "HTML", "CSS"],
        link: "https://github.com/GustavoR-ivera/Company-Ranker",
        github: "https://github.com/GustavoR-ivera/Company-Ranker"
    },
    {
        title: { fr: "Modernisation des dépôts d'information — UNAL", en: "Information Repository Modernization — UNAL", es: "Modernización de repositorios de información — UNAL" },
        description: {
          fr: "Projet réalisé pour la modernisation des référentiels d'informations de la faculté des sciences économiques de l'université nationale de Colombie. Migration des données vers un site web réalisé principalement avec Angular, un backend en Django et une base de données PostgresSQL et MongoDB. Projet remarquable pour sa mise en œuvre formelle de la sécurité des données, la gestion des bases de données et le suivi des réglementations en matière de protection des données.",
          en: "Project carried out to modernize the information repositories of the Faculty of Economic Sciences at the National University of Colombia. Data migration to a website built mainly with Angular, a Django backend, and a PostgresSQL and MongoDB database. Project notable for its formal implementation of data security, database administration, and monitoring of data protection regulations.",
          es: "Proyecto realizado para modernizar los repositorios de información de la facultad de ciencias económicas de la Universidad Nacional de Colombia. Migración de datos a un sitio web construido principalmente con Angular, un backend en Django y bases de datos PostgreSQL y MongoDB. Proyecto destacado por su implementación formal de seguridad de datos, administración de bases de datos y seguimiento de la normativa de protección de datos.",
        },
        image: "projects/Repositorio-FCE.png",
        tags: ["Angular", "Django", "PostgreSQL", "MongoDB", "Data Security", "Data Protection"],
        link: "#",
        github: "https://github.com/JavierVargas0112/"
    },
    {
        title: { fr: "Navigation autonome par waypoints GPS", en: "Autonomous GPS Waypoint Navigation", es: "Navegación autónoma por waypoints GPS" },
        description: {
          fr: "Nœuds ROS 2 pilotant un drone de surface WAM-V : conversion GPS→ENU et contrôleur de cap sur les propulseurs.",
          en: "ROS 2 nodes piloting a WAM-V surface drone: GPS→ENU conversion and a heading controller for the thrusters.",
          es: "Nodos ROS 2 que pilotan un dron de superficie WAM-V: conversión GPS→ENU y controlador de rumbo para los propulsores.",
        },
        image: null,
        tags: ["ROS 2", "Gazebo", "Python"],
        link: null,
        github: "https://github.com/JavierVargas0112/vrx_ws-Path-planner",
    },
    {
        title: { fr: "Couverture complète de zone en ROS 2", en: "Full Area Coverage in ROS 2", es: "Cobertura completa de área en ROS 2" },
        description: {
          fr: "Paquet de coverage path planning : waypoints en boustrophédon calculés sur la grille d'occupation, asservissement en cap et publication de l'avancement.",
          en: "Coverage path planning package: boustrophedon waypoints computed on the occupancy grid, heading control and progress publishing.",
          es: "Paquete de planificación de rutas de cobertura: waypoints en patrón de boustrofedón calculados sobre la cuadrícula de ocupación, control de rumbo y publicación del avance.",
        },
        image: null,
        tags: ["ROS 2", "Python", "Gazebo"],
        link: null,
        github: null,
    },
    {
        title: { fr: "Solveur automatique de Diamond Rush", en: "Diamond Rush Auto-Solver", es: "Solucionador automático de Diamond Rush" },
        description: {
          fr: "Lecture du plateau à l'écran, reconstruction de la grille, recherche BFS sur les états (rochers, clés, portes), puis rejeu de la solution dans le navigateur.",
          en: "Reads the on-screen board, rebuilds the grid, runs a BFS search over states (rocks, keys, doors), then replays the solution in the browser.",
          es: "Lee el tablero en pantalla, reconstruye la cuadrícula, realiza una búsqueda BFS sobre los estados (rocas, llaves, puertas) y luego reproduce la solución en el navegador.",
        },
        image: null,
        tags: ["Python", "OpenCV", "Tesseract OCR", "Selenium"],
        link: null,
        github: null,
    },
    {
        title: { fr: "Agent Othello", en: "Othello Agent", es: "Agente de Othello" },
        description: {
          fr: "Agent de jeu dont la profondeur de recherche s'adapte au temps restant. Évaluation par poids de position, mobilité, coins et stabilité des pions.",
          en: "Game agent whose search depth adapts to remaining time. Evaluation by position weights, mobility, corners and piece stability.",
          es: "Agente de juego cuya profundidad de búsqueda se adapta al tiempo restante. Evaluación mediante pesos de posición, movilidad, esquinas y estabilidad de las fichas.",
        },
        image: null,
        tags: ["JavaScript", "Minimax", "Alpha-Beta Pruning"],
        link: null,
        github: "https://github.com/JavierVargas0112/Otello",
    },
    {
        title: { fr: "Pierre-papier-ciseaux par reconnaissance de gestes", en: "Rock-Paper-Scissors via Gesture Recognition", es: "Piedra, papel o tijera por reconocimiento de gestos" },
        description: {
          fr: "Détection de la main et comptage des doigts image par image, arbitrage de la partie et interface temps réel. Projet d'équipe suivi en backlog.",
          en: "Frame-by-frame hand detection and finger counting, game arbitration and a real-time interface. Team project tracked in a backlog.",
          es: "Detección de la mano y conteo de dedos cuadro por cuadro, arbitraje de la partida e interfaz en tiempo real. Proyecto en equipo gestionado en un backlog.",
        },
        image: null,
        tags: ["Python", "OpenCV", "MediaPipe"],
        link: null,
        github: "https://github.com/JavierVargas0112/Proyecto-Comp-Visual-Grupo-11",
    },
    {
        title: { fr: "Module noyau Linux", en: "Linux Kernel Module", es: "Módulo de kernel de Linux" },
        description: {
          fr: "Module agissant sur la table des processus : résolution d'un PID passé en paramètre et envoi de signal depuis l'espace noyau.",
          en: "Module operating on the process table: resolving a PID passed as a parameter and sending a signal from kernel space.",
          es: "Módulo que opera sobre la tabla de procesos: resuelve un PID pasado como parámetro y envía una señal desde el espacio de kernel.",
        },
        image: null,
        tags: ["C", "Kernel API", "Loadable Modules"],
        link: null,
        github: null,
    },
    {
        title: { fr: "ACP et classification non supervisée", en: "PCA & Unsupervised Clustering", es: "ACP y clasificación no supervisada" },
        description: {
          fr: "Réduction de dimension par ACP, k-moyennes et classification hiérarchique ; choix du nombre de groupes au score de silhouette.",
          en: "Dimensionality reduction with PCA, k-means and hierarchical clustering; cluster count chosen via silhouette score.",
          es: "Reducción de dimensionalidad mediante ACP, k-medias y clasificación jerárquica; elección del número de grupos según el coeficiente de silueta.",
        },
        image: null,
        tags: ["Python", "scikit-learn", "pandas", "SciPy"],
        link: null,
        github: "https://github.com/JavierVargas0112/Non-supervised-Learning",
    },
    {
        title: { fr: "Transformations géométriques 3D", en: "3D Geometric Transformations", es: "Transformaciones geométricas 3D" },
        description: {
          fr: "Les mêmes transformations — translation, rotation, échelle — implémentées dans trois environnements pour en comparer les conventions.",
          en: "The same transformations — translation, rotation, scale — implemented across three environments to compare their conventions.",
          es: "Las mismas transformaciones — traslación, rotación, escala — implementadas en tres entornos distintos para comparar sus convenciones.",
        },
        image: null,
        tags: ["Three.js", "React", "Processing", "Python"],
        link: null,
        github: "https://github.com/JavierVargas0112/ProgramacionVisual",
    },
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col"
                        style={{animationDelay: `${(idx + 1) * 80}ms`}}
                    >
                        {project.image && (
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 "
                                />
                                <div className=" absolute inset-0
                                bg-gradient-to-t from-card via-card/50
                                to transparent opacity-60"
                                />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Content */}
                        <div className="p-6 space-y-4 flex-1 flex flex-col">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                {project.image ? (
                                    <ArrowUpRight className="w-5 h-5
                                    text-muted-foreground group-hover:text-primary
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1 transition-all flex-shrink-0"
                                    />
                                ) : project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all flex-shrink-0"
                                    >
                                        <Github className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                            <p className="text-muted-foreground text-sm flex-1">{project.description}</p>
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
                <a href="https://github.com/JavierVargas0112" target="_blank" rel="noreferrer">
                    <AnimatedBorderButton>
                        {t.viewAll[lang]}
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </a>
            </div>

         </div>

    </section>
    );
}
