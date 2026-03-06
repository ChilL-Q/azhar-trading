"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function SocialProof() {
    const { t } = useTranslation();

    const reviews = [
        {
            name: t("reviews.r1.name"),
            role: t("reviews.r1.role"),
            text: t("reviews.r1.text"),
        },
        {
            name: t("reviews.r2.name"),
            role: t("reviews.r2.role"),
            text: t("reviews.r2.text"),
        },
        {
            name: t("reviews.r3.name"),
            role: t("reviews.r3.role"),
            text: t("reviews.r3.text"),
        },
    ];
    return (
        <section id="reviews" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
                    >
                        {t("reviews.title1")} <span className="text-primary-foreground">{t("reviews.title2")}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/70 mb-8"
                    >
                        {t("reviews.subtitle")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-accent/10 border border-accent/30 text-accent-foreground px-6 py-4 rounded-2xl shadow-sm mb-4"
                    >
                        <span className="font-bold text-lg text-foreground">Где вы будете получать все обновления стратегии БЕСПЛАТНО?</span>
                        <span className="text-foreground/80 text-sm">В нашем закрытом комьюнити выпускников</span>
                    </motion.div>
                </div>

                {/* Featured Case Study */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary/5 border border-primary/20 rounded-3xl p-8 lg:p-12 mb-16 relative overflow-hidden"
                >
                    {/* Replaced heavy blur circle with simple gradient decoration */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />

                    <div className="flex flex-col lg:flex-row gap-8 lg:items-center relative z-10">
                        <div className="lg:w-1/3">
                            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-4">Кейс ученицы</span>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Акнур Ханым</h3>
                            <p className="text-foreground/60 mb-6">С нуля до системного инвестора</p>

                            <div className="flex items-center gap-4 border-t border-primary/10 pt-6">
                                <div>
                                    <p className="text-sm text-foreground/50">Результат портфеля</p>
                                    <p className="text-2xl font-black text-success flex items-center mt-1">
                                        +24% <ArrowUpRight className="h-5 w-5 ml-1" />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 lg:pl-8 lg:border-l border-primary/20">
                            <Quote className="h-10 w-10 text-primary/40 mb-4" />
                            <p className="text-lg sm:text-xl font-medium leading-relaxed text-foreground/80 italic">
                                «Я никогда не держала в руках акций и боялась слова "биржа". Боялась, что попаду в риба. Но алгоритмы Устазы по отбору халяльных акций дали мне уверенность. Я собрала правильный портфель, и сейчас мой пассивный доход покрывает часть расходов семьи!»
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface p-6 sm:p-8 rounded-3xl shadow-lg border border-primary/5 flex flex-col h-full hover:-translate-y-1 transition-transform"
                        >
                            <div className="flex gap-1 text-accent mb-6">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-foreground/80 leading-relaxed italic flex-grow">
                                "{review.text}"
                            </p>
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="font-bold text-foreground">{review.name}</p>
                                <p className="text-sm text-foreground/50">{review.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
