import { useCart } from "../CartContext";

const beveragesItems = [
  {
    id: 43,
    image: "/src/images/Beverages/badam-milk.webp",
    title: "Badam Milk",
    price: 60,
    description: "200 ml",
  },
  {
    id: 44,
    image: "/src/images/Beverages/cold-coffee.jpg",
    title: "Cold-Coffee",
    price: 250,
    description: "150 ml",
  },
  {
    id: 45,
    image: "/src/images/Beverages/mango-lassi.webp",
    title: "Mango Lassi",
    price: 75,
    description: "200 ml",
  },
  {
    id: 46,
    image: "/src/images/Beverages/Masala chhas (Buttermilk).jpg",
    title: "Masala Chhas",
    price: 35,
    description: "300 ml",
  },
  {
    id: 47,
    image: "/src/images/Beverages/mint-mojito.jpg",
    title: "Mint Mojito",
    price: 200,
    description: "190 ml",
  },
  {
    id: 48,
    image: "/src/images/Beverages/sprite.png",
    title: "Sprite",
    price: 10,
    description: "250 ml",
  },
  {
    id: 49,
    image: "/src/images/Beverages/Strawberry-Milkshake.jpg",
    title: "Strawberry Milkshake",
    price: 100,
    description: "300 ml",
  },
  {
    id: 50,
    image: "/src/images/Beverages/sugar-cane-juice.webp",
    title: "Sugarcane Juice",
    price: 40,
    description: "750 ml",
  },
];

const Beverages = () => {
  const { addToCart } = useCart(); // Get the addToCart function from CartContext

  return (
    <section className="px-6 py-6">
      <h1 className="text-3xl font-bold text-black bg-amber-100 p-3 text-center rounded-lg">
        Beverages
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {beveragesItems.map((item) => (
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

export default Beverages;
