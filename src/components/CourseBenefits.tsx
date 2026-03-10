"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, TrendingUp, Presentation, Users, DollarSign } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function CourseBenefits() {
    const { t } = useTranslation();
    const features = [
        {
            title: t("benefits.b1.title"),
            description: t("benefits.b1.desc"),
            icon: <DollarSign className="h-6 w-6" />
        },
        {
            title: t("benefits.b2.title"),
            description: t("benefits.b2.desc"),
            icon: <Presentation className="h-6 w-6" />
        },
        {
            title: t("benefits.b3.title"),
            description: t("benefits.b3.desc"),
            icon: <ShieldCheck className="h-6 w-6" />
        },
        {
            title: t("benefits.b4.title"),
            description: t("benefits.b4.desc"),
            icon: <TrendingUp className="h-6 w-6" />
        }
    ];

    const bonuses = [
        t("benefits.b5.desc"),
        t("benefits.b6.desc")
    ];

    return (
        <section className="py-24 bg-surface border-t border-primary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row gap-16">

                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
                        >
                            {t("benefits.title1")} <span className="text-primary-foreground">{t("benefits.title2")}</span>:
                        </motion.h2>

                        <div className="space-y-8 mt-12">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-4 group"
                                >
                                    <div className="flex-shrink-0 mt-1 h-12 w-12 rounded-xl bg-primary/10 text-primary-foreground flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                        <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0369a1] dark:bg-surface rounded-3xl p-8 sm:p-12 shadow-2xl text-white relative h-full"
                        >
                            {/* Decor */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/10">
                                    <div className="h-14 w-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                        <Users className="h-8 w-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Обучение:</h3>
                                        <p className="text-white/70 text-sm whitespace-pre-wrap">{t("benefits.subtitle")}</p>
                                    </div>
                                </div>

                                <ul className="space-y-5 flex-grow">
                                    {bonuses.map((bonus, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (idx * 0.1) }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="flex-shrink-0 mt-0.5">
                                                <Check className="h-5 w-5 text-green-400" />
                                            </div>
                                            <span className="text-white/90 font-medium">{bonus}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="mt-10 pt-8 border-t border-white/10">
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
