import { motion } from 'framer-motion';

const reviews = [
    {
        name: "Mehul Patel",
        role: "Owner, Kranti Forging",
        text: "The Forge ERP system Vanshit developed has completely digitized our operations. His expertise in custom software for the forging industry is unmatched."
    },
    {
        name: "Vivek Patel",
        role: "Director, Polytech",
        text: "Vanshit built a custom industrial software solution that streamlined our production workflow at Polytech. The precision and understanding of manufacturing needs were outstanding."
    },
    {
        name: "Kranti Forging",
        role: "Owner, Kranti Forging",
        text: "We needed a robust workforce management tool. Vanshit delivered 'Labour Pro', which simplified our attendance and payroll processing significantly."
    },
    {
        name: "Harsh Patel",
        role: "Manager, Nandan Bottling",
        text: "Our inventory and bottling processes are now fully automated thanks to the custom software suite Vanshit designed for Nandan Bottling."
    },
    {
        name: "Jagdish Patel",
        role: "Owner, Jayesh Forge",
        text: "Highly recommended for industrial software. The solution provided for Jayesh Forge helped us track production metrics in real-time."
    },
    {
        name: "Mihir Patel",
        role: "Owner, Amrut Flow",
        text: "An excellent SaaS platform for our flow management needs. Scalable, fast, and exactly what we needed to modernize our industrial tracking."
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 px-8 max-w-6xl mx-auto border-t border-neutral-900">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 border-l-4 border-white pl-4 text-white"
            >
                What Clients Say
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} index={index} />
                ))}
            </div>
        </section>
    );
}

function ReviewCard({ review, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-neutral-900/20 border border-neutral-800 p-8 rounded-lg relative"
        >
            <div className="text-4xl text-neutral-700 font-serif absolute top-4 left-4">"</div>

            <p className="text-neutral-300 italic mb-6 relative z-10 pt-4">
                {review.text}
            </p>

            <div>
                <h4 className="text-white font-bold">{review.name}</h4>
                <p className="text-neutral-500 text-xs uppercase tracking-wider">{review.role}</p>
            </div>
        </motion.div>
    );
}
