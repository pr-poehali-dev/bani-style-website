import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const certificates = [
  {
    amount: 15000,
    label: "15 000 ₽",
    tag: "Начало",
    desc: "Идеально для одного визита — позвольте близкому человеку самому выбрать зал и время.",
    highlight: false,
  },
  {
    amount: 25000,
    label: "25 000 ₽",
    tag: "Популярный",
    desc: "Покроет аренду зала на вечер для двоих с запасом на банщика или массаж.",
    highlight: false,
  },
  {
    amount: 50000,
    label: "50 000 ₽",
    tag: "Выбор гостей",
    desc: "Полноценный отдых компанией — зал, ужин, банный ритуал и незабываемые эмоции.",
    highlight: true,
  },
  {
    amount: 75000,
    label: "75 000 ₽",
    tag: "Премиум",
    desc: "Несколько визитов или один роскошный вечер с полным комплексом услуг клуба.",
    highlight: false,
  },
  {
    amount: 100000,
    label: "100 000 ₽",
    tag: "VIP",
    desc: "Эксклюзивный подарок — целый день в клубе, все залы в распоряжении, персональный банщик.",
    highlight: false,
  },
  {
    amount: 200000,
    label: "200 000 ₽",
    tag: "Безграничный",
    desc: "Безлимитное удовольствие — дарите самое дорогое: время, роскошь и заботу без ограничений.",
    highlight: false,
  },
];

const benefits = [
  { icon: "CalendarDays", text: "Срок действия 12 месяцев с даты выдачи" },
  { icon: "Wallet", text: "Можно использовать частями на несколько визитов" },
  { icon: "Users", text: "Действует для любого зала и числа гостей" },
  { icon: "Gift", text: "Красивое оформление — готово к вручению" },
  { icon: "Phone", text: "Доставка или самовывоз — на выбор" },
  { icon: "RefreshCw", text: "Обменять или вернуть в течение 14 дней" },
];

