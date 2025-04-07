import { useCart } from "../CartContext";

const southIndianItems = [
  {
    id: 14,
    image: "src/images/South-indian/South Indian Thali.jpg",
    title: "South Indian Thali",
    price: 300,
    description:
      "Sambar, rasam, poriyal, kootu, avial, curd, papadam, pickles, and payasam, served with steamed rice",
  },
  {
    id: 15,
    image: "src/images/South-indian/Idli-Sambar.jpg",
    title: "Idli Sambar",
    price: 50,
    description: "Idli 3 pcs, 1 Portion Of Sambar",
  },
  {
    id: 16,
    image: "src/images/South-indian/masala-dosa.webp",
    title: "Masala Dosa",
    price: 100,
    description:
      "Masala Dosa with 1 Portion Of Sambar, Coconut Chutney And Tomato Chutney.",
  },
  {
    id: 17,
    image: "src/images/South-indian/Meduvada-sambar.jpg",
    title: "Meduvada Sambar",
    price: 60,
    description: "Meduvada 3 pcs, 1 Portion Of Sambar",
  },
  {
    id: 18,
    image: "src/images/South-indian/chese-spring-dosa.webp",
    title: "Cheese Spring Dosa",
    price: 150,
    description:
      "Crispy dosa filled with a flavorful mix of veggies, spices, and gooey melted cheese, served with coconut chutney and spicy sambar",
  },
  {
    id: 19,
    image: "src/images/South-indian/Rava-dosa.jpg",
    title: "Rava Dosa",
    price: 100,
    description:
      "Made from semolina (rava), rice flour, and spices. Light and flavorful, it’s served with coconut chutney and spicy sambar",
  },
  {
    id: 20,
    image: "src/images/South-indian/onion-tomato-uttapam.jpg",
    title: "Onion Tomato Uttapam",
    price: 125,
    description:
      "Indian pancake topped with juicy tomatoes, onions, and spices, served with coconut chutney and flavorful sambar",
  },
];

const SouthIndian = () => {
  const { addToCart } = useCart(); // Get addToCart function from CartContext

  return (
    <section className="px-6 py-6">
      <h1 className="text-3xl font-bold text-black bg-amber-100 p-3 text-center rounded-lg">
        South Indian
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {southIndianItems.map((item) => (
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
            <p className="font-bold">₹{item.price}</p>
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

export default SouthIndian;
