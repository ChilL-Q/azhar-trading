"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function TargetAudience() {
    const { t } = useTranslation();
    const audiences = [
        {
            icon: <CheckCircle2 className="h-8 w-8 text-success" />,
            title: t("pain.card1.title"),
            description: t("pain.card1.desc"),
            bg: "bg-primary/5",
            border: "border-primary/20"
        },
        {
            icon: <CheckCircle2 className="h-8 w-8 text-success" />,
            title: t("pain.card2.title"),
            description: t("pain.card2.desc"),
            bg: "bg-accent/5",
            border: "border-accent/20"
        },
        {
            icon: <CheckCircle2 className="h-8 w-8 text-success" />,
            title: t("pain.card3.title"),
            description: t("pain.card3.desc"),
            bg: "bg-foreground/5",
            border: "border-foreground/10"
        },
        {
            icon: <CheckCircle2 className="h-8 w-8 text-success" />,
            title: t("pain.card4.title"),
            description: t("pain.card4.desc"),
            bg: "bg-success/5",
            border: "border-success/20"
        }
    ];

    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
                    >
                        {t("pain.title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/70"
                    >
                        {t("pain.subtitle")}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-5 sm:p-6 lg:p-8 rounded-3xl ${audience.bg} border ${audience.border} hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group flex flex-row lg:flex-col gap-4 sm:gap-5 lg:gap-6 items-start`}
                        >
                            <div className="flex-shrink-0 bg-background w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                {audience.icon}
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 lg:mb-3">{audience.title}</h3>
                                <p className="text-foreground/70 text-sm leading-relaxed">{audience.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
