import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const halls = [
  {
    id: "submarine",
    path: "/halls/submarine",
    name: "Подводная лодка",
    subtitle: "Тайна глубин",
    capacity: "до 6 человек",
    image: "https://tortuga.moscow/wp-content/uploads/2025/04/DSCF2219-1200x1600.jpg",
    mood: "Таинственная · Камерная",
    color: "from-teal-950/80",
  },
  {
    id: "castle",
    path: "/halls/castle",
    name: "Замок",
    subtitle: "Рыцарский дух",
    capacity: "до 8 человек",
    image: "https://tortuga.moscow/wp-content/uploads/2025/01/074-1200x801.jpg",
    mood: "Торжественная · Просторная",
    color: "from-amber-950/80",
  },
  {
    id: "cave",
    path: "/halls/cave",
    name: "Пещера",
    subtitle: "Первобытный жар",
    capacity: "до 8 человек",
    image: "https://tortuga.moscow/wp-content/uploads/2025/01/013-1200x801.jpg",
    mood: "Первобытная · Исцеляющая",
    color: "from-orange-950/80",
  },
  {
    id: "airship",
    path: "/halls/airship",
    name: "Дирижабль",
    subtitle: "Над облаками",
    capacity: "до 6 человек",
    image: "https://tortuga.moscow/wp-content/uploads/2024/12/061-1200x801.jpg",
    mood: "Романтичная · Изысканная",
    color: "from-yellow-950/80",
  },
  {
    id: "ship",
    path: "/halls/ship",
    name: "Корабль",
    subtitle: "Морской бриз",
    capacity: "до 12 человек",
    image: "https://tortuga.moscow/wp-content/uploads/2024/12/032-1200x801.jpg",
    mood: "Просторная · Праздничная",
    color: "from-blue-950/80",
  },
  {
    id: "grotto",
    path: "/halls/grotto",
    name: "Грот",
    subtitle: "Морская тайна",
    capacity: "до 4 человек",
    image: "https://tortuga.moscow/wp-content/uploads/2024/12/107-1200x801.jpg",
    mood: "Интимная · Романтичная",
    color: "from-cyan-950/80",
  },
];

export default function Halls() {
  const navigate = useNavigate();

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
              onClick={() => navigate(hall.path)}
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
