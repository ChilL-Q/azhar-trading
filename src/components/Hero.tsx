"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/i18n/LanguageContext";

interface HeroProps {
    onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
    const { t } = useTranslation();

    return (
        <section className="relative overflow-hidden bg-background pt-16 pb-20 lg:pt-36 lg:pb-40">
            {/* Soft gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-background z-0" />

            {/* Decorative gradients instead of heavy blur */}
            <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent z-0 pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-full sm:w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent z-0 pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-left space-y-8"
                    >
                        <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-background/60 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium text-primary-foreground shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-success"></span>
                            {t("hero.badge")}
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
                            {t("hero.title1")} <br className="hidden lg:block" />
                            {t("hero.title2")} <span className="text-primary-foreground">{t("hero.title3")}</span>{" "}
                            <span className="text-success uppercase">{t("hero.title4")}</span> {t("hero.title5")}
                        </h1>

                        <p className="text-lg sm:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
                            {t("hero.subtitle")}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                            <button
                                onClick={onOpenModal}
                                className="group relative inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:scale-105 active:scale-95 shadow-lg shadow-accent/30 w-full sm:w-auto"
                            >
                                {t("hero.btn")}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6 text-sm text-foreground/70 font-medium w-full">
                            <div className="flex items-center gap-3 text-left bg-success/10 border border-success/30 px-5 py-3 rounded-2xl w-full sm:w-auto shadow-sm">
                                <ShieldCheck className="h-6 w-6 text-success flex-shrink-0" />
                                <span className="text-base font-bold text-foreground">{t("hero.check1")}</span>
                            </div>
                            <div className="flex items-center gap-3 text-left bg-primary/5 border border-primary/20 px-5 py-3 rounded-2xl w-full sm:w-auto">
                                <TrendingUp className="h-6 w-6 text-primary-foreground flex-shrink-0" />
                                <span className="text-base font-semibold text-foreground">{t("hero.check2")}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex-1 relative w-full w-full max-w-lg lg:max-w-none"
                    >
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/20">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-foreground/40 to-transparent z-10 mix-blend-overlay" />
                            <Image
                                src="/uptrend-chart.png"
                                alt="Растущий график инвестиций"
                                fill
                                className="object-cover w-full h-full"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute bottom-6 left-6 right-6 z-20 bg-background/80 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-primary/10">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                                        <TrendingUp className="h-6 w-6 text-success" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm sm:text-base">{t("hero.cardTitle")}</p>
                                        <p className="text-xs sm:text-sm text-foreground/60">{t("hero.cardSubtitle")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
