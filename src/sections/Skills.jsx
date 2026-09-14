import { Code2, Server, Layout, Database, Network, Bot, Eye, FlaskConical } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const skillCategories = [
    {
        icon: Code2,
        title: { fr: "Langages", en: "Languages" },
        items: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL", "Bash"],
    },
    {
        icon: Server,
        title: { fr: "Backend et API", en: "Backend & API" },
        items: ["Node.js", "Express", "Django", "API REST", "JWT", "bcrypt", "Microservices"],
    },
    {
        icon: Layout,
        title: { fr: "Front-end et design", en: "Frontend & Design" },
        items: ["React.js", "Angular", "Vite", "Tailwind CSS", "Three.js", "Figma"],
    },
    {
        icon: Database,
        title: { fr: "Bases de données", en: "Databases" },
        items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        icon: Network,
        title: { fr: "Systèmes et réseaux", en: "Systems & Networks" },
        items: ["Linux", "Docker", "AWS", "Azure", "Wireshark", "Sockets TCP", "Multithreading"],
    },
    {
        icon: Bot,
        title: { fr: "Robotique et simulation", en: "Robotics & Simulation" },
        items: ["ROS 2", "Gazebo"],
    },
    {
        icon: Eye,
        title: { fr: "Données, vision et automatisation", en: "Data, Vision & Automation" },
        items: ["OpenCV", "MediaPipe", "scikit-learn", "pandas", "NumPy", "Tesseract OCR", "Selenium", "Matlab"],
    },
    {
        icon: FlaskConical,
        title: { fr: "Tests et méthodes", en: "Testing & Methods" },
        items: ["pytest", "Git", "Scrum", "Jira", "Trello", "Notion"],
    },
];

export const Skills = () => {
    const { lang } = useLanguage();

    return (
    <section id="skills" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    {lang === "fr" ? "Compétences" : "Skills"}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    {lang === "fr" ? "Ma boîte à outils technique." : "My technical toolbox."}
                </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category, idx) => (
                    <div
                        key={idx}
                        className="glass p-6 rounded-2xl animate-fade-in"
                        style={{ animationDelay: `${(idx + 1) * 80}ms` }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <category.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-3">{category.title[lang]}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((item, itemIdx) => (
                                <span
                                    key={itemIdx}
                                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                >
                                    {item}
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
