import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const halls = [
  {
    id: "submarine",
    name: "Подводная лодка",
    subtitle: "Тайна глубин",
    capacity: "до 6 человек",
    area: "42 м²",
    temp: "80–95°C",
    image: "https://cdn.poehali.dev/projects/91bcae67-c8e3-4fde-bd36-5f91aece798d/files/1ddb680c-0b99-44d4-a9a5-f2bab1b7346e.jpg",
    desc: "Погружение в атмосферу морских глубин. Стены из тёмного металла, иллюминаторы с подсветкой в цвете океанской воды, приборные панели в стиле ретро-флота. Особый микроклимат создаёт ощущение полного уединения от внешнего мира.",
    features: ["Парная с берёзовым паром", "Иллюминаторы с подсветкой", "Купель с ледяной водой", "Зона отдыха на 6 персон", "Мини-бар"],
    mood: "Таинственная · Камерная",
    color: "from-teal-950/80",
  },
  {
    id: "castle",
    name: "Замок",
    subtitle: "Рыцарский дух",
    capacity: "до 10 человек",
    area: "68 м²",
    temp: "85–100°C",
    image: "https://cdn.poehali.dev/projects/91bcae67-c8e3-4fde-bd36-5f91aece798d/files/f4a20fe1-1a3a-4d50-bd05-fb299127bdf0.jpg",
    desc: "Величественный зал в духе средневековых замков. Каменная кладка, готические своды, люстры из кованого железа со свечами. Просторная парная с дубовыми полками и купель в форме рыцарского щита.",
    features: ["Большая парная на 10 мест", "Дубовые полки", "Купель-бочка", "Каминная зона отдыха", "Банщик включён", "Стол для трапезы"],
    mood: "Торжественная · Просторная",
    color: "from-amber-950/80",
  },
  {
    id: "cave",
    name: "Пещера",
    subtitle: "Первобытный жар",
    capacity: "до 8 человек",
    area: "55 м²",
    temp: "75–90°C",
    image: "https://cdn.poehali.dev/projects/91bcae67-c8e3-4fde-bd36-5f91aece798d/files/a4474836-0e72-42bf-b64b-b0c233c318b6.jpg",
    desc: "Зал, выточенный в скале. Натуральный камень, янтарный свет факелов, запах хвои и разогретых трав. Парная с каменкой из вулканического базальта создаёт особый мягкий пар, богатый минеральными ионами.",
    features: ["Каменка из вулканического базальта", "Ароматерапия с травами", "Природный камень и скала", "Горячий источник", "Зона медитации"],
    mood: "Первобытная · Исцеляющая",
    color: "from-orange-950/80",
  },
  {
    id: "airship",
    name: "Дирижабль",
    subtitle: "Над облаками",
    capacity: "до 6 человек",
    area: "38 м²",
    temp: "80–95°C",
    image: "https://cdn.poehali.dev/projects/91bcae67-c8e3-4fde-bd36-5f91aece798d/files/37399e19-79df-4108-8421-2ea9948eaff3.jpg",
    desc: "Гондола небесного корабля. Дерево и латунь, кожаные диваны, круглые иллюминаторы с видом на облака, стимпанк-механизмы на стенах. Утончённый эстетский зал для ценителей редких ощущений.",
    features: ["Парная с хвойным паром", "Латунные детали и кожа", "Иллюминаторы с подсветкой", "Лаунж с коктейлями", "Граммофон и атмосфера эпохи"],
    mood: "Романтичная · Изысканная",
    color: "from-yellow-950/80",
  },
  {
    id: "ship",
    name: "Корабль",
    subtitle: "Морской бриз",
    capacity: "до 12 человек",
    area: "80 м²",
    temp: "85–100°C",
    image: "https://cdn.poehali.dev/projects/91bcae67-c8e3-4fde-bd36-5f91aece798d/files/49955d91-e5d6-4130-b937-7c3a9a00ad42.jpg",
    desc: "Самый большой зал клуба. Тиковые палубные доски, корабельные фонари, якоря и снасти. Атмосфера старинного парусника в открытом море. Идеально для больших компаний и корпоративных мероприятий.",
    features: ["Большая парная на 12 мест", "Бассейн-купель", "Зона барбекю на 12 персон", "Бар с морской картой", "Аренда банщика", "Развлекательная программа"],
    mood: "Просторная · Праздничная",
    color: "from-blue-950/80",
  },
  {
    id: "grotto",
    name: "Грот",
    subtitle: "Морская тайна",
    capacity: "до 4 человек",
    area: "28 м²",
    temp: "70–85°C",
    image: "https://cdn.poehali.dev/projects/91bcae67-c8e3-4fde-bd36-5f91aece798d/files/0473a09c-28dd-41ff-af09-267362f7f09c.jpg",
    desc: "Самый камерный и интимный зал. Грот у моря с бирюзовой купелью, освещённой изнутри. Мягкий пар, шёпот воды, сталактиты и кристаллы. Создан для двоих — идеально для романтических визитов.",
    features: ["Парная для 4 персон", "Купель с подсветкой", "Аромадиффузор с морской солью", "Уединённая зона отдыха", "Просекко в подарок"],
    mood: "Интимная · Романтичная",
    color: "from-cyan-950/80",
  },
];

