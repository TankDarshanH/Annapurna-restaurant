import { useCart } from "../CartContext";

const popularItems = [
  {
    id: 3,
    image: "src/images/Gujrati-items/Patra.jpg",
    title: "Patra",
    price: 100,
    description: "250 gram",
  },
  {
    id: 10,
    image: "src/images/Punjabi-items/dal-makhani.jpg",
    title: "Dal Makhani",
    price: 200,
    description: "500 gram",
  },
  {
    id: 11,
    image: "src/images/Punjabi-items/paneer-butter-masala.webp",
    title: "Paneer Butter Masala",
    price: 225,
    description: "400 gram",
  },
  {
    id: 15,
    image: "src/images/South-indian/Idli-Sambar.jpg",
    title: "Idli Sambar",
    price: 50,
    description: "Idli 3 pcs , 1 Portion Of Sambar",
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
    id: 29,
    image: "src/images/Rice & Biryani/Paneer Biryani.webp",
    title: "Paneer Biryani",
    price: 300,
    description:
      "Spiced paneer, fragrant basmati rice, herbs, and fried onions with raita (1 KG)",
  },
  {
    id: 41,
    image: "src/images/Desserts/MangoPudding.jpg",
    title: "Mango Pudding",
    price: 300,
    description: "200 gram",
  },
  {
    id: 45,
    image: "src/images/Beverages/mango-lassi.webp",
    title: "Mango Lassi",
    price: 75,
    description: "200 ml",
  },
];

const Popular = () => {
  const { addToCart } = useCart(); // Get addToCart function from CartContext

  return (
    <section className="px-6 py-6">
      <h1 className="text-3xl font-bold text-black bg-amber-100 p-3 text-center rounded-lg">
        Best Seller
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {popularItems.map((item) => (
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

export default Popular;
