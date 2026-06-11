import HallPage from "@/pages/HallPage";

export default function Submarine() {
  return (
    <HallPage
      hall={{
        name: "Подводная лодка",
        subtitle: "Тайна глубин",
        slug: "submarine",
        price: "уточняйте",
        capacity: "до 6 человек",
        area: "уточняйте",
        desc: "Добро пожаловать в уникальный мир релакса и удовольствия! Зал «Подводная лодка» оформлен в стиле морской тематики, где каждая деталь подчёркивает атмосферу субмарины. Здесь вы сможете насладиться не только комфортом и уютом, но и окунуться в мир удивительных водных процедур. Неповторимая атмосфера подводного мира, уединение и полный релакс — всё это ждёт вас в этом уникальном зале.",
        features: [
          "Русская баня с берёзовым паром",
          "Джакузи с морской солью",
          "Зона отдыха в морском стиле",
          "Иллюминаторы с подсветкой",
          "Холодный душ",
          "Мини-бар",
        ],
        images: [
          "https://tortuga.moscow/wp-content/uploads/2025/04/DSCF2219-1200x1600.jpg",
          "https://tortuga.moscow/wp-content/uploads/2025/04/DSCF2219-1536x2048.jpg",
          "https://tortuga.moscow/wp-content/uploads/2025/04/DSCF2219-1152x1536.jpg",
          "https://tortuga.moscow/wp-content/uploads/2025/04/DSCF2219-768x1024.jpg",
        ],
      }}
    />
  );
}
