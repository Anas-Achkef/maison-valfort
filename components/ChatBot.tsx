"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useVideo } from "@/contexts/VideoContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const { t, isRTL } = useLanguage();
  const { isVideoPlaying } = useVideo();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = [
    "Vos services ?",
    "Tarifs ?",
    "Contact ?",
  ];

  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: t.chatbot.welcome,
      },
    ]);
  }, [t.chatbot.welcome]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isLoading && isOpen) {
      inputRef.current?.focus();
    }
  }, [isLoading, isOpen]);

  const sendMessage = async (messageText?: string) => {
    const userMessage = (messageText || input).trim();
    if (!userMessage || isLoading) return;

    setInput("");
    setShowSuggestions(false);
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: userMessage }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: t.common.error,
          },
        ]);
      }
    } catch (error) {
      console.error("Erreur:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: t.common.error,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Ne pas afficher le chatbot quand la vidéo joue
  if (isVideoPlaying && !isOpen) {
    return null;
  }

  return (
    <>
      {/* Bouton flottant discret */}
      <AnimatePresence>
        {!isOpen && !isVideoPlaying && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className={`fixed bottom-6 ${isRTL ? "left-6" : "right-6"} z-50`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label={t.common.learnMore}
          >
            <div className="w-12 h-12 bg-bordeaux rounded-full flex items-center justify-center text-blanc hover:bg-bordeaux/90 hover:scale-110 transition-all shadow-lg shadow-bordeaux/30">
              <MessageCircle className="w-6 h-6" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Fenêtre de chat moderne */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed bottom-6 ${isRTL ? "left-6" : "right-6"} z-50 w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[80vh] flex flex-col overflow-hidden`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Conteneur avec effet glass */}
            <div className="relative w-full h-full bg-blanc/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-blanc/50 flex flex-col overflow-hidden">

              {/* Header moderne */}
              <div className="relative p-5 bg-gradient-to-r from-bordeaux via-bordeaux to-bordeaux/90 overflow-hidden">
                {/* Motif décoratif */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blanc rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-blanc rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className={`relative flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    {/* Avatar avec animation */}
                    <div className="relative">
                      <motion.div
                        className="w-12 h-12 bg-blanc/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                      >
                        <Sparkles className="w-6 h-6 text-blanc" />
                      </motion.div>
                      <motion.div
                        className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-bordeaux"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>

                    <div className={isRTL ? "text-right" : ""}>
                      <h3 className="font-cormorant text-blanc text-lg font-medium">
                        {"Assistant Valfort"}
                      </h3>
                      <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                        <span className="text-blanc/70 text-xs font-outfit">
                          {"En ligne • Répond instantanément"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 bg-blanc/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-blanc/80 hover:text-blanc hover:bg-blanc/20 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={t.common.close}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Zone des messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-creme/50 to-blanc">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex gap-3 ${
                      message.role === "user"
                        ? isRTL ? "flex-row-reverse justify-start" : "flex-row-reverse justify-start"
                        : isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Avatar */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${
                      message.role === "user"
                        ? "bg-bordeaux/10"
                        : "bg-gradient-to-br from-bordeaux to-bordeaux/80"
                    }`}>
                      {message.role === "user" ? (
                        <User className="w-4 h-4 text-bordeaux" />
                      ) : (
                        <Bot className="w-4 h-4 text-blanc" />
                      )}
                    </div>

                    {/* Bulle de message */}
                    <div
                      className={`max-w-[75%] p-4 text-sm font-outfit leading-relaxed ${
                        message.role === "user"
                          ? "bg-bordeaux text-blanc rounded-2xl rounded-tr-md"
                          : "bg-blanc text-noir/80 rounded-2xl rounded-tl-md shadow-sm border border-noir/5"
                      }`}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                ))}

                {/* Indicateur de frappe moderne */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-bordeaux to-bordeaux/80 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-blanc" />
                    </div>
                    <div className="bg-blanc rounded-2xl rounded-tl-md shadow-sm border border-noir/5 p-4 flex items-center gap-1">
                      <motion.span
                        className="w-2 h-2 bg-bordeaux/60 rounded-full"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-bordeaux/60 rounded-full"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-bordeaux/60 rounded-full"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions rapides */}
              <AnimatePresence>
                {showSuggestions && messages.length <= 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-5 pb-3"
                  >
                    <p className="text-xs text-noir/40 mb-2 font-outfit">
                      {"Questions fréquentes"}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                      {suggestions.map((suggestion, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => sendMessage(suggestion)}
                          className="px-4 py-2 bg-bordeaux/5 hover:bg-bordeaux/10 text-bordeaux text-xs font-outfit rounded-full border border-bordeaux/10 hover:border-bordeaux/20 transition-all flex items-center gap-1 group"
                        >
                          {suggestion}
                          <ArrowRight className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ${isRTL ? "rotate-180" : ""}`} />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Zone de saisie moderne */}
              <div className="p-4 bg-blanc border-t border-noir/5">
                <div className={`flex items-center gap-3 bg-creme rounded-2xl p-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={t.chatbot.placeholder}
                    className={`flex-1 px-4 py-3 bg-transparent text-noir placeholder:text-noir/30 focus:outline-none text-sm font-outfit ${isRTL ? "text-right" : ""}`}
                    disabled={isLoading}
                  />
                  <motion.button
                    onClick={() => sendMessage()}
                    disabled={isLoading || !input.trim()}
                    className="w-12 h-12 bg-gradient-to-br from-bordeaux to-bordeaux/80 text-blanc rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-bordeaux/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={t.chatbot.send}
                  >
                    <Send className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
                  </motion.button>
                </div>

                {/* Mention "Powered by" */}
                <p className="text-center text-[10px] text-noir/30 mt-3 font-outfit">
                  {"Propulsé par IA • Maison Valfort"}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
