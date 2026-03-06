"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

interface TermsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
                            className="bg-surface rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col pointer-events-auto border border-primary/10 relative"
                        >
                            <div className="flex flex-col p-6 border-b border-primary/10">
                                <button
                                    onClick={onClose}
                                    className="inline-flex items-center text-primary-foreground hover:text-primary transition-colors mb-4 font-medium self-start"
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Вернуться на главную
                                </button>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-foreground">Договор оферты</h2>
                                        <p className="text-xs text-foreground/50 mt-1">Последнее обновление: {new Date().toLocaleDateString('ru-RU')}</p>
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
                                <div className="space-y-6 text-foreground/80 leading-relaxed text-sm sm:text-base">
                                    <p>Настоящий документ является публичной офертой проекта «Azhar Trading» (далее – «Исполнитель») и содержит все существенные условия договора на оказание информационно-консультационных услуг (далее – «Договор»).</p>

                                    <h3 className="text-lg font-bold text-foreground mt-6 mb-2">1. Предмет договора</h3>
                                    <p>1.1. Исполнитель обязуется оказать Заказчику услуги в виде предоставления доступа к онлайн-обучению, а Заказчик обязуется оплатить эти услуги (в случае платного доступа).</p>
                                    <p>1.2. Обучение включает в себя информацию и методики, связанные с трейдингом на финансовых рынках в соответствии с нормами Шариата.</p>

                                    <h3 className="text-lg font-bold text-foreground mt-6 mb-2">2. Права и обязанности</h3>
                                    <p><strong>2.1. Исполнитель обязан:</strong></p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Организовать и обеспечить надлежащее качество услуг.</li>
                                        <li>Предоставить доступ к обучающим материалам после оплаты.</li>
                                    </ul>
                                    <p className="mt-4"><strong>2.2. Заказчик обязан:</strong></p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Своевременно оплатить услуги.</li>
                                        <li>Не передавать доступ к обучающим материалам третьим лицам. Воспроизведение, копирование и распространение запрещено.</li>
                                    </ul>

                                    <h3 className="text-lg font-bold text-foreground mt-6 mb-2">3. Стоимость услуг</h3>
                                    <p>3.1. Стоимость платного обучающего курса «Профессия “Халяль-инвестор”» составляет 350 000 тенге.</p>
                                    <p>3.2. Участие в вводном вебинаре предоставляется бесплатно после прохождения регистрации.</p>

                                    <h3 className="text-lg font-bold text-foreground mt-6 mb-2">4. Ответственность</h3>
                                    <p>4.1. Исполнитель предоставляет информацию, результативность которой зависит от личных усилий Заказчика. Исполнитель не гарантирует получение определенного дохода, так как торговля на финансовых рынках сопряжена с рисками.</p>

                                    <h3 className="text-lg font-bold text-foreground mt-6 mb-2">5. Реквизиты Исполнителя</h3>
                                    <div className="bg-background/50 p-6 rounded-2xl border border-primary/5 mt-4">
                                        <p><strong>Azhar Trading (Ажар Ергожина)</strong></p>
                                        <p className="text-sm mt-2">Реквизиты ИП/ТОО в процессе регистрации.</p>
                                        <p className="text-sm mt-2"><strong>WhatsApp:</strong> <a href="https://wa.me/77774001518" target="_blank" rel="noreferrer" className="text-primary-foreground hover:underline">+7 777 400 1518</a></p>
                                        <p className="text-sm"><strong>Telegram:</strong> <a href="https://t.me/ustazatrading" target="_blank" rel="noreferrer" className="text-primary-foreground hover:underline">@ustazatrading</a></p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
