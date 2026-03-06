"use client";

import { motion } from "framer-motion";
import { Baby, Briefcase, LayoutDashboard, ShieldCheck } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function TargetAudience() {
    const { t } = useTranslation();
    const audiences = [
        {
            icon: <Baby className="h-8 w-8 text-primary-foreground" />,
            title: t("pain.card1.title"),
            description: t("pain.card1.desc"),
            bg: "bg-primary/5",
            border: "border-primary/20"
        },
        {
            icon: <Briefcase className="h-8 w-8 text-accent" />,
            title: t("pain.card2.title"),
            description: t("pain.card2.desc"),
            bg: "bg-accent/5",
            border: "border-accent/20"
        },
        {
            icon: <LayoutDashboard className="h-8 w-8 text-foreground" />,
            title: t("pain.card3.title"),
            description: t("pain.card3.desc"),
            bg: "bg-foreground/5",
            border: "border-foreground/10"
        },
        {
            icon: <ShieldCheck className="h-8 w-8 text-success" />,
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
                            className={`p-6 sm:p-8 rounded-3xl ${audience.bg} border ${audience.border} hover:shadow-lg transition-all duration-300 group`}
                        >
                            <div className="mb-6 bg-background w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                {audience.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">{audience.description}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
