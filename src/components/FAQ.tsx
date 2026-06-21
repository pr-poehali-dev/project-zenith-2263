import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "С какими делами вы работаете?",
      answer:
        "Мы ведём как уголовные, так и гражданские дела: защита по уголовным обвинениям, имущественные и семейные споры, взыскание долгов, наследственные вопросы и многое другое.",
    },
    {
      question: "Как проходит первая консультация?",
      answer:
        "Вы оставляете заявку, мы связываемся с вами, изучаем вашу ситуацию и предлагаем эффективную стратегию защиты. Уже на первой встрече вы понимаете перспективы вашего дела.",
    },
    {
      question: "Работаете ли вы по договору?",
      answer:
        "Да, работа ведётся исключительно по договору. Это обеспечивает прозрачность, контроль и безопасность для клиента, а также гарантирует объём и качество услуг.",
    },
    {
      question: "Гарантируете ли вы конфиденциальность?",
      answer:
        "Безусловно. Адвокатская тайна и конфиденциальность соблюдаются на всех этапах работы — это основа нашей профессиональной деятельности.",
    },
    {
      question: "Кто будет вести моё дело?",
      answer:
        "Вашим делом занимается лично Елена Сергеевна вместе с собственной командой юристов и адвокатов с опытом более 8 лет. Это обеспечивает полное сопровождение на всех стадиях.",
    },
    {
      question: "Что входит в сопровождение?",
      answer:
        "Полное сопровождение — от первой консультации до окончательного решения вопроса: сбор доказательств, подготовка документов, представительство в суде и защита ваших интересов.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}