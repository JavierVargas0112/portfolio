import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export const Testimonials = () => {
    const { lang } = useLanguage();
    const t = translations.testimonials;
    return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-3xl font-bold text-secondary-foreground">
                    {lang === "fr" ? "Ce que les gens disent" : "What people say"}
                </h2>
                <blockquote className="text-lg italic text-muted-foreground">
                    "{t.quote[lang]}"
                </blockquote>
                <cite className="block font-medium">{t.author[lang]}</cite>
            </div>
        </div>
    </section>
    );
}