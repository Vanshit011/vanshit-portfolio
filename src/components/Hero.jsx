import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-center px-4">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-4 text-white"
            >
                Vanshit Patel
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-neutral-400 font-light max-w-3xl"
            >
                Web Development <span className="mx-2 hidden md:inline">•</span> Custom Software Development <span className="mx-2 hidden md:inline">•</span> SaaS Development
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mt-8 flex flex-col md:flex-row gap-4 items-center"
            >
                <a
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors"
                >
                    Contact Me
                </a>
                <a
                    href="#projects"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-3 border border-neutral-600 text-white font-bold rounded-full hover:bg-neutral-900 hover:border-white transition-colors"
                >
                    View Work
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-10"
            >
                <div className="w-5 h-8 border-2 border-neutral-600 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-1 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
