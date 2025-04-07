import { useCart } from "../CartContext";

const gujaratiItems = [
  {
    id: 1,
    image: "src/images/Gujrati-items/undhiyu.jpg",
    title: "Undhiyu Puri",
    price: 180,
    description: "Undhiyu - 250 grams, Puri 10 pc",
  },
  {
    id: 2,
    image: "src/images/Gujrati-items/Gujarati-thali.jpg",
    title: "Gujarati Thali",
    price: 250,
    description:
      "Sweet + 4 butter roti + 2 sabji + papad + dal-rice + salad + buttermilk",
  },
  {
    id: 3,
    image: "src/images/Gujrati-items/Patra.jpg",
    title: "Patra",
    price: 100,
    description: "250 gram",
  },
  {
    id: 4,
    image: "src/images/Gujrati-items/Thepala-Chundo.webp",
    title: "Thepala Chundo",
    price: 75,
    description: "Chundo - 100 grams, Thepala 3 pc",
  },
  {
    id: 5,
    image: "src/images/Gujrati-items/Bajara-rotalo & baigan bharta.jpg",
    title: "Bajara Rotalo & Baigan Bharta",
    price: 150,
    description: "Baigan Bharta - 250 grams, Rotalo 1 pc",
  },
  {
    id: 6,
    image: "src/images/Gujrati-items/Dal-dhokli.jpg",
    title: "Dal dhokli",
    price: 100,
    description: "250 gram",
  },
  {
    id: 7,
    image: "src/images/Gujrati-items/Gujarati-Kadhi-Rice.webp",
    title: "Kadhi Rice",
    price: 80,
    description: "Kadhi - 200 ml, Rice - 150 gram",
  },
];

const Gujarati = () => {
  const { addToCart } = useCart(); // Get the addToCart function

  return (
    <section className="px-6 py-6">
      <h1 className="text-3xl font-bold text-black bg-amber-100 p-3 text-center rounded-lg">
        Gujarati
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {gujaratiItems.map((item) => (
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

export default Gujarati;
