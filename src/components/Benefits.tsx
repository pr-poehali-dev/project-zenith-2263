export function Benefits() {
  const benefits = [
    {
      icon: "⚖️",
      title: "20+ лет опыта",
      description: "Более 20 лет в юриспруденции и опыт работы в Следственном комитете",
    },
    {
      icon: "🏆",
      title: "1500+ выигранных дел",
      description: "Богатое портфолио успешно завершённых уголовных и гражданских дел",
    },
    {
      icon: "👥",
      title: "Команда профессионалов",
      description: "Собственный штат юристов и адвокатов с опытом более 8 лет",
    },
    {
      icon: "📜",
      title: "Работа по договору",
      description: "Прозрачность, контроль и безопасность для клиента на всех этапах",
    },
    {
      icon: "🎯",
      title: "Индивидуальный подход",
      description: "Разработка эффективных стратегий защиты под вашу ситуацию",
    },
    {
      icon: "🔒",
      title: "Полное сопровождение",
      description: "От первой консультации до окончательного решения вопроса",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Почему именно нас выбирают</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Защита, на которую можно положиться
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Опыт, результат и команда профессионалов, которая защитит ваши интересы максимально качественно
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}