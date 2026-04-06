"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "@/i18n/LanguageContext";
import Image from "next/image";

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
    telegramLink: string;
    whatsappLink: string;
}

export function LeadModal({ isOpen, onClose, telegramLink, whatsappLink }: LeadModalProps) {
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            // Reset state when closed
            if (!isOpen) {
                setTimeout(() => {
                    setIsSuccess(false);
                    setIsSubmitting(false);
                }, 300);
            }
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "e4977ab6-9330-4a80-95c2-4baefc19e9c4",
            subject: "Новая заявка на вебинар!",
            from_name: "Azhar Trading Landing",
            ...object
        });

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            if (res.ok) {
                setIsSuccess(true);
            } else {
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error("Error submitting form", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />
                    <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 z-50 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-surface rounded-3xl shadow-2xl w-full max-w-md overflow-hidden pointer-events-auto border border-primary/10 relative"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-foreground/50 hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors z-10"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="p-8 pb-10">
                                {!isSuccess ? (
                                    <>
                                        <div className="text-center mb-8">
                                            <div className="w-20 h-20 relative rounded-full overflow-hidden mx-auto mb-4 border border-primary/20 shadow-md">
                                                <Image src="/avatar-new.jpg" alt="Azhar Trading" fill className="object-cover object-center" sizes="80px" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-foreground mb-2">{t("modal.title")}</h3>
                                            <p className="text-foreground/70 text-sm leading-relaxed">
                                                {t("modal.desc")}
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">{t("modal.name")}</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="Имя"
                                                    required
                                                    placeholder="Айгерим"
                                                    className="w-full px-4 py-3 rounded-xl bg-background border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="contact" className="block text-sm font-medium text-foreground/80 mb-1">{t("modal.phone")}</label>
                                                <input
                                                    type="text"
                                                    id="contact"
                                                    name="Контакты"
                                                    required
                                                    placeholder="+7 777 000 00 00"
                                                    className="w-full px-4 py-3 rounded-xl bg-background border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="group relative inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 mt-2 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-accent/20 w-full"
                                            >
                                                {isSubmitting ? t("modal.wait") : t("modal.btn")}
                                                {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
                                            </button>
                                                <p className="text-xs text-center text-foreground/50 mt-2">
                                                    {t("modal.privacyAgree")}
                                                </p>
                                        </form>
                                    </>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center"
                                    >
                                        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="h-10 w-10 text-success" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground mb-4">{t("modal.successTitle")}</h3>
                                        <p className="text-foreground/70 text-base leading-relaxed mb-8">
                                            {t("modal.successDesc")}
                                        </p>

                                        <div className="flex flex-col gap-4">
                                            <a
                                                href={whatsappLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3 w-full rounded-2xl bg-[#25D366] px-6 py-4 text-white font-semibold hover:bg-[#20BE5C] transition-colors shadow-lg shadow-[#25D366]/20"
                                            >
                                                <MessageCircle className="h-5 w-5" />
                                                {t("modal.whatsapp")}
                                            </a>

                                            <a
                                                href={telegramLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3 w-full rounded-2xl bg-[#0088cc] px-6 py-4 text-white font-semibold hover:bg-[#0077B5] transition-colors shadow-lg shadow-[#0088cc]/20"
                                            >
                                                <Send className="h-5 w-5 ml-[-2px]" />
                                                {t("modal.telegram")}
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