export default function Halls() {
  const navigate = useNavigate();
  const [activeHall, setActiveHall] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const selected = halls.find((h) => h.id === activeHall);

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
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <span className="section-label">Пространства</span>
        <div className="gold-line mt-4" />
        <h1 className="font-display text-6xl lg:text-8xl font-light leading-none text-[hsl(40,20%,95%)] mt-2 mb-4">
          Наши <em>залы</em>
        </h1>
        <p className="text-[hsl(40,15%,50%)] text-sm font-light leading-relaxed max-w-xl tracking-wide">
          Шесть уникальных миров — каждый со своим характером, атмосферой и историей. Выберите то пространство, которое созвучно вашему настроению.
        </p>
      </section>

      {/* HALLS GRID */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {halls.map((hall) => (
            <button
              key={hall.id}
              onClick={() => setActiveHall(hall.id)}
              onMouseEnter={() => setHovered(hall.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative overflow-hidden text-left focus:outline-none"
              style={{ aspectRatio: "4/5" }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${hall.image})` }}
              />
              {/* Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${hall.color} via-transparent to-transparent opacity-90`} />
              <div className="absolute inset-0 bg-[hsl(20,10%,6%)]/40 group-hover:bg-[hsl(20,10%,6%)]/20 transition-colors duration-500" />

              {/* Border accent on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[hsl(43,65%,62%)]/40 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                {/* Capacity badge */}
                <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center gap-1.5 bg-[hsl(20,10%,6%)]/70 backdrop-blur-sm px-3 py-1.5 border border-[hsl(30,15%,20%)]">
                    <Icon name="Users" size={10} className="text-[hsl(43,65%,62%)]" />
                    <span className="text-[0.6rem] tracking-widest text-[hsl(40,15%,60%)] uppercase">{hall.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[hsl(20,10%,6%)]/70 backdrop-blur-sm px-3 py-1.5 border border-[hsl(30,15%,20%)]">
                    <Icon name="Thermometer" size={10} className="text-[hsl(43,65%,62%)]" />
                    <span className="text-[0.6rem] tracking-widest text-[hsl(40,15%,60%)] uppercase">{hall.temp}</span>
                  </div>
                </div>

                <span className="section-label text-[hsl(43,65%,62%)] mb-1">{hall.subtitle}</span>
                <h2 className="font-display text-3xl font-light text-[hsl(40,20%,95%)] mb-2">{hall.name}</h2>
                <p className="text-[hsl(40,15%,55%)] text-[0.65rem] tracking-widest uppercase font-sans">{hall.mood}</p>

                <div className="mt-4 flex items-center gap-2 text-[hsl(43,65%,62%)] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="text-[0.65rem] tracking-widest uppercase">Подробнее</span>
                  <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {activeHall && selected && (
        <div
          className="fixed inset-0 z-50 flex items-end lg:items-center justify-center p-0 lg:p-6"
          onClick={() => setActiveHall(null)}
        >
          <div className="absolute inset-0 bg-[hsl(20,10%,4%)]/80 backdrop-blur-sm" />
          <div
            className="relative w-full lg:max-w-4xl max-h-[92vh] overflow-y-auto bg-[hsl(20,10%,8%)] border border-[hsl(30,15%,16%)] animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image header */}
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${selected.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20,10%,8%)] via-[hsl(20,10%,8%)]/20 to-transparent" />
              <button
                onClick={() => setActiveHall(null)}
                className="absolute top-5 right-5 w-9 h-9 bg-[hsl(20,10%,6%)]/80 border border-[hsl(30,15%,20%)] flex items-center justify-center text-[hsl(40,15%,60%)] hover:text-[hsl(43,65%,62%)] transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 -mt-8 relative">
              <span className="section-label text-[hsl(43,65%,62%)]">{selected.subtitle}</span>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-[hsl(40,20%,95%)] mt-1 mb-4">{selected.name}</h2>

              {/* Specs row */}
              <div className="flex flex-wrap gap-4 mb-6">
                {[
                  { icon: "Users", val: selected.capacity },
                  { icon: "Maximize2", val: selected.area },
                  { icon: "Thermometer", val: selected.temp },
                ].map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[hsl(20,10%,11%)] border border-[hsl(30,15%,16%)] px-4 py-2">
                    <Icon name={spec.icon} fallback="CircleAlert" size={13} className="text-[hsl(43,65%,62%)]" />
                    <span className="text-xs text-[hsl(40,15%,60%)] tracking-wide">{spec.val}</span>
                  </div>
                ))}
              </div>

              <p className="text-[hsl(40,15%,58%)] text-sm leading-loose font-light mb-8">{selected.desc}</p>

              {/* Features */}
              <div className="mb-8">
                <p className="section-label mb-4">Включено</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selected.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Icon name="Check" size={12} className="text-[hsl(43,65%,62%)] shrink-0" />
                      <span className="text-xs text-[hsl(40,15%,60%)]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => { setActiveHall(null); navigate("/#booking"); }}
                  className="btn-gold flex-1 text-center"
                >
                  Забронировать этот зал
                </button>
                <button
                  onClick={() => setActiveHall(null)}
                  className="btn-outline"
                >
                  Закрыть
                </button>
              </div>
            </div>
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
