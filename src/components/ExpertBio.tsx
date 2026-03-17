"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { PhotoGallery } from "./PhotoGallery";
import { useTranslation } from "@/i18n/LanguageContext";
import Image from "next/image";

export function ExpertBio() {
    const { t } = useTranslation();
    return (
        <section id="about" className="py-12 md:py-24 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent z-0 opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent z-0 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 relative w-full max-w-md mx-auto lg:mx-0"
                    >
                        <div className="relative aspect-[3/4] sm:aspect-square md:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                            <Image
                                src="/avatar-new.jpg"
                                alt="Ажар Ергожина"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                                <div className="inline-flex items-center justify-center bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                                    {t("expert.badge")}
                                </div>
                                <h3 className="text-2xl font-bold">Ажар Ергожина</h3>
                                <p className="text-white/80">{t("expert.role")}</p>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -left-2 sm:-left-8 top-8 sm:top-12 bg-surface p-3 sm:p-4 rounded-2xl shadow-xl border border-primary/5 z-30 transform scale-90 sm:scale-100 origin-left"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 bg-success/10 rounded-full flex items-center justify-center">
                                    <BookOpen className="h-6 w-6 text-success" />
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">{t("expert.years")}</p>
                                    <p className="text-sm text-foreground/60">{t("expert.yearsText")}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Text Side */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                                {t("expert.title1")} <span className="text-primary-foreground">{t("expert.title2")}</span>
                            </h2>
                            <p className="text-xl sm:text-2xl font-medium text-foreground/80 leading-relaxed mb-10">
                                {t("expert.desc")}
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex gap-5"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                        <GraduationCap className="h-6 w-6 text-primary-foreground" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{t("expert.eduTitle")}</h4>
                                    <ul className="text-foreground/70 leading-relaxed space-y-2 list-disc list-inside">
                                        <li>{t("expert.edu1")} <span className="font-semibold text-foreground">{t("expert.edu1bold")}</span> <span className="text-success font-medium">{t("expert.edu1red")}</span></li>
                                        <li>{t("expert.edu2")}</li>
                                        <li><span className="font-semibold text-success">{t("expert.edu3")}</span> {t("expert.edu3date")}</li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-5"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                                        <Award className="h-6 w-6 text-accent" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{t("expert.leadersTitle")}</h4>
                                    <p className="text-foreground/70 leading-relaxed mb-2">
                                        {t("expert.leadersDesc")}
                                    </p>
                                    <ul className="text-foreground/70 leading-relaxed space-y-1 list-disc list-inside">
                                        <li><span className="font-semibold text-foreground">{t("expert.leaders1Name")}</span> {t("expert.leaders1Desc")}</li>
                                        <li><span className="font-semibold text-foreground">{t("expert.leaders2Name")}</span> {t("expert.leaders2Desc")}</li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex gap-5"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center border border-success/20">
                                        <BookOpen className="h-6 w-6 text-success" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{t("expert.formatTitle")}</h4>
                                    <p className="text-foreground/70 leading-relaxed">
                                        {t("expert.formatDesc1")} <strong>{t("expert.formatDesc2")}</strong>. {t("expert.formatDesc3")} <strong>{t("expert.formatDesc4")}</strong>.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>

                {/* Full Width Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-20 lg:mt-32 max-w-5xl mx-auto"
                >
                    <div className="p-8 sm:p-12 lg:p-16 bg-surface rounded-[2.5rem] border border-primary/20 relative overflow-hidden shadow-2xl text-center">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                        <p className="text-xl sm:text-2xl lg:text-3xl text-foreground font-medium leading-relaxed italic tracking-wide">
                            &quot;{t("expert.quote")}&quot;
                        </p>
                    </div>
                </motion.div>

                {/* Photo Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-12 md:mt-20 lg:mt-32"
                >
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-center mb-10 text-foreground uppercase tracking-wider">{t("expert.galleryTitle")}</h3>
                    <PhotoGallery />
                </motion.div>

            </div>
        </section>
    );
}
