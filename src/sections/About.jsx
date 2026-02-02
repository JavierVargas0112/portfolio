import { Code2 } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "SALSLALLALSLALSL"
    },
    {
        icon: Code2,
        title: "Clean Code",
        description: "SALSLALLALSLALSL"
    },
    {
        icon: Code2,
        title: "Clean Code",
        description: "SALSLALLALSLALSL"
    },
    {
        icon: Code2,
        title: "Clean Code",
        description: "SALSLALLALSLALSL"
    }
]

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div>
            <div>
                {/* Left Column  */}
                <div>
                    <span>About Me</span>
                </div>

                <h2>Building the future</h2>
                <span>
                    one component at a time
                </span>
            </div>
        </div>


    </section>);
}