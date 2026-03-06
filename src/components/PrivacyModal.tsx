"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

interface PrivacyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
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
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">Политика конфиденциальности</h2>
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
                                    <p>Настоящая Политика конфиденциальности описывает, как проект «Azhar Trading» (далее — «Проект», «мы», «наш», «нас») собирает, использует и защищает вашу личную информацию, когда вы используете наш веб-сайт и услуги.</p>

                                    <h3 className="text-lg font-bold text-foreground mt-6 mb-2">1. Сбор информации</h3>
                                    <p>Мы собираем информацию, которую вы предоставляете напрямую при заполнении форм на сайте, регистрации на вебинар или обращении в службу поддержки. Эта информация может включать:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Имя пользователя на платформе Telegram/WhatsApp</li>
                                        <li>Номер телефона</li>
                                        <li>Любую другую информацию, которую вы добровольно предоставляете при обращении к нам.</li>
                                    </ul>

                                    <h3 className="text-lg font-bold text-foreground mt-6 mb-2">2. Использование информации</h3>
                                    <p>Собранная информация используется в следующих целях:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Предоставление, поддержка и улучшение наших услуг (вебинары, обучающие курсы).</li>
                                        <li>Связь с вами для предоставления информации о курсах, ответа на ваши запросы и оказания поддержки.</li>
                                        <li>Отправка технических уведомлений, обновлений, предупреждений о безопасности.</li>
                                    </ul>

                                    <h3 className="text-lg font-bold text-foreground mt-6 mb-2">3. Обмен информации</h3>
                                    <p>Мы не продаем, не обмениваем и не передаем вашу личную информацию сторонним лицам без вашего согласия, за исключением случаев, предусмотренных действующим законодательством Республики Казахстан, или когда это необходимо для предоставления вам запрошенной услуги.</p>

                                    <h3 className="text-lg font-bold text-foreground mt-6 mb-2">4. Безопасность данных</h3>
                                    <p>Мы принимаем соответствующие меры безопасности для защиты вашей личной информации от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако ни один метод передачи данных через Интернет не является на 100% безопасным.</p>

                                    <h3 className="text-lg font-bold text-foreground mt-6 mb-2">5. Изменения</h3>
                                    <p>Мы можем время от времени обновлять нашу Политику конфиденциальности. Мы уведомим вас о любых изменениях, разместив новую Политику на этой странице.</p>

                                    <h3 className="text-lg font-bold text-foreground mt-6 mb-2">6. Контакты</h3>
                                    <p>Если у вас есть вопросы относительно настоящей Политики конфиденциальности, пожалуйста, свяжитесь с нами:</p>
                                    <ul className="list-none space-y-2 mt-4">
                                        <li><strong>WhatsApp:</strong> <a href="https://wa.me/77774001518" target="_blank" rel="noreferrer" className="text-primary-foreground hover:underline">+7 777 400 1518</a></li>
                                        <li><strong>Telegram:</strong> <a href="https://t.me/ustazatrading" target="_blank" rel="noreferrer" className="text-primary-foreground hover:underline">@ustazatrading</a></li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
