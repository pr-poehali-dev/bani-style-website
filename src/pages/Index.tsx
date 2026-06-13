import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/91bcae67-c8e3-4fde-bd36-5f91aece798d/files/1ce35f38-a84e-463c-a433-7d07cff676cd.jpg";
const POOL_IMG = "https://cdn.poehali.dev/projects/91bcae67-c8e3-4fde-bd36-5f91aece798d/files/726cc443-2a99-4fcc-9383-a0b3b9659df7.jpg";
const MASSAGE_IMG = "https://cdn.poehali.dev/projects/91bcae67-c8e3-4fde-bd36-5f91aece798d/files/75eaaeb2-3a34-49cc-88e1-7bcefa275887.jpg";

const services = [
  {
    icon: "Flame",
    title: "Русская баня",
    desc: "Классическая парная с берёзовыми вениками и заботливым банщиком. Температура 80–100°C, влажность 40–70%.",
    duration: "2 часа",
  },
  {
    icon: "Droplets",
    title: "Хамам",
    desc: "Турецкая мраморная баня с паровым прогревом, мыльным массажем и кесе-пилингом.",
    duration: "1.5 часа",
  },
  {
    icon: "Sparkles",
    title: "СПА-программы",
    desc: "Индивидуальные ритуалы с использованием натуральных масел, трав и минеральных составов.",
    duration: "от 1 часа",
  },
  {
    icon: "Heart",
    title: "Массаж",
    desc: "Классический, тайский, стоун-массаж. Снятие напряжения и глубокое восстановление.",
    duration: "60 / 90 мин",
  },
  {
    icon: "Waves",
    title: "Бассейн и джакузи",
    desc: "Плавательный бассейн с минеральной водой и гидромассажная ванна с морской солью.",
    duration: "Без ограничений",
  },
  {
    icon: "Wine",
    title: "Ресторан",
    desc: "Авторская кухня с лёгкими блюдами, натуральными соками, травяными чаями и винной картой.",
    duration: "До 23:00",
  },
];

const prices = [
  {
    name: "Стандарт",
    subtitle: "Будни",
    price: "3 500",
    period: "/ 2 часа",
    features: ["Русская баня", "Бассейн", "Зона отдыха", "Травяной чай"],
    featured: false,
  },
  {
    name: "Премиум",
    subtitle: "Будни и выходные",
    price: "6 900",
    period: "/ 3 часа",
    features: ["Русская баня + хамам", "Бассейн и джакузи", "Массаж 60 мин", "Лёгкие закуски", "Банщик включён"],
    featured: true,
  },
  {
    name: "VIP-кабина",
    subtitle: "Приватно",
    price: "12 000",
    period: "/ 3 часа",
    features: ["Отдельная кабина", "Все зоны СПА", "СПА-ритуал 90 мин", "Ужин на двоих", "Персональный банщик"],
    featured: false,
  },
];

const stats = [
  { number: "12+", label: "лет опыта" },
  { number: "8", label: "зон СПА" },
  { number: "4 800", label: "гостей в месяц" },
  { number: "98%", label: "довольных гостей" },
];

