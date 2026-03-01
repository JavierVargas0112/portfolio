export const Testimonials = () => {
    return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-3xl font-bold text-secondary-foreground">
                    Ce que les gens disent
                </h2>
                <blockquote className="text-lg italic text-muted-foreground">
                    "Javier a démontré une grande rigueur et des compétences solides en développement backend lors de sa mission chez IHUBBS. Sa capacité à comprendre rapidement les besoins
                    et à fournir des solutions efficaces a été précieuse."
                </blockquote>
                <cite className="block font-medium">— Superviseur chez IHUBBS Business Solutions</cite>
            </div>
        </div>
    </section>
    );
}