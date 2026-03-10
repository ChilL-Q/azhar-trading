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
        <section className="py-12 md:py-24 bg-surface relative overflow-hidden">

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
                        className="bg-surface rounded-3xl p-6 sm:p-12 shadow-2xl border border-primary/10 relative overflow-hidden"
                    >
                        {/* Soft decorative header inside card */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-success via-primary-foreground to-accent" />

                        <div className="text-center mb-8 sm:mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                                {t("teaser.title")}
                            </h2>
                            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                                {t("teaser.desc")}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center gap-x-2 gap-y-8 sm:gap-10 mb-8 sm:mb-10 text-center relative z-10 p-2">
                            {/* Card 1 */}
                            <div className="flex flex-col items-center group justify-start w-full sm:w-auto">
                                <div className="h-28 w-28 sm:h-32 sm:w-32 bg-background/60 backdrop-blur-md rounded-full flex flex-col items-center justify-center mb-2 sm:mb-4 border border-primary/20 shadow-lg group-hover:scale-105 group-hover:bg-primary/10 transition-all duration-300">
                                    <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-primary-foreground mb-1" />
                                </div>
                                <h4 className="font-bold text-base sm:text-lg mb-1" dangerouslySetInnerHTML={{ __html: t("teaser.card1.title") }} />
                                <p className="text-sm text-foreground/70 max-w-[150px] leading-tight sm:leading-normal" dangerouslySetInnerHTML={{ __html: t("teaser.card1.desc") }} />
                            </div>

                            {/* Card 2 */}
                            <div className="flex flex-col items-center group justify-start w-full sm:w-auto">
                                <div className="h-28 w-28 sm:h-32 sm:w-32 bg-background/60 backdrop-blur-md rounded-full flex flex-col items-center justify-center mb-2 sm:mb-4 border border-success/20 shadow-lg group-hover:scale-105 group-hover:bg-success/10 transition-all duration-300">
                                    <Radio className="h-8 w-8 sm:h-10 sm:w-10 text-success mb-1" />
                                </div>
                                <h4 className="font-bold text-base sm:text-lg mb-1" dangerouslySetInnerHTML={{ __html: t("teaser.card2.title") }} />
                                <p className="text-sm text-foreground/70 max-w-[150px] leading-tight sm:leading-normal" dangerouslySetInnerHTML={{ __html: t("teaser.card2.desc") }} />
                            </div>

                            {/* Card 3 */}
                            <div className="flex flex-col items-center group justify-start col-span-2 sm:col-auto w-full sm:w-auto">
                                <div className="h-28 w-28 sm:h-32 sm:w-32 bg-background/60 backdrop-blur-md rounded-full flex flex-col items-center justify-center mb-2 sm:mb-4 border border-accent/20 shadow-lg group-hover:scale-105 group-hover:bg-accent/10 transition-all duration-300">
                                    <Lock className="h-8 w-8 sm:h-10 sm:w-10 text-accent mb-1" />
                                </div>
                                <h4 className="font-bold text-base sm:text-lg mb-1" dangerouslySetInnerHTML={{ __html: t("teaser.card3.title") }} />
                                <p className="text-sm text-foreground/70 max-w-[150px] leading-tight sm:leading-normal" dangerouslySetInnerHTML={{ __html: t("teaser.card3.desc") }} />
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
