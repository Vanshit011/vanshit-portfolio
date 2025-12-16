export default function Contact() {
    return (
        <footer id="contact" className="py-20 text-center border-t border-neutral-900">
            <h2 className="text-2xl font-bold mb-8 text-white">Let's Build Something Great</h2>

            <p className="text-neutral-400 mb-8 max-w-xl mx-auto px-4">
                Open for freelance opportunities. Whether you need a modern portfolio, a complex ERP system, or a SaaS product, I'm ready to help you bring your vision to life.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
                <a href="mailto:vanshitpatel10@gmail.com" className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
                    Email Me
                </a>
                <a href="https://linkedin.com/in/vanshit-patel/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-neutral-700 text-white font-bold rounded-full hover:bg-neutral-900 hover:border-white transition-colors">
                    LinkedIn
                </a>
                <a href="https://github.com/Vanshit011" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-neutral-700 text-white font-bold rounded-full hover:bg-neutral-900 hover:border-white transition-colors">
                    GitHub
                </a>
                <a href="https://www.upwork.com/freelancers/~01e888568ec5e7970e" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-neutral-700 text-white font-bold rounded-full hover:bg-neutral-900 hover:border-white transition-colors">
                    Upwork
                </a>
            </div>

            <p className="text-neutral-600 text-sm">
                © {new Date().getFullYear()} Vanshit Patel. Built with React & Three.js.
            </p>
        </footer>
    );
}
