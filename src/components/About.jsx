import { motion } from 'framer-motion';

const skills = ["MERN Stack", "MongoDB", "React", "Node.js", "Express", "SaaS", "ERP Solutions", "Tailwind CSS"];

export default function About() {
    return (
        <section className="py-20 px-8 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-white pl-4">About Me</h2>

                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                    I build high-performance web applications with a focus on clean design and robust functionality.
                    Specializing in the MERN stack, I transform complex requirements into seamless digital experiences,
                    from comprehensive ERP systems to modern SaaS platforms.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm font-mono text-neutral-300 hover:border-neutral-600 transition-colors cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ServiceCard title="Web Development" desc="Modern, fast, and responsive websites using React and Tailwind." />
                    <ServiceCard title="Custom Software Development" desc="Tailored solutions for complex business needs and ERP systems." />
                    <ServiceCard title="SaaS Development" desc="Scalable software-as-a-service applications with sturdy backends." />
                </div>
            </motion.div>
        </section>
    );
}

function ServiceCard({ title, desc }) {
    return (
        <div className="p-6 bg-neutral-900/30 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors">
            <h3 className="text-white font-bold mb-2">{title}</h3>
            <p className="text-neutral-400 text-sm">{desc}</p>
        </div>
    );
}
