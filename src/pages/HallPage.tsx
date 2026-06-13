import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface HallData {
  name: string;
  subtitle: string;
  desc: string;
  images: string[];
  capacity: string;
  area?: string;
  price: string;
  priceOld?: string;
  priceNote?: string;
  features: string[];
  slug: string;
}

interface HallPageProps {
  hall: HallData;
}

const allHalls = [
  { name: "Подводная лодка", path: "/halls/submarine" },
  { name: "Замок", path: "/halls/castle" },
  { name: "Пещера", path: "/halls/cave" },
  { name: "Дирижабль", path: "/halls/airship" },
  { name: "Корабль", path: "/halls/ship" },
  { name: "Грот", path: "/halls/grotto" },
];

export default function HallPage({ hall }: HallPageProps) {
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);

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
            onClick={() => navigate("/halls")}
            className="flex items-center gap-2 text-[hsl(40,15%,50%)] hover:text-[hsl(43,65%,62%)] transition-colors"
          >
            <Icon name="ArrowLeft" size={14} />
            <span className="text-xs tracking-widest uppercase font-sans">Все залы</span>
          </button>
        </div>
      </nav>

      {/* HERO IMAGE */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${hall.images[activeImg]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20,10%,6%)] via-[hsl(20,10%,6%)]/20 to-transparent" />

        {/* Hall name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 max-w-7xl mx-auto">
          <span className="section-label text-[hsl(43,65%,62%)]">{hall.subtitle}</span>
          <h1 className="font-display text-6xl lg:text-8xl font-light text-[hsl(40,20%,95%)] leading-none mt-1">
            {hall.name}
          </h1>
        </div>

        {/* Thumbnail nav */}
        {hall.images.length > 1 && (
          <div className="absolute bottom-8 right-8 lg:right-12 flex gap-2">
            {hall.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-12 h-8 bg-cover bg-center border transition-all duration-200 ${
                  i === activeImg
                    ? "border-[hsl(43,65%,62%)] opacity-100"
                    : "border-[hsl(30,15%,25%)] opacity-50 hover:opacity-75"
                }`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left: main content */}
          <div className="lg:col-span-2">
            <div className="gold-line mb-6" />
            <p className="text-[hsl(40,15%,60%)] text-sm leading-loose font-light mb-10">{hall.desc}</p>

            {/* Gallery grid */}
            {hall.images.length > 1 && (
              <div>
                <p className="section-label mb-6">Галерея</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {hall.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => { setActiveImg(i); setLightbox(true); }}
                      className="group relative aspect-video overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${img})` }}
                      />
                      <div className="absolute inset-0 bg-[hsl(20,10%,6%)]/0 group-hover:bg-[hsl(20,10%,6%)]/30 transition-colors duration-300 flex items-center justify-center">
                        <Icon name="ZoomIn" size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: sidebar */}
          <div className="space-y-6">
            {/* Price card */}
            <div className="bg-[hsl(20,10%,9%)] border border-[hsl(30,15%,14%)] p-7">
              <p className="section-label mb-3">Стоимость</p>
              {hall.priceOld && (
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[hsl(40,15%,35%)] text-sm line-through">{hall.priceOld} ₽</span>
                  <span className="text-[hsl(43,65%,62%)] text-[0.65rem] tracking-widest uppercase bg-[hsl(43,65%,62%)]/10 px-2 py-0.5">акция</span>
                </div>
              )}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display text-4xl text-[hsl(43,65%,62%)] font-light">{hall.price}</span>
                <span className="text-[hsl(40,15%,40%)] text-xs">₽ / час</span>
              </div>
              {hall.priceNote && (
                <p className="text-[hsl(40,15%,35%)] text-[0.65rem] mt-1">{hall.priceNote}</p>
              )}
              <button
                onClick={() => navigate("/#booking")}
                className="btn-gold w-full text-center mt-5 block"
              >
                Забронировать
              </button>
            </div>

            {/* Specs */}
            <div className="bg-[hsl(20,10%,9%)] border border-[hsl(30,15%,14%)] p-7">
              <p className="section-label mb-5">Характеристики</p>
              <div className="space-y-4">
                {[
                  { icon: "Users", label: "Вместимость", val: hall.capacity },
                  ...(hall.area ? [{ icon: "Maximize2", label: "Площадь", val: hall.area }] : []),
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-[hsl(30,15%,12%)] pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-2">
                      <Icon name={s.icon} fallback="CircleAlert" size={13} className="text-[hsl(43,65%,62%)]" />
                      <span className="text-xs text-[hsl(40,15%,45%)]">{s.label}</span>
                    </div>
                    <span className="text-xs text-[hsl(40,20%,80%)]">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-[hsl(20,10%,9%)] border border-[hsl(30,15%,14%)] p-7">
              <p className="section-label mb-5">Включено</p>
              <ul className="space-y-3">
                {hall.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="Check" size={12} className="text-[hsl(43,65%,62%)] mt-0.5 shrink-0" />
                    <span className="text-xs text-[hsl(40,15%,58%)]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-[hsl(20,10%,9%)] border border-[hsl(30,15%,14%)] p-7">
              <p className="section-label mb-4">Записаться</p>
              <a href="tel:+74951234567" className="flex items-center gap-3 text-[hsl(40,20%,80%)] hover:text-[hsl(43,65%,62%)] transition-colors mb-3">
                <Icon name="Phone" size={14} className="text-[hsl(43,65%,62%)]" />
                <span className="text-sm font-light">+7 (495) 123-45-67</span>
              </a>
              <p className="text-[hsl(40,15%,35%)] text-xs">Ежедневно 9:00 – 23:00</p>
            </div>
          </div>
        </div>

        {/* FORMATS */}
        <div className="mt-20 pt-16 border-t border-[hsl(30,15%,12%)]">
          <div className="text-center mb-12">
            <span className="section-label">Для любого повода</span>
            <div className="divider-gold my-4" />
            <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(40,20%,95%)]">
              Форматы <em>отдыха</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "Cake", title: "День рождения в сауне", desc: "Отмечайте особый день в кругу близких — камерная атмосфера, пар и праздничный стол." },
              { icon: "Music2", title: "Сауна с караоке", desc: "Пойте любимые песни, расслабляйтесь и заряжайтесь позитивом до утра." },
              { icon: "Waves", title: "Сауна с джакузи", desc: "Горячий пар и гидромассажные пузырьки — идеальное восстановление тела." },
              { icon: "Sparkles", title: "Девичник в сауне", desc: "Стильный вечер с подружками: баня, уход за собой и незабываемые воспоминания." },
              { icon: "Beer", title: "Сауна для мальчишника", desc: "Последняя вольная ночь в лучшем виде — пар, компания и полный комфорт." },
              { icon: "Hand", title: "Расслабляющий массаж", desc: "Профессиональный массаж после бани снимет напряжение и наполнит тело лёгкостью." },
              { icon: "Heart", title: "Идеальное свидание для двоих", desc: "Романтический вечер в уединённом зале — пар, тишина и атмосфера только для вас двоих." },
              { icon: "Briefcase", title: "Корпоративный отдых", desc: "Сплотите команду в неформальной обстановке — баня объединяет лучше любого тимбилдинга." },
              { icon: "Gift", title: "Подарок близкому", desc: "Подарите незабываемые впечатления — сертификат на посещение нашего клуба.", link: "/gifts" },
            ].map((format, i) => (
              <div
                key={i}
                className="group bg-[hsl(20,10%,9%)] border border-[hsl(30,15%,13%)] hover:border-[hsl(43,65%,62%)]/40 p-7 transition-colors duration-300"
              >
                <div className="w-9 h-9 border border-[hsl(43,65%,62%)]/30 group-hover:border-[hsl(43,65%,62%)] flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon name={format.icon} fallback="Star" size={15} className="text-[hsl(43,65%,62%)]" />
                </div>
                <h3 className="font-display text-lg font-light text-[hsl(40,20%,92%)] mb-2">{format.title}</h3>
                <p className="text-[hsl(40,15%,45%)] text-xs leading-relaxed">{format.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-[hsl(43,65%,62%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {"link" in format && format.link ? (
                    <button onClick={() => navigate(format.link!)} className="text-[0.65rem] tracking-widest uppercase">Выбрать сертификат</button>
                  ) : (
                    <button onClick={() => navigate("/#booking")} className="text-[0.65rem] tracking-widest uppercase">Забронировать</button>
                  )}
                  <Icon name="ArrowRight" size={10} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other halls */}
        <div className="mt-20 pt-12 border-t border-[hsl(30,15%,12%)]">
          <p className="section-label mb-8">Другие залы</p>
          <div className="flex flex-wrap gap-3">
            {allHalls
              .filter((h) => h.name !== hall.name)
              .map((h) => (
                <button
                  key={h.path}
                  onClick={() => navigate(h.path)}
                  className="btn-outline py-2 px-5 text-[0.65rem]"
                >
                  {h.name}
                </button>
              ))}
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[hsl(20,10%,4%)]/95 flex items-center justify-center p-4 lg:p-12"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-5 right-5 w-10 h-10 border border-[hsl(30,15%,25%)] flex items-center justify-center text-[hsl(40,15%,60%)] hover:text-[hsl(43,65%,62%)] transition-colors"
          >
            <Icon name="X" size={18} />
          </button>

          {activeImg > 0 && (
            <button
              className="absolute left-4 lg:left-8 w-10 h-10 border border-[hsl(30,15%,25%)] flex items-center justify-center text-[hsl(40,15%,60%)] hover:text-[hsl(43,65%,62%)] transition-colors"
              onClick={(e) => { e.stopPropagation(); setActiveImg(activeImg - 1); }}
            >
              <Icon name="ChevronLeft" size={18} />
            </button>
          )}

          <img
            src={hall.images[activeImg]}
            alt={hall.name}
            className="max-h-[85vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {activeImg < hall.images.length - 1 && (
            <button
              className="absolute right-4 lg:right-8 w-10 h-10 border border-[hsl(30,15%,25%)] flex items-center justify-center text-[hsl(40,15%,60%)] hover:text-[hsl(43,65%,62%)] transition-colors"
              onClick={(e) => { e.stopPropagation(); setActiveImg(activeImg + 1); }}
            >
              <Icon name="ChevronRight" size={18} />
            </button>
          )}

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[hsl(40,15%,35%)] text-xs tracking-widest">
            {activeImg + 1} / {hall.images.length}
          </div>
        </div>
      )}

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