"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, TrendingUp, XCircle, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function PainPoints() {
    const { t } = useTranslation();

    const fears = [
        {
            icon: <AlertCircle className="h-6 w-6 text-red-500" />,
            title: t("fears.f1.title"),
            description: t("fears.f1.desc"),
        },
        {
            icon: <TrendingDown className="h-6 w-6 text-red-500" />,
            title: t("fears.f2.title"),
            description: t("fears.f2.desc"),
        },
        {
            icon: <XCircle className="h-6 w-6 text-red-500" />,
            title: t("fears.f3.title"),
            description: t("fears.f3.desc"),
        },
    ];

    const solutions = [
        {
            company: t("fears.s1.company"),
            result: t("fears.s1.result"),
            isHalal: true,
            description: t("fears.s1.desc"),
        },
        {
            company: t("fears.s2.company"),
            result: t("fears.s2.result"),
            isHalal: true,
            description: t("fears.s2.desc"),
        },
        {
            company: t("fears.s3.company"),
            result: t("fears.s3.result"),
            isHalal: false,
            description: t("fears.s3.desc"),
        },
    ];

    return (
        <section id="about" className="py-12 md:py-24 bg-surface relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
                    >
                        {t("fears.title1")} <span className="text-red-500">{t("fears.title2")}</span> {t("fears.title3")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/70"
                    >
                        {t("fears.subtitle")}
                    </motion.p>
                </div>

                {/* Fears Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {fears.map((fear, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface p-6 sm:p-8 rounded-2xl shadow-lg border border-red-500/10 hover:shadow-xl transition-shadow"
                        >
                            <div className="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                                {fear.icon}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-3">{fear.title}</h3>
                            <p className="text-base sm:text-lg font-medium text-foreground/80 leading-relaxed">{fear.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* The Solution */}
                <div className="relative rounded-3xl overflow-hidden bg-[#0369a1] dark:bg-surface text-white shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />

                    <div className="relative z-10 p-8 sm:p-12 lg:p-16">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <span className="inline-block py-1 px-3 rounded-full bg-success/20 text-success-foreground text-sm font-semibold mb-4 border border-success/30 backdrop-blur-sm">{t("fears.sol.badge")}</span>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t("fears.sol.title")}</h2>
                            <p className="text-lg text-white/80">
                                {t("fears.sol.desc")}
                            </p>
                        </div>

                        <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto pb-6 -mx-8 px-8 sm:mx-0 sm:px-0 sm:pb-0 snap-x snap-mandatory hide-scrollbar hover:cursor-grab active:cursor-grabbing" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {solutions.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 p-5 sm:p-6 rounded-2xl min-w-[280px] sm:min-w-[320px] md:min-w-0 flex-[0_0_85%] sm:flex-none snap-center"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold">{item.company}</h4>
                                        {item.isHalal ? (
                                            <div className="bg-success/20 p-2 rounded-full backdrop-blur-md border border-success/30 shadow-sm">
                                                <CheckCircle2 className="h-5 w-5 text-green-300" />
                                            </div>
                                        ) : (
                                            <div className="bg-red-500/20 p-2 rounded-full backdrop-blur-md border border-red-400/30 shadow-sm">
                                                <XCircle className="h-5 w-5 text-red-300" />
                                            </div>
                                        )}
                                    </div>
                                    <div className={`text-2xl font-black mb-3 ${item.isHalal ? 'text-success-foreground' : 'text-red-400'}`}>
                                        {item.result}
                                    </div>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
