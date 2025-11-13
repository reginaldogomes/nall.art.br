"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo padrão é de 3 a 7 dias úteis, dependendo da complexidade do projeto.",
  },
  {
    question: "Posso pedir revisões?",
    answer:
      "Sim, nossos pacotes incluem de 1 a 3 rodadas de revisão para garantir que o resultado final esteja perfeito.",
  },
  {
    question: "A licença de uso é comercial?",
    answer:
      "Sim, todas as vinhetas vêm com direitos de uso comercial, permitindo que você as utilize em qualquer plataforma.",
  },
  {
    question: "A locução está inclusa?",
    answer:
      "A locução é opcional e está inclusa nos planos Pro e Premium. Também podemos produzir a vinheta sem locução, se preferir.",
  },
];

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

export const FaqVinhetas = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-zinc-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          {...fadeIn(0)}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-12"
        >
          Perguntas Frequentes
        </motion.h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              {...fadeIn(0.2 * (index + 1))}
              className="bg-zinc-800/50 border border-zinc-700 p-6 rounded-lg"
            >
              <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2">
                {faq.question}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
