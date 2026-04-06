"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export function WebinarProgram() {
    const { t } = useTranslation();

    const programPoints = [
        {
            title: t("syllabus.m1.title"),
            description: [t("syllabus.m1.li1"), t("syllabus.m1.li2"), t("syllabus.m1.li3")].filter(val => val && !val.includes("syllabus.")).join(". ") + ".",
        },
        {
            title: t("syllabus.m2.title"),
            description: [t("syllabus.m2.li1"), t("syllabus.m2.li2"), t("syllabus.m2.li3")].filter(val => val && !val.includes("syllabus.")).join(". ") + ".",
        },
        {
            title: t("syllabus.m3.title"),
            description: [t("syllabus.m3.li1"), t("syllabus.m3.li2"), t("syllabus.m3.li3")].filter(val => val && !val.includes("syllabus.")).join(". ") + ".",
        },
        {
            title: t("syllabus.m4.title"),
            description: [t("syllabus.m4.li1"), t("syllabus.m4.li2"), t("syllabus.m4.li3")].filter(val => val && !val.includes("syllabus.")).join(". ") + ".",
        },
    ];
    return (
        <section id="program" className="py-12 md:py-24 bg-surface relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
                    >
                        {t("syllabus.title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/70 mb-4"
                    >
                        {t("syllabus.subtitle")}<br />
                        {t("syllabus.duration")}<br />
                        {t("syllabus.format")}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

                    {/* Program Steps */}
                    {programPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="md:hidden absolute left-0 top-1 bottom-0 w-0.5 bg-primary/20"></div>
                            <div className="md:hidden absolute left-[-4px] top-2 h-2.5 w-2.5 rounded-full bg-primary-foreground border-2 border-white"></div>

                            <div className="bg-foreground text-background p-6 rounded-2xl shadow-sm border border-primary/10 hover:border-primary/30 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="hidden md:flex h-10 w-10 shrink-0 bg-background/20 text-background rounded-full items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                                        <p className="text-background/70 leading-relaxed">{point.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 p-6 rounded-2xl bg-foreground/5 border border-foreground/10 max-w-4xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                        <div className="p-3 bg-amber-500/10 rounded-xl">
                            <AlertTriangle className="h-6 w-6 text-amber-500" />
                        </div>
                        <div>
                            <p className="text-sm text-foreground/70 leading-relaxed italic">
                                {t("footer.risk_warning")} {t("disclaimer.p5")}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