export default function Gifts() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", recipient: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-[hsl(20,10%,6%)] text-[hsl(40,20%,92%)] min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(20,10%,6%)]/90 backdrop-blur-sm border-b border-[hsl(30,15%,12%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[hsl(43,65%,62%)] flex items-center justify-center">
              <span className="font-display text-[hsl(43,65%,62%)] text-sm font-light italic">Т</span>
            </div>
            <span className="font-display text-xl tracking-widest uppercase text-[hsl(40,20%,92%)]">Тортуга</span>
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[hsl(40,15%,50%)] hover:text-[hsl(43,65%,62%)] transition-colors"
          >
            <Icon name="ArrowLeft" size={14} />
            <span className="text-xs tracking-widest uppercase font-sans">На главную</span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-36 pb-16 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <span className="section-label">Подарки</span>
        <div className="divider-gold my-4" />
        <h1 className="font-display text-6xl lg:text-8xl font-light leading-none text-[hsl(40,20%,95%)] mb-6">
          Подарочные <em>сертификаты</em>
        </h1>
        <p className="text-[hsl(40,15%,50%)] text-sm font-light leading-relaxed max-w-2xl mx-auto tracking-wide">
          Подарите близкому человеку не вещь, а ощущение — тепло, расслабление и время для себя в уникальных залах Тортуги.
        </p>
      </section>

      {/* CERTIFICATES GRID */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert) => (
            <button
              key={cert.amount}
              onClick={() => setSelected(cert.amount === selected ? null : cert.amount)}
              className={`group relative text-left p-8 border transition-all duration-300 focus:outline-none ${
                cert.highlight
                  ? "border-[hsl(43,65%,62%)] bg-[hsl(20,10%,9%)]"
                  : selected === cert.amount
                  ? "border-[hsl(43,65%,62%)]/60 bg-[hsl(20,10%,9%)]"
                  : "border-[hsl(30,15%,14%)] bg-[hsl(20,10%,9%)] hover:border-[hsl(43,65%,62%)]/40"
              }`}
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className={`text-[0.6rem] tracking-widest uppercase px-2 py-1 ${
                  cert.highlight
                    ? "bg-[hsl(43,65%,62%)] text-[hsl(20,10%,8%)]"
                    : "bg-[hsl(30,15%,14%)] text-[hsl(43,65%,62%)]"
                }`}>
                  {cert.tag}
                </span>
                {selected === cert.amount && (
                  <div className="w-5 h-5 border border-[hsl(43,65%,62%)] flex items-center justify-center">
                    <Icon name="Check" size={10} className="text-[hsl(43,65%,62%)]" />
                  </div>
                )}
              </div>

              {/* Amount */}
              <div className="mb-4">
                <span className="font-display text-5xl font-light text-[hsl(40,20%,95%)]">
                  {cert.amount.toLocaleString("ru-RU")}
                </span>
                <span className="text-[hsl(40,15%,40%)] text-lg ml-1">₽</span>
              </div>

              {/* Divider */}
              <div className="w-8 h-px bg-[hsl(43,65%,62%)]/40 mb-4" />

              {/* Desc */}
              <p className="text-[hsl(40,15%,50%)] text-xs leading-relaxed">{cert.desc}</p>

              {/* Select hint */}
              <div className={`mt-6 flex items-center gap-2 text-[hsl(43,65%,62%)] text-[0.65rem] tracking-widest uppercase transition-opacity duration-300 ${
                selected === cert.amount ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}>
                <span>{selected === cert.amount ? "Выбрано" : "Выбрать"}</span>
                <Icon name={selected === cert.amount ? "CheckCircle" : "ArrowRight"} size={11} />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[hsl(20,10%,8%)] py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="section-label text-center mb-10">Условия сертификата</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[hsl(43,65%,62%)]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name={b.icon} fallback="Check" size={13} className="text-[hsl(43,65%,62%)]" />
                </div>
                <p className="text-[hsl(40,15%,55%)] text-xs leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Оформление</span>
            <div className="divider-gold my-4" />
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(40,20%,95%)]">
              Заказать <em>сертификат</em>
            </h2>
          </div>

          {sent ? (
            <div className="text-center py-16 border border-[hsl(43,65%,62%)]/30 bg-[hsl(20,10%,9%)]">
              <div className="w-12 h-12 border border-[hsl(43,65%,62%)] flex items-center justify-center mx-auto mb-6">
                <Icon name="Check" size={20} className="text-[hsl(43,65%,62%)]" />
              </div>
              <h3 className="font-display text-2xl font-light text-[hsl(40,20%,92%)] mb-3">Заявка принята</h3>
              <p className="text-[hsl(40,15%,50%)] text-sm">Мы свяжемся с вами в течение 15 минут для подтверждения.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Selected cert display */}
              {selected && (
                <div className="flex items-center justify-between border border-[hsl(43,65%,62%)]/40 bg-[hsl(20,10%,9%)] px-5 py-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Icon name="Gift" size={14} className="text-[hsl(43,65%,62%)]" />
                    <span className="text-xs text-[hsl(40,15%,60%)] tracking-wide">Выбран сертификат на</span>
                  </div>
                  <span className="font-display text-xl text-[hsl(43,65%,62%)] font-light">
                    {selected.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
              )}
              {!selected && (
                <p className="text-[hsl(43,65%,62%)] text-xs tracking-wide text-center mb-2">
                  ↑ Выберите номинал сертификата выше
                </p>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="section-label block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[hsl(20,10%,9%)] border border-[hsl(30,15%,16%)] focus:border-[hsl(43,65%,62%)] px-4 py-3 text-sm text-[hsl(40,20%,85%)] outline-none transition-colors placeholder:text-[hsl(40,15%,30%)]"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2">Телефон</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[hsl(20,10%,9%)] border border-[hsl(30,15%,16%)] focus:border-[hsl(43,65%,62%)] px-4 py-3 text-sm text-[hsl(40,20%,85%)] outline-none transition-colors placeholder:text-[hsl(40,15%,30%)]"
                  />
                </div>
              </div>

              <div>
                <label className="section-label block mb-2">Имя получателя (необязательно)</label>
                <input
                  type="text"
                  placeholder="Кому вручите сертификат"
                  value={form.recipient}
                  onChange={e => setForm({ ...form, recipient: e.target.value })}
                  className="w-full bg-[hsl(20,10%,9%)] border border-[hsl(30,15%,16%)] focus:border-[hsl(43,65%,62%)] px-4 py-3 text-sm text-[hsl(40,20%,85%)] outline-none transition-colors placeholder:text-[hsl(40,15%,30%)]"
                />
              </div>

              <div>
                <label className="section-label block mb-2">Комментарий</label>
                <textarea
                  rows={3}
                  placeholder="Пожелания к оформлению, способ получения..."
                  value={form.comment}
                  onChange={e => setForm({ ...form, comment: e.target.value })}
                  className="w-full bg-[hsl(20,10%,9%)] border border-[hsl(30,15%,16%)] focus:border-[hsl(43,65%,62%)] px-4 py-3 text-sm text-[hsl(40,20%,85%)] outline-none transition-colors placeholder:text-[hsl(40,15%,30%)] resize-none"
                />
              </div>

              <button type="submit" className="btn-gold w-full mt-2">
                Оформить сертификат
              </button>

              <p className="text-center text-[hsl(40,15%,30%)] text-[0.65rem] tracking-wide">
                Нажимая кнопку, вы соглашаетесь с условиями клуба
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(20,10%,5%)] border-t border-[hsl(30,15%,12%)] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[hsl(40,15%,28%)] text-[0.65rem] tracking-widest uppercase">
            © 2024 Спа-клуб Тортуга · Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}
