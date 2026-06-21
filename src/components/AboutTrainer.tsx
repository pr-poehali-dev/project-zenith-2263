export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img src="https://cdn.poehali.dev/projects/bfa66001-7a53-421e-8096-75b9d76d3af7/files/ca708c0e-a1df-4c85-b354-b7ad2d925d83.jpg" alt="Адвокат Мамедова Елена Сергеевна" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">Об адвокате</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Мамедова Елена Сергеевна
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Более 20 лет в сфере юридических услуг. До получения статуса адвоката успешно работала
              в Следственном комитете, что даёт уникальный опыт в решении самых сложных дел.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              За годы практики Елена Сергеевна зарекомендовала себя как надёжный и результативный
              специалист. У адвоката есть собственная команда юристов с опытом более 8 лет, готовая
              помочь вам в любой ситуации с полным знанием всех нюансов.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Опыт работы в Следственном комитете</p>
                  <p className="text-sm text-muted-foreground">Знание системы изнутри</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Более 1500 выигранных дел</p>
                  <p className="text-sm text-muted-foreground">Результативность и надёжность</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Работа по договору</p>
                  <p className="text-sm text-muted-foreground">Прозрачность и конфиденциальность</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}