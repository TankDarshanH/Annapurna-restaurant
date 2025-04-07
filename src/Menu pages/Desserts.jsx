import { useCart } from "../CartContext";

const dessertItems = [
  {
    id: 36,
    image: "src/images/Desserts/gajar-halwa.jpg",
    title: "Gajar Halwa",
    price: 200,
    description: "250 grams",
  },
  {
    id: 37,
    image: "src/images/Desserts/Gulab Jamun.webp",
    title: "Gulab Jamun",
    price: 50,
    description: "2 pcs",
  },
  {
    id: 38,
    image: "src/images/Desserts/jalebi.webp",
    title: "Jalebi",
    price: 50,
    description: "250 gram",
  },
  {
    id: 39,
    image: "src/images/Desserts/kesar Pista Kulfi.JPG",
    title: "Kesar Pista Kulfi",
    price: 100,
    description: "2 pcs",
  },
  {
    id: 40,
    image: "src/images/Desserts/Kesar-pista-Shrikhand.jpg",
    title: "Kesar Pista Shrikhand",
    price: 150,
    description: "250 gram",
  },
  {
    id: 41,
    image: "src/images/Desserts/MangoPudding.jpg",
    title: "Mango Pudding",
    price: 300,
    description: "200 gram",
  },
  {
    id: 42,
    image: "src/images/Desserts/rasgulla.jpg",
    title: "Rasgulla",
    price: 200,
    description: "7 pc",
  },
];

const Desserts = () => {
  const { addToCart } = useCart(); // Get addToCart function from CartContext

  return (
    <section className="px-6 py-6">
      <h1 className="text-3xl font-bold text-black bg-amber-100 p-3 text-center rounded-lg">
        Desserts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {dessertItems.map((item) => (
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

export default Desserts;
