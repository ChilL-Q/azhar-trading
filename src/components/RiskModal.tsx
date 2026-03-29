"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, AlertTriangle } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "@/i18n/LanguageContext";

interface RiskModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function RiskModal({ isOpen, onClose }: RiskModalProps) {
    const { t } = useTranslation();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                    />
                    <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 z-[60] pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-surface rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col pointer-events-auto border border-primary/10 relative text-foreground"
                        >
                            <div className="flex flex-col p-6 border-b border-primary/10 bg-background/50 rounded-t-3xl text-foreground">
                                <button
                                    onClick={onClose}
                                    className="inline-flex items-center text-primary-foreground hover:text-primary transition-colors mb-4 font-medium self-start"
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    {t("modal.close")}
                                </button>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-amber-500/10 rounded-lg">
                                            <AlertTriangle className="h-6 w-6 text-amber-500" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl sm:text-2xl font-bold">{t("disclaimer.title")}</h2>
                                            <p className="text-xs text-foreground/50 mt-1">{t("disclaimer.lastUpdated")}: {new Date().toLocaleDateString('ru-RU')}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="hidden sm:block p-2 text-foreground/50 hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors flex-shrink-0"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 overflow-y-auto">
                                <div className="space-y-6 leading-relaxed text-sm sm:text-base text-foreground/80">
                                    <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
                                        <p className="font-semibold text-amber-500 mb-2">{t("footer.risk_warning")}</p>
                                    </div>

                                    <p>{t("disclaimer.p1")}</p>
                                    <p>{t("disclaimer.p2")}</p>
                                    <p>{t("disclaimer.p3")}</p>
                                    <p>{t("disclaimer.p4")}</p>
                                    <p>{t("disclaimer.p5")}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
