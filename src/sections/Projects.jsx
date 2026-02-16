const projects = [
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
        image: "https://via.placeholder.com/400x300",
        tags: ["React", "Tailwind", "API"],
        link: "#"
    },
    {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
        image: "https://via.placeholder.com/400x300",
        tags: ["React", "Tailwind", "API"],
        link: "#"
    },
    {
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
        image: "https://via.placeholder.com/400x300",
        tags: ["React", "Tailwind", "API"],
        link: "#"
    },
    {
        title: "Project 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
        image: "https://via.placeholder.com/400x300",
        tags: ["React", "Tailwind", "API"],
        link: "#"
    }
]

export const Projects = () => {
    return (
    <section id="projects" className="py-32 relative overflow-hidden">

        {/* BG Glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

         <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium uppercase animate-fade-in">Featured Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"> 
                    Projects that 
                    <span className="font-serif italic font-normal text-white"> {" "} make an impact. </span>
                </h2>
            </div>
            <p className="text-muted-foreground animate-fade-im animation-delay-200">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quaerat est fugit minus iusto odio vitae! Ducimus enim animi voluptatem voluptatibus totam natus minima iure, laborum itaque quae facilis numquam!
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
                    </div>
                ))}
            </div>

         </div>

    </section>
    );
}