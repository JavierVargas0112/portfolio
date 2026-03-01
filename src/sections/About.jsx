import { Code2 } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Backend Development",
        description: "Expérience approfondie en Node.js, Express et bases de données relationnelles et NoSQL."
    },
    {
        icon: Code2,
        title: "Data Analysis",
        description: "Formation en science des données et utilisation de Python/Matlab pour manipuler et analyser des ensembles de données."
    },
    {
        icon: Code2,
        title: "Cloud & DevOps",
        description: "Compétences en AWS, Azure et Docker pour déployer des applications sécurisées et scalables."
    },
    {
        icon: Code2,
        title: "Collaboration & SCRUM",
        description: "Travail en équipe, leadership et méthodologies agiles pour mener à bien les projets."
    }
]

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column  */}
                <div className="space-y-8 ">
                    <div className="animate-fade-in ">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">Construire l'avenir,
                    <span className="font-serif italic font-normal text-white"> 
                        {" "}
                         une ligne de code à la fois,
                    </span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            Étudiant ingénieur en M1 Systèmes Intelligents Sécurisés et Communicants à IMT Nord Europe, passionné par le
                            développement backend et l’analyse de données. Mes expériences m'ont amené à concevoir des systèmes pour
                            le secteur éducatif et des plateformes web d'entreprise.
                        </p>
                        <p>
                            J'ai acquis une solide maîtrise de Node.js, Express, React, Python, Django, ainsi que des bases de données
                            relationnelles et NoSQL. Curieux et rigoureux, j'aime résoudre des problèmes complexes et automatiser des
                            processus pour gagner en efficacité.
                        </p>
                        <p>
                            Proactif et axé sur la collaboration, je travaille bien en équipe agile, en utilisant SCRUM et des pratiques
                            modernes de développement. Mon sens du leadership et ma gestion du temps contribuent à la réussite des projets.
                        </p>
                        <p>
                            Je suis actuellement à la recherche d'un stage à partir d'avril 2026 afin de mettre mes compétences au service de
                            projets ambitieux et continuer à apprendre de nouvelles technologies.
                        </p>
                    </div>

                    <div className="space-y-4 animate-fade-in animation-delay-300">
                        <div>
                            <h3 className="text-lg font-semibold">Langues</h3>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                                <li>Espagnol – courant</li>
                                <li>Anglais – professionnel</li>
                                <li>Français – intermédiaire avancé</li>
                            </ul>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border">
                            <p className="text-lg font-medium italic text-foreground">
                                Ma mission est de développer des systèmes sécurisés et performants, tout en continuant à apprendre
                                et à évoluer dans le domaine du backend et de l'analyse de données.
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