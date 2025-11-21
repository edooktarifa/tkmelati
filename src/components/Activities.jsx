import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Palette, Gamepad2 } from 'lucide-react';

const Activities = () => {
    const activities = [
        {
            title: "Belajar Hafalan",
            desc: "Metode menghafal yang mudah dan menyenangkan.",
            icon: <BookOpen size={32} className="text-white" />,
            color: "bg-primary"
        },
        {
            title: "Kerajinan Tangan",
            desc: "Mengembangkan kreativitas murid melalui seni.",
            icon: <Palette size={32} className="text-white" />,
            color: "bg-secondary"
        },
        {
            title: "Bermain Edukatif",
            desc: "Mengasah kemampuan motorik dan sosial.",
            icon: <Gamepad2 size={32} className="text-white" />,
            color: "bg-accent"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="programs" className="py-20 bg-blue-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={titleVariants}
                        className="text-4xl font-extrabold text-text dark:text-white mb-4"
                    >
                        Kegiatan Anak
                    </motion.h2>
                    <motion.p
                        variants={titleVariants}
                        className="text-xl text-gray-600 dark:text-gray-300"
                    >
                        Beragam aktivitas seru untuk tumbuh kembang anak.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
                        >
                            <motion.div
                                whileHover={{ rotate: 6, scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className={`${activity.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md rotate-3`}
                            >
                                {activity.icon}
                            </motion.div>
                            <h3 className="text-2xl font-bold text-text dark:text-white mb-3">{activity.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {activity.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Activities;