export default function Index() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeReviewTab, setActiveReviewTab] = useState("yandex");
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    persons: "2",
    comment: "",
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 4000);
    setBooking({ name: "", phone: "", date: "", time: "", service: "", persons: "2", comment: "" });
  };

  return (
    <div className="bg-[hsl(20,10%,6%)] text-[hsl(40,20%,92%)] min-h-screen">

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(20,10%,6%)]/90 backdrop-blur-sm border-b border-[hsl(30,15%,12%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[hsl(43,65%,62%)] flex items-center justify-center">
              <span className="font-display text-[hsl(43,65%,62%)] text-sm font-light italic">Т</span>
            </div>
            <span className="font-display text-xl tracking-widest uppercase text-[hsl(40,20%,92%)]">Тортуга</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { id: "about", label: "О клубе" },
              { id: "services", label: "Услуги" },
              { id: "prices", label: "Прайс" },
              { id: "contacts", label: "Контакты" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link">
                {item.label}
              </button>
            ))}
            <button onClick={() => navigate("/halls")} className="nav-link">
              Залы
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+74951234567" className="nav-link flex items-center gap-2">
              <Icon name="Phone" size={12} />
              <span>+7 (495) 123-45-67</span>
            </a>
            <button onClick={() => scrollTo("booking")} className="btn-gold text-xs py-2 px-5">
              Записаться
            </button>
          </div>

          <button className="md:hidden text-[hsl(40,20%,70%)]" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[hsl(20,10%,7%)] border-t border-[hsl(30,15%,12%)] px-6 py-6 flex flex-col gap-5">
            {[
              { id: "about", label: "О клубе" },
              { id: "services", label: "Услуги" },
              { id: "prices", label: "Прайс" },
              { id: "booking", label: "Записаться" },
              { id: "contacts", label: "Контакты" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link text-left text-sm">
                {item.label}
              </button>
            ))}
            <button onClick={() => navigate("/halls")} className="nav-link text-left text-sm">
              Залы
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 overlay-gradient" />
        <div className="absolute inset-0 bg-[hsl(20,10%,6%)]/30" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28">
          <div className="max-w-2xl animate-fade-up">
            <span className="section-label mb-4 block">Спа-клуб · Москва</span>
            <h1 className="font-display text-7xl lg:text-9xl font-light leading-none tracking-tight mb-6 text-[hsl(40,20%,95%)]">
              Тортуга
            </h1>
            <p className="font-sans text-sm font-light leading-relaxed text-[hsl(40,20%,70%)] max-w-md mb-10 tracking-wide">
              Место, где время замедляется. Премиальный банный клуб с многовековыми традициями и современным искусством расслабления.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo("booking")} className="btn-gold">
                Забронировать визит
              </button>
              <button onClick={() => scrollTo("services")} className="btn-outline">
                Наши услуги
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-2 text-[hsl(40,20%,40%)]">
          <span className="section-label text-[0.6rem] rotate-90 tracking-widest">scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[hsl(43,65%,62%)] to-transparent" />
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[hsl(20,10%,8%)] border-y border-[hsl(30,15%,12%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl lg:text-5xl text-[hsl(43,65%,62%)] font-light mb-1">{s.number}</div>
                <div className="section-label text-[hsl(40,15%,40%)]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div
                className="aspect-[4/5] bg-cover bg-center"
                style={{ backgroundImage: `url(${POOL_IMG})` }}
              />
              <div className="absolute -bottom-6 -right-6 bg-[hsl(43,65%,62%)] p-6 hidden lg:block">
                <div className="font-display text-4xl text-[hsl(20,10%,6%)] font-light">12</div>
                <div className="text-[hsl(20,10%,6%)] text-xs tracking-widest uppercase font-medium">лет традиций</div>
              </div>
            </div>

            <div>
              <span className="section-label">О клубе</span>
              <div className="gold-line mt-4" />
              <h2 className="font-display text-5xl lg:text-6xl font-light leading-tight mb-8 text-[hsl(40,20%,95%)]">
                Искусство<br />
                <em>банного ритуала</em>
              </h2>
              <p className="text-[hsl(40,15%,60%)] text-sm leading-loose mb-6 font-light tracking-wide">
                Спа-клуб «Тортуга» — это камерное пространство для тех, кто ценит подлинное качество. Мы объединили лучшие традиции русской бани, турецкого хамама и современного велнеса в единый опыт восстановления.
              </p>
              <p className="text-[hsl(40,15%,60%)] text-sm leading-loose mb-10 font-light tracking-wide">
                Каждая деталь интерьера, каждая процедура и каждое взаимодействие с нашей командой создаёт ощущение исключительности. Мы принимаем не более 30 гостей одновременно, чтобы обеспечить полное погружение и персональное внимание.
              </p>
              <div className="grid grid-cols-2 gap-5 mb-10">
                {[
                  { icon: "MapPin", text: "Центр Москвы, 5 мин от метро" },
                  { icon: "Clock", text: "Ежедневно с 9:00 до 23:00" },
                  { icon: "Users", text: "Только 30 гостей одновременно" },
                  { icon: "Award", text: "Лучший СПА Москвы 2023" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon name={item.icon} fallback="CircleAlert" size={14} className="text-[hsl(43,65%,62%)] mt-0.5 shrink-0" />
                    <span className="text-xs text-[hsl(40,15%,55%)] leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => scrollTo("booking")} className="btn-outline">
                Запланировать визит
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-36 bg-[hsl(20,10%,8%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="section-label">Услуги</span>
            <div className="divider-gold my-4" />
            <h2 className="font-display text-5xl lg:text-6xl font-light text-[hsl(40,20%,95%)]">
              Наши <em>процедуры</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(30,15%,12%)]">
            {services.map((service, i) => (
              <div key={i} className="service-card p-8 lg:p-10 bg-[hsl(20,10%,8%)]">
                <div className="mb-6">
                  <Icon name={service.icon} fallback="CircleAlert" size={24} className="text-[hsl(43,65%,62%)]" />
                </div>
                <h3 className="font-display text-2xl font-light mb-3 text-[hsl(40,20%,95%)]">{service.title}</h3>
                <p className="text-[hsl(40,15%,50%)] text-xs leading-relaxed mb-6 font-light">{service.desc}</p>
                <div className="flex items-center gap-2 text-[hsl(43,65%,62%)]">
                  <Icon name="Clock" size={11} />
                  <span className="text-xs tracking-wide">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="relative h-80 lg:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${MASSAGE_IMG})` }}
        />
        <div className="absolute inset-0 bg-[hsl(20,10%,6%)]/70" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="section-label mb-4">Философия</p>
            <blockquote className="font-display text-3xl lg:text-5xl font-light italic text-[hsl(40,20%,95%)] max-w-2xl leading-snug">
              «Баня — это не роскошь,<br />это необходимость для души»
            </blockquote>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="section-label">Цены</span>
            <div className="divider-gold my-4" />
            <h2 className="font-display text-5xl lg:text-6xl font-light text-[hsl(40,20%,95%)]">
              Прайс-лист
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {prices.map((plan, i) => (
              <div key={i} className={`price-card p-8 lg:p-10 relative ${plan.featured ? "featured" : ""}`}>
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(43,65%,62%)] text-[hsl(20,10%,6%)] text-[0.6rem] font-semibold tracking-widest uppercase px-4 py-1">
                    Популярное
                  </div>
                )}
                <div className="mb-2">
                  <span className="section-label text-[hsl(40,15%,40%)]">{plan.subtitle}</span>
                </div>
                <h3 className="font-display text-2xl text-[hsl(40,20%,95%)] mb-6">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="font-display text-4xl text-[hsl(43,65%,62%)] font-light">{plan.price}</span>
                  <span className="text-xs text-[hsl(40,15%,45%)]">₽ {plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Icon name="Check" size={12} className="text-[hsl(43,65%,62%)] mt-0.5 shrink-0" />
                      <span className="text-xs text-[hsl(40,15%,55%)] leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollTo("booking")}
                  className={plan.featured ? "btn-gold w-full text-center block" : "btn-outline w-full text-center block"}
                >
                  Выбрать
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-[hsl(40,15%,30%)] text-xs mt-8 tracking-wide">
            Стоимость указана на человека. Возможно индивидуальное ценообразование для групп от 4 человек.
          </p>
        </div>
      </section>

      {/* FORMATS */}
      <section className="py-24 lg:py-36 bg-[hsl(20,10%,8%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="section-label">Для любого повода</span>
            <div className="divider-gold my-4" />
            <h2 className="font-display text-5xl lg:text-6xl font-light text-[hsl(40,20%,95%)]">
              Форматы <em>отдыха</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "Cake", title: "День рождения в сауне", desc: "Отмечайте особый день в кругу близких — камерная атмосфера, пар и праздничный стол." },
              { icon: "Music2", title: "Сауна с караоке", desc: "Пойте любимые песни, расслабляйтесь в паре и заряжайтесь позитивом до утра." },
              { icon: "Waves", title: "Сауна с джакузи", desc: "Сочетание горячего пара и гидромассажных пузырьков — идеальное восстановление тела." },
              { icon: "Sparkles", title: "Девичник в сауне", desc: "Стильный вечер с подружками: баня, уход за собой и незабываемые воспоминания." },
              { icon: "Beer", title: "Сауна для мальчишника", desc: "Последняя вольная ночь в лучшем виде — пар, компания и полный комфорт." },
              { icon: "Hand", title: "Расслабляющий массаж", desc: "Профессиональный массаж после бани снимет напряжение и наполнит тело лёгкостью." },
              { icon: "Heart", title: "Идеальное свидание для двоих", desc: "Романтический вечер в уединённом зале — пар, тишина и атмосфера только для вас двоих." },
              { icon: "Briefcase", title: "Корпоративный отдых", desc: "Сплотите команду в неформальной обстановке — баня объединяет лучше любого тимбилдинга." },
              { icon: "Gift", title: "Подарок близкому", desc: "Подарите незабываемые впечатления — сертификат на посещение нашего клуба." },
            ].map((format, i) => (
              <div
                key={i}
                className="group bg-[hsl(20,10%,6%)] border border-[hsl(30,15%,13%)] hover:border-[hsl(43,65%,62%)]/40 p-8 transition-colors duration-300"
              >
                <div className="w-10 h-10 border border-[hsl(43,65%,62%)]/30 group-hover:border-[hsl(43,65%,62%)] flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon name={format.icon} fallback="Star" size={16} className="text-[hsl(43,65%,62%)]" />
                </div>
                <h3 className="font-display text-xl font-light text-[hsl(40,20%,92%)] mb-3">{format.title}</h3>
                <p className="text-[hsl(40,15%,45%)] text-xs leading-relaxed">{format.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-[hsl(43,65%,62%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })} className="text-[0.65rem] tracking-widest uppercase">Забронировать</button>
                  <Icon name="ArrowRight" size={10} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 lg:py-36 bg-[hsl(20,10%,8%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="section-label">Отзывы</span>
            <div className="divider-gold my-4" />
            <h2 className="font-display text-5xl lg:text-6xl font-light text-[hsl(40,20%,95%)]">
              Говорят <em>гости</em>
            </h2>
          </div>

          {(() => {
            const platforms = [
              {
                id: "yandex",
                label: "Яндекс Карты",
                rating: "4.9",
                href: "https://yandex.ru/profile/1101315474?",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8 2H10.5C7.46 2 5 4.46 5 7.5c0 2.36 1.38 4.4 3.38 5.38L5.1 22h3.12l3.1-8.7h1.1V22H15.5V2h-1.7zm0 8.8h-1.18L10.5 4h3.3v6.8z" fill="#FC3F1D"/>
                  </svg>
                ),
                reviews: [
                  { name: "Алина К.", date: "март 2024", rating: 5, text: "Невероятная атмосфера. Пришла впервые и сразу влюбилась — персонал внимательный, баня настоящая, с паром и вениками. Массаж на высшем уровне. Теперь хожу каждые две недели." },
                  { name: "Марина С.", date: "январь 2024", rating: 5, text: "Хамам здесь — лучший в Москве, это без преувеличений. Мрамор настоящий, тепло равномерное, мыльный массаж делают профессионально. Бассейн после процедур — отдельное удовольствие." },
                  { name: "Ольга П.", date: "ноябрь 2023", rating: 5, text: "Подарила мужу сертификат на Премиум — он был в восторге. Говорит, что это лучший подарок за несколько лет. Теперь ходим вместе раз в месяц. Спасибо за качество!" },
                ],
              },
              {
                id: "google",
                label: "Google",
                rating: "4.8",
                href: "#",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                ),
                reviews: [
                  { name: "Дмитрий В.", date: "февраль 2024", rating: 5, text: "Брали зал на двоих с женой на годовщину — остались в полном восторге. Банщик, ритуал с маслами. Ощущение, что побывали в другом измерении. Рекомендую всем." },
                  { name: "Антон М.", date: "октябрь 2023", rating: 5, text: "Приятно удивлён сервисом. Небольшое количество гостей создаёт ощущение частного клуба. Не как в общественной бане — тихо, уютно, можно реально расслабиться." },
                  { name: "Екатерина Н.", date: "сентябрь 2023", rating: 5, text: "Отмечали девичник в зале Корабль — просто огонь! Всё было организовано идеально, персонал внимательный, пар отличный. Девочки в восторге, уже планируем следующий визит." },
                ],
              },
              {
                id: "zoon",
                label: "Zoon",
                rating: "4.9",
                href: "#",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#FF4D00"/>
                    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="Arial">zoon</text>
                  </svg>
                ),
                reviews: [
                  { name: "Сергей Л.", date: "декабрь 2023", rating: 5, text: "Давно искал место, где можно нормально попариться в центре. Тут всё есть: хороший пар, холодный бассейн, зона отдыха. Обслуживание без единого замечания. Приеду снова." },
                  { name: "Наталья Р.", date: "январь 2024", rating: 5, text: "Были с мужем в зале Грот — атмосфера невероятная, как будто попал в другой мир. Купель с подсветкой, мягкий пар, полная тишина. Это то, что нужно после напряжённой недели." },
                  { name: "Павел Д.", date: "март 2024", rating: 5, text: "Корпоратив провели в зале Замок — коллеги до сих пор вспоминают. Вместительно, уютно, банщик профессионал. Руководство оценило нестандартный формат. Всем советую." },
                ],
              },
            ];
            const current = platforms.find(p => p.id === activeReviewTab)!;
            return (
              <>
                {/* Tab bar */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {platforms.map(p => (
                    <button
                      key={p.id}
                      onClick={() => setActiveReviewTab(p.id)}
                      className={`flex items-center gap-3 px-5 py-3 border transition-colors duration-200 ${
                        activeReviewTab === p.id
                          ? "border-[hsl(43,65%,62%)] bg-[hsl(20,10%,10%)]"
                          : "border-[hsl(30,15%,16%)] bg-[hsl(20,10%,10%)] hover:border-[hsl(43,65%,62%)]/50"
                      }`}
                    >
                      {p.icon}
                      <div className="text-left">
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map(s => <span key={s} className="text-[hsl(43,65%,62%)] text-xs">★</span>)}
                        </div>
                        <div className="text-[hsl(40,15%,45%)] text-[0.65rem] tracking-wide mt-0.5">{p.rating} · {p.label}</div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Reviews grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {current.reviews.map((review, i) => (
                    <div key={i} className="bg-[hsl(20,10%,9%)] border border-[hsl(30,15%,13%)] p-6 relative">
                      <div className="absolute top-5 right-5 opacity-40">{current.icon}</div>
                      <div className="flex gap-0.5 mb-4">
                        {Array.from({ length: review.rating }).map((_, s) => (
                          <span key={s} className="text-[hsl(43,65%,62%)] text-sm">★</span>
                        ))}
                      </div>
                      <p className="text-[hsl(40,15%,58%)] text-xs leading-relaxed font-light mb-5">{review.text}</p>
                      <div className="flex items-center gap-3 pt-4 border-t border-[hsl(30,15%,12%)]">
                        <div className="w-7 h-7 bg-[hsl(30,15%,16%)] flex items-center justify-center text-[hsl(43,65%,62%)] font-display text-sm">
                          {review.name[0]}
                        </div>
                        <div>
                          <div className="text-xs text-[hsl(40,20%,80%)] font-medium">{review.name}</div>
                          <div className="text-[0.65rem] text-[hsl(40,15%,38%)]">{review.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Link to platform */}
                <div className="text-center mt-10">
                  <a
                    href={current.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[hsl(40,15%,40%)] hover:text-[hsl(43,65%,62%)] transition-colors text-xs tracking-widest uppercase"
                  >
                    <span>Читать все отзывы на {current.label}</span>
                    <Icon name="ArrowRight" size={12} />
                  </a>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 lg:py-36 bg-[hsl(20,10%,8%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <span className="section-label">Бронирование</span>
              <div className="gold-line mt-4" />
              <h2 className="font-display text-5xl lg:text-6xl font-light leading-tight mb-6 text-[hsl(40,20%,95%)]">
                Онлайн-<br /><em>запись</em>
              </h2>
              <p className="text-[hsl(40,15%,55%)] text-sm leading-loose mb-10 font-light">
                Оставьте заявку — мы перезвоним в течение 15 минут для подтверждения. Для групп свыше 4 человек предусмотрены специальные условия.
              </p>
              <div className="space-y-5">
                {[
                  { icon: "Phone", text: "+7 (495) 123-45-67", sub: "Звонки и WhatsApp" },
                  { icon: "Mail", text: "hello@tortuga.moscow", sub: "Электронная почта" },
                  { icon: "MapPin", text: "Москва, ул. Пречистенка, 12", sub: "5 мин от м. Кропоткинская" },
                  { icon: "Clock", text: "Ежедневно 9:00 – 23:00", sub: "Последняя запись в 21:00" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 border border-[hsl(30,15%,20%)] flex items-center justify-center shrink-0">
                      <Icon name={item.icon} fallback="CircleAlert" size={14} className="text-[hsl(43,65%,62%)]" />
                    </div>
                    <div>
                      <div className="text-sm text-[hsl(40,20%,85%)] font-light">{item.text}</div>
                      <div className="text-xs text-[hsl(40,15%,40%)] mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[hsl(20,10%,9%)] border border-[hsl(30,15%,14%)] p-8 lg:p-10">
              {bookingSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-14 h-14 border border-[hsl(43,65%,62%)] flex items-center justify-center mb-6">
                    <Icon name="Check" size={24} className="text-[hsl(43,65%,62%)]" />
                  </div>
                  <h3 className="font-display text-3xl text-[hsl(40,20%,95%)] mb-3">Заявка принята</h3>
                  <p className="text-[hsl(40,15%,50%)] text-sm font-light">Мы позвоним вам в течение 15 минут для подтверждения визита.</p>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-4">
                  <h3 className="font-display text-2xl text-[hsl(40,20%,95%)] mb-6">Оставить заявку</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      className="input-dark"
                      placeholder="Ваше имя"
                      value={booking.name}
                      onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                      required
                    />
                    <input
                      className="input-dark"
                      placeholder="Телефон"
                      type="tel"
                      value={booking.phone}
                      onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      className="input-dark"
                      type="date"
                      value={booking.date}
                      onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                      required
                    />
                    <div className="relative">
                      <select
                        className="select-dark"
                        value={booking.time}
                        onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                        required
                      >
                        <option value="">Время визита</option>
                        {["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <Icon name="ChevronDown" size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-[hsl(40,15%,40%)] pointer-events-none" />
                    </div>
                  </div>
                  <div className="relative">
                    <select
                      className="select-dark"
                      value={booking.service}
                      onChange={(e) => setBooking({ ...booking, service: e.target.value })}
                      required
                    >
                      <option value="">Выберите услугу</option>
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                    <Icon name="ChevronDown" size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-[hsl(40,15%,40%)] pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select
                      className="select-dark"
                      value={booking.persons}
                      onChange={(e) => setBooking({ ...booking, persons: e.target.value })}
                    >
                      {["1","2","3","4","5+"].map((n) => (
                        <option key={n} value={n}>{n === "5+" ? "5 и более человек" : `${n} ${n === "1" ? "человек" : "человека"}`}</option>
                      ))}
                    </select>
                    <Icon name="ChevronDown" size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-[hsl(40,15%,40%)] pointer-events-none" />
                  </div>
                  <textarea
                    className="input-dark resize-none"
                    rows={3}
                    placeholder="Пожелания или комментарии"
                    value={booking.comment}
                    onChange={(e) => setBooking({ ...booking, comment: e.target.value })}
                  />
                  <button type="submit" className="btn-gold w-full mt-2">
                    Отправить заявку
                  </button>
                  <p className="text-[hsl(40,15%,30%)] text-[0.65rem] text-center tracking-wide">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 lg:py-36 border-t border-[hsl(30,15%,12%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="section-label">Контакты</span>
            <div className="divider-gold my-4" />
            <h2 className="font-display text-5xl lg:text-6xl font-light text-[hsl(40,20%,95%)]">
              Как нас <em>найти</em>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: "MapPin",
                title: "Адрес",
                lines: ["Москва, ул. Пречистенка, 12", "5 мин от м. Кропоткинская"],
              },
              {
                icon: "Phone",
                title: "Телефон",
                lines: ["+7 (495) 123-45-67", "+7 (985) 987-65-43"],
              },
              {
                icon: "Clock",
                title: "Режим работы",
                lines: ["Ежедневно: 09:00 – 23:00", "Последняя запись в 21:00"],
              },
            ].map((item, i) => (
              <div key={i} className="bg-[hsl(20,10%,8%)] border border-[hsl(30,15%,12%)] p-8 text-center">
                <div className="w-12 h-12 border border-[hsl(30,15%,20%)] flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} fallback="CircleAlert" size={18} className="text-[hsl(43,65%,62%)]" />
                </div>
                <h3 className="font-display text-xl text-[hsl(40,20%,95%)] mb-3">{item.title}</h3>
                {item.lines.map((line, j) => (
                  <p key={j} className={`font-light ${j === 0 ? "text-sm text-[hsl(40,15%,65%)]" : "text-xs text-[hsl(40,15%,40%)] mt-1"}`}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="bg-[hsl(20,10%,8%)] border border-[hsl(30,15%,12%)] h-64 flex items-center justify-center">
            <div className="text-center">
              <Icon name="Map" size={32} className="text-[hsl(43,65%,62%)] mx-auto mb-3" />
              <p className="text-[hsl(40,15%,40%)] text-xs tracking-wide">Москва, ул. Пречистенка, 12</p>
              <p className="text-[hsl(40,15%,30%)] text-xs mt-1">м. Кропоткинская · 5 минут пешком</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(20,10%,5%)] border-t border-[hsl(30,15%,12%)] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 border border-[hsl(43,65%,62%)] flex items-center justify-center">
                <span className="font-display text-[hsl(43,65%,62%)] text-xs italic">Т</span>
              </div>
              <span className="font-display text-lg tracking-widest uppercase text-[hsl(40,20%,70%)]">Тортуга</span>
            </div>
            <div className="flex items-center gap-6">
              {[
                { id: "about", label: "О клубе" },
                { id: "services", label: "Услуги" },
                { id: "prices", label: "Прайс" },
                { id: "contacts", label: "Контакты" },
              ].map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link text-[0.65rem]">
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 border border-[hsl(30,15%,18%)] flex items-center justify-center text-[hsl(40,15%,45%)] hover:border-[hsl(43,65%,62%)] hover:text-[hsl(43,65%,62%)] transition-colors">
                <Icon name="MessageCircle" size={14} />
              </a>
              <a href="#" className="w-8 h-8 border border-[hsl(30,15%,18%)] flex items-center justify-center text-[hsl(40,15%,45%)] hover:border-[hsl(43,65%,62%)] hover:text-[hsl(43,65%,62%)] transition-colors">
                <Icon name="Instagram" size={14} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-[hsl(30,15%,10%)] text-center">
            <p className="text-[hsl(40,15%,28%)] text-[0.65rem] tracking-widest uppercase">
              © 2024 Спа-клуб Тортуга · Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}