import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/Button";
import { use, useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "javier.vargas@etu.imt-nord-europe.fr",
        href: "mailto:javier.vargas@etu.imt-nord-europe.fr",
    },
    {
        icon: Phone,
        label: "Téléphone",
        value: "+33 7 59 50 39 40",
        href: "tel:+33759503940",
    },
    {
        icon: MapPin,
        label: "Localisation",
        value: "Lille, France",
        href: "https://www.google.com/maps/place/Lille,+France",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "javiervargas0112",
        href: "https://github.com/JavierVargas0112",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "javier-santiago-vargas-parra",
        href: "https://linkedin.com/in/javier-santiago-vargas-parra",
    },
]

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: ""
    }); 

    const handleSubmit = async (e) => {
        e.preventDefault();


        setIsLoading(true);
        setSubmitStatus({type: null, message: ""});
        try{
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS configuration is missing. Please check your environment variables.");
            };

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,            }, 
                publicKey);

            setSubmitStatus({type: "success", message: "Message sent successfully!"});
        } catch (error) {
            console.error("Error sending message:", error);
            setSubmitStatus({type: "error", message: error.text || "Failed to send message. Please try again later."});

        } finally {
            setIsLoading(false);
        }
    }
    return (
    <section id="contact" className="py-32 relative overflow-hidden">
        
        {/* BG Glows */}
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                Contactez-moi
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                Construisons
                <span className="font-serif italic font-normal text-white">
                quelque chose de génial.
                </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
                Vous avez un projet en tête ? J'aimerais en savoir plus. Envoyez-moi un message
                et discutons de la manière dont nous pouvons collaborer.
            </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label 
                                htmlFor="name"
                                className="block text-sm font-medium mb mb-2"
                            > 
                                Nom
                            </label>
                            <input
                             id="name"
                             type="text"  
                             className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                             required
                             placeholder="Votre nom..."
                             value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div>
                            <label 
                            htmlFor="email"
                            className="block text-sm font-medium mb mb-2"
                            > Email</label>
                            <input 
                             id="email" 
                             type="email" 
                             className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                             required
                             placeholder="votre@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb mb-2"> Message</label>
                            <textarea 
                            rows={5}
                            id="message" 
                            className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" 
                            placeholder="Votre message..."
                            value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>

                        <Button 
                            className="w-full" 
                            type="submit" 
                            size="lg" 
                            disabled={isLoading}

                        >
                            {isLoading ? (
                            <>Envoi...</>
                            ) : (
                            <>
                                Envoyer le message
                                <Send className="w-5 h-5" />
                            </>
                            )}
                        </Button>

                        {submitStatus.type && (
                            <div
                            className={`flex items-center gap-3
                                p-4 rounded-xl ${
                                submitStatus.type === "success"
                                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                                }`}
                            >
                            {submitStatus.type === "success" ? (
                                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                            ) : (
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            )}
                            <p className="text-sm">{submitStatus.message}</p>
                            </div>
                        )}
                    </form>
                </div>
 {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Informations de contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Disponible actuellement</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Je suis actuellement ouvert à de nouvelles opportunités et projets passionnants.
                Que vous ayez besoin d'un ingénieur en temps plein ou d'un consultant freelance,
                parlons-en !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}