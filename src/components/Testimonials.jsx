import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Mrs. Anderson",
        text: "My son loves going to school every day! The teachers are so caring and the activities are wonderful.",
        child: "Mom of Tommy (Age 5)"
    },
    {
        id: 2,
        name: "Mr. Roberts",
        text: "We've seen such a positive change in our daughter's confidence since she started at TK Melati.",
        child: "Dad of Sarah (Age 4)"
    },
    {
        id: 3,
        name: "Mrs. Lee",
        text: "The best decision we made for our child's early education. Highly recommended!",
        child: "Mom of Kevin (Age 6)"
    },
    {
        id: 4,
        name: "Ibu Siti",
        text: "Anak saya jadi lebih mandiri dan berani bersosialisasi. Terima kasih TK Melati!",
        child: "Ibu dari Rina (Usia 5)"
    },
    {
        id: 5,
        name: "Pak Budi",
        text: "Fasilitasnya lengkap dan lingkungannya sangat asri. Anak-anak belajar dengan gembira.",
        child: "Ayah dari Dito (Usia 4)"
    },
    {
        id: 6,
        name: "Ibu Ani",
        text: "Program hafalannya sangat membantu. Alhamdulillah anak saya sudah hafal banyak surat pendek.",
        child: "Ibu dari Aisyah (Usia 6)"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(3);
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Calculate visible testimonials for current page
    const visibleTestimonials = testimonials.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
    );

    // Handle edge case where last page might have fewer items
    // If we are on the last page and it's not full, we might want to show some previous items to fill the grid
    // But for simplicity, let's just show what's there.

    return (
        <section id="testimonials" className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-text dark:text-white mb-4">Kata Orang Tua</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">Apa kata mereka tentang TK Melati.</p>
                </div>

                <div className="relative">
                    {/* Carousel Content */}
                    <div className="overflow-hidden min-h-[300px] px-4 md:px-20">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {visibleTestimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="bg-background dark:bg-slate-800 p-8 rounded-3xl relative shadow-lg border border-gray-100 dark:border-slate-700 h-full flex flex-col">
                                        <Quote className="absolute top-6 left-6 text-primary opacity-20" size={48} />
                                        <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-6 relative z-10 flex-grow">"{testimonial.text}"</p>
                                        <div>
                                            <h4 className="font-bold text-text dark:text-white text-xl">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.child}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons (Desktop) */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-primary hover:bg-primary hover:text-white transition-colors z-10 hidden md:block"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-primary hover:bg-primary hover:text-white transition-colors z-10 hidden md:block"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-8 gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-primary/50'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
