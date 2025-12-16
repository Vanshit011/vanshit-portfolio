import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/Vanshit011/repos');
                const filtered = response.data
                    .filter(repo => !repo.fork)
                    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
                setProjects(filtered);
            } catch (error) {
                console.error("Error fetching repos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return null; // Or a subtle loader

    return (
        <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 border-l-4 border-white pl-4"
            >
                Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((repo, i) => (
                    <ProjectCard key={repo.id} repo={repo} index={i} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ repo, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full"
        >
            <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">{repo.name}</h3>
                <p className="text-neutral-400 text-sm mb-4 line-clamp-3">
                    {repo.description || "No description available."}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {repo.topics && repo.topics.slice(0, 3).map(topic => (
                        <span key={topic} className="text-xs text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-1 rounded">
                            {topic}
                        </span>
                    ))}
                    {repo.language && (
                        <span className="text-xs text-white bg-neutral-800 px-2 py-1 rounded border border-neutral-700">
                            {repo.language}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex gap-4 mt-auto pt-4 border-t border-neutral-800">
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:underline decoration-1 underline-offset-4"
                >
                    GitHub
                </a>
                {repo.homepage && (
                    <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                        Live Demo
                        <span className="text-xs">↗</span>
                    </a>
                )}
            </div>
        </motion.div>
    );
}
