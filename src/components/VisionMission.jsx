import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Star } from 'lucide-react';

const VisionMission = () => {
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
        <section id="vision" className="py-20 bg-white dark:bg-slate-900">
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
                        Our Vision & Mission
                    </motion.h2>
                    <motion.p
                        variants={titleVariants}
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        We are dedicated to nurturing the next generation of thinkers, dreamers, and doers.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="grid md:grid-cols-3 gap-12"
                >
                    {/* Vision */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-background dark:bg-slate-800 rounded-3xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                            <Target size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-text dark:text-white mb-4">Our Vision</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            To be a leading institution that fosters creativity, independence, and a lifelong love for learning in every child.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-background dark:bg-slate-800 rounded-3xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-text dark:text-white mb-4">Our Mission</h3>
                        <ul className="text-gray-700 dark:text-gray-300 text-left space-y-2">
                            <li>• Provide a safe and inclusive environment.</li>
                            <li>• Encourage curiosity and exploration.</li>
                            <li>• Build strong character and social skills.</li>
                        </ul>
                    </motion.div>

                    {/* Values */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-background dark:bg-slate-800 rounded-3xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                            <Star size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-text dark:text-white mb-4">Our Values</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Integrity, Compassion, Creativity, and Excellence are at the heart of everything we do.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default VisionMission;
