export function Testimonials() {
  const testimonials = [
    {
      name: "Анна Ковальская",
      role: "Уголовное дело",
      image: "/professional-woman-headshot.png",
      quote:
        "Елена Сергеевна взялась за моё дело, когда другие отказывались. Благодаря грамотной защите удалось добиться оправдания. Огромная благодарность за профессионализм!",
    },
    {
      name: "Максим Волков",
      role: "Гражданский спор",
      image: "/professional-man-headshot.png",
      quote:
        "Сложный имущественный спор решили в мою пользу. Адвокат и её команда вели дело от начала до конца, всегда были на связи и держали в курсе.",
    },
    {
      name: "Елена Родригес",
      role: "Семейное дело",
      image: "/professional-woman-smiling.png",
      quote:
        "Индивидуальный подход и честность — то, что отличает Елену Сергеевну. Чувствовала поддержку на каждом этапе. Рекомендую всем, кому нужна реальная помощь.",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Истории успеха</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Отзывы наших клиентов</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}