import { useCart } from "../CartContext";

const fastfoodItems = [
  {
    id: 21,
    image: "src/images/Fast-food/pav-bhaji.jpg",
    title: "Pav Bhaji",
    price: 100,
    description: "2 soft pav with 200 gram bhaji",
  },
  {
    id: 22,
    image: "src/images/Fast-food/Vada Pav.jpg",
    title: "Vada Pav",
    price: 30,
    description:
      "A spicy potato fritter (vada) in a soft bun (pav), served with chutneys and fried chilies",
  },
  {
    id: 23,
    image: "src/images/Fast-food/sev-puri.jpg",
    title: "Sevpuri",
    price: 50,
    description:
      "Crispy puris topped with mashed potatoes, chopped onions, tangy chutneys, spicy masala, and a generous sprinkle of sev",
  },
  {
    id: 24,
    image: "src/images/Fast-food/Aloo Tikki Chaat.jpg",
    title: "Aloo Tikki Chaat",
    price: 40,
    description:
      "Crispy potato patties topped with yogurt, tangy chutneys, chopped onions, and sev",
  },
  {
    id: 25,
    image: "src/images/Fast-food/French-Fries.webp",
    title: "French Fries",
    price: 100,
    description:
      "Crispy, deep-fried potato sticks, lightly salted and often served with ketchup or dips",
  },
  {
    id: 26,
    image: "src/images/Fast-food/fried-momos.jpg",
    title: "Fried Momos",
    price: 100,
    description:
      "Crispy, deep-fried dumplings filled with spiced veggies, 10 pcs",
  },
  {
    id: 27,
    image: "src/images/Fast-food/hakka-noodles.jpg",
    title: "Hakka Noodles",
    price: 100,
    description:
      "Stir-fried noodles tossed with veggies, soy sauce, and spices",
  },
  {
    id: 28,
    image: "src/images/Fast-food/spring-roll.jpg",
    title: "Spring Roll",
    price: 150,
    description:
      "Crispy, deep-fried rolls filled with spiced veggies or noodles, served with tangy dipping sauce, 2 pcs",
  },
];

const Fastfood = () => {
  const { addToCart } = useCart(); // Get addToCart function from CartContext

  return (
    <section className="px-6 py-6">
      <h1 className="text-3xl font-bold text-black bg-amber-100 p-3 text-center rounded-lg">
        Fast-Food
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {fastfoodItems.map((item) => (
          <div
            key={item.id}
            className="max-w-[285px] mx-auto text-center shadow-2xl border border-black p-5 rounded-2xl bg-white mb-10"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-3xl w-60 h-60 object-cover"
            />
            <h1 className="text-red-600 font-semibold p-2">{item.title}</h1>
            <p className="font-bold">₹{item.price} </p>
            <p className="text-blue-600">{item.description}</p>
            <button
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg text-lg w-full"
              onClick={() =>
                addToCart({ id: item.id, name: item.title, price: item.price })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fastfood;
