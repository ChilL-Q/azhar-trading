"use client";

import { motion } from "framer-motion";
import { Lock, Radio, GraduationCap, ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

interface CourseTeaserProps {
    onOpenModal: () => void;
}

export function CourseTeaser({ onOpenModal }: CourseTeaserProps) {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-surface relative overflow-hidden">

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-background to-primary/5 z-0 pointer-events-none" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent/5 to-transparent z-0 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="max-w-4xl mx-auto">
                    {/* Main Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-surface rounded-3xl p-8 sm:p-12 shadow-2xl border border-primary/10 relative overflow-hidden"
                    >
                        {/* Soft decorative header inside card */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-success via-primary-foreground to-accent" />

                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                                {t("teaser.title")}
                            </h2>
                            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                                {t("teaser.desc")}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6 mb-10">
                            <div className="flex flex-col items-center text-center p-6 bg-surface rounded-2xl border border-gray-50 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                                </div>
                                <h4 className="font-bold mb-2">{t("teaser.card1.title")}</h4>
                                <p className="text-sm text-foreground/60">{t("teaser.card1.desc")}</p>
                            </div>

                            <div className="flex flex-col items-center text-center p-6 bg-surface rounded-2xl border border-gray-50 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-success/10 rounded-full flex items-center justify-center mb-4">
                                    <Radio className="h-6 w-6 text-success" />
                                </div>
                                <h4 className="font-bold mb-2">{t("teaser.card2.title")}</h4>
                                <p className="text-sm text-foreground/60">{t("teaser.card2.desc")}</p>
                            </div>

                            <div className="flex flex-col items-center text-center p-6 bg-surface rounded-2xl border border-gray-50 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                    <Lock className="h-6 w-6 text-accent" />
                                </div>
                                <h4 className="font-bold mb-2">{t("teaser.card3.title")}</h4>
                                <p className="text-sm text-foreground/60">{t("teaser.card3.desc")}</p>
                            </div>
                        </div>

                        <div className="flex justify-center mt-8 z-10 relative">
                            <button
                                onClick={onOpenModal}
                                className="group inline-flex items-center justify-center rounded-full bg-accent px-10 py-5 text-lg font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:scale-105 active:scale-95 shadow-lg shadow-accent/30"
                            >
                                {t("teaser.btn")}
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
