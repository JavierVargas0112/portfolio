import { Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const otherProjects = [
    {
        title: { fr: "Navigation autonome par waypoints GPS", en: "Autonomous GPS Waypoint Navigation" },
        description: {
          fr: "Nœuds ROS 2 pilotant un drone de surface WAM-V : conversion GPS→ENU et contrôleur de cap sur les propulseurs.",
          en: "ROS 2 nodes piloting a WAM-V surface drone: GPS→ENU conversion and a heading controller for the thrusters.",
        },
        tags: ["ROS 2", "Gazebo", "Python"],
        github: "https://github.com/JavierVargas0112/vrx_ws-Path-planner",
    },
    {
        title: { fr: "Couverture complète de zone en ROS 2", en: "Full Area Coverage in ROS 2" },
        description: {
          fr: "Paquet de coverage path planning : waypoints en boustrophédon calculés sur la grille d'occupation, asservissement en cap et publication de l'avancement.",
          en: "Coverage path planning package: boustrophedon waypoints computed on the occupancy grid, heading control and progress publishing.",
        },
        tags: ["ROS 2", "Python", "Gazebo"],
        github: null,
    },
    {
        title: { fr: "Solveur automatique de Diamond Rush", en: "Diamond Rush Auto-Solver" },
        description: {
          fr: "Lecture du plateau à l'écran, reconstruction de la grille, recherche BFS sur les états (rochers, clés, portes), puis rejeu de la solution dans le navigateur.",
          en: "Reads the on-screen board, rebuilds the grid, runs a BFS search over states (rocks, keys, doors), then replays the solution in the browser.",
        },
        tags: ["Python", "OpenCV", "Tesseract OCR", "Selenium"],
        github: null,
    },
    {
        title: { fr: "Agent Othello", en: "Othello Agent" },
        description: {
          fr: "Agent de jeu dont la profondeur de recherche s'adapte au temps restant. Évaluation par poids de position, mobilité, coins et stabilité des pions.",
          en: "Game agent whose search depth adapts to remaining time. Evaluation by position weights, mobility, corners and piece stability.",
        },
        tags: ["JavaScript", "Minimax", "Alpha-Beta Pruning"],
        github: "https://github.com/JavierVargas0112/Otello",
    },
    {
        title: { fr: "Pierre-papier-ciseaux par reconnaissance de gestes", en: "Rock-Paper-Scissors via Gesture Recognition" },
        description: {
          fr: "Détection de la main et comptage des doigts image par image, arbitrage de la partie et interface temps réel. Projet d'équipe suivi en backlog.",
          en: "Frame-by-frame hand detection and finger counting, game arbitration and a real-time interface. Team project tracked in a backlog.",
        },
        tags: ["Python", "OpenCV", "MediaPipe"],
        github: "https://github.com/JavierVargas0112/Proyecto-Comp-Visual-Grupo-11",
    },
    {
        title: { fr: "Module noyau Linux", en: "Linux Kernel Module" },
        description: {
          fr: "Module agissant sur la table des processus : résolution d'un PID passé en paramètre et envoi de signal depuis l'espace noyau.",
          en: "Module operating on the process table: resolving a PID passed as a parameter and sending a signal from kernel space.",
        },
        tags: ["C", "Kernel API", "Loadable Modules"],
        github: null,
    },
    {
        title: { fr: "ACP et classification non supervisée", en: "PCA & Unsupervised Clustering" },
        description: {
          fr: "Réduction de dimension par ACP, k-moyennes et classification hiérarchique ; choix du nombre de groupes au score de silhouette.",
          en: "Dimensionality reduction with PCA, k-means and hierarchical clustering; cluster count chosen via silhouette score.",
        },
        tags: ["Python", "scikit-learn", "pandas", "SciPy"],
        github: "https://github.com/JavierVargas0112/Non-supervised-Learning",
    },
    {
        title: { fr: "Transformations géométriques 3D", en: "3D Geometric Transformations" },
        description: {
          fr: "Les mêmes transformations — translation, rotation, échelle — implémentées dans trois environnements pour en comparer les conventions.",
          en: "The same transformations — translation, rotation, scale — implemented across three environments to compare their conventions.",
        },
        tags: ["Three.js", "React", "Processing", "Python"],
        github: "https://github.com/JavierVargas0112/ProgramacionVisual",
    },
];

export const OtherProjects = () => {
    const { lang } = useLanguage();

    return (
    <section id="other-projects" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    {lang === "fr" ? "Plus de projets" : "More Projects"}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    {lang === "fr" ? "D'autres explorations techniques." : "Other technical explorations."}
                </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, idx) => (
                    <div
                        key={idx}
                        className="glass p-6 rounded-2xl animate-fade-in flex flex-col"
                        style={{ animationDelay: `${(idx + 1) * 60}ms` }}
                    >
                        <div className="flex items-start justify-between gap-3">
                            <h3 className="text-lg font-semibold">{project.title[lang]}</h3>
                            {project.github && (
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
                        <p className="text-sm text-muted-foreground mt-3 flex-1">{project.description[lang]}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.map((tag, tagIdx) => (
                                <span
                                    key={tagIdx}
                                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
}
