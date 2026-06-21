import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Booking() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.")
  }

  return (
    <section id="booking" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Нужна помощь адвоката?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Запишитесь на консультацию</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Опишите свою ситуацию — Елена Сергеевна свяжется с вами и предложит эффективную стратегию защиты
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Оставьте заявку</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Ваше имя</label>
                <Input required placeholder="Как к вам обращаться" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Телефон</label>
                <Input required type="tel" placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Опишите ситуацию</label>
                <Textarea rows={4} placeholder="Кратко расскажите, с каким вопросом обращаетесь" />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base py-6"
              >
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                ✓ Конфиденциально • ✓ Перезвоним в течение часа • ✓ Без обязательств
              </p>
            </form>
          </div>

          {/* Contacts Section */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Контакты</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-xl">📞</div>
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <p className="font-semibold text-foreground">+7 (___) ___-__-__</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-xl">✉️</div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">mamedova@example.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-xl">📍</div>
                <div>
                  <p className="text-sm text-muted-foreground">Адрес офиса</p>
                  <p className="font-semibold text-foreground">Укажите ваш адрес</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-xl">🕒</div>
                <div>
                  <p className="text-sm text-muted-foreground">Режим работы</p>
                  <p className="font-semibold text-foreground">Пн–Пт 9:00–19:00</p>
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-5 mt-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Работа ведётся исключительно по договору — это обеспечивает прозрачность, контроль
                  и безопасность для каждого клиента.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}