import { useCart } from "../CartContext";

// Image imports
import alooParatha from "../images/Punjabi-items/Aloo Paratha with Curd & Pickle.jpg";
import choleBhature from "../images/Punjabi-items/chole-bhature.jpg";
import dalMakhani from "../images/Punjabi-items/dal-makhani.jpg";
import paneerButterMasala from "../images/Punjabi-items/paneer-butter-masala.webp";
import tandooriRoti from "../images/Punjabi-items/Tandoori-Roti-Butter.jpg";
import punjabiThali from "../images/Punjabi-items/North Indian Thali.webp";

const punjabiItems = [
  {
    id: 8,
    image: alooParatha,
    title: "Aloo Paratha, Curd & Pickle",
    price: 150,
    description: "Curd - 250 grams, Aloo Paratha 1 pc",
  },
  {
    id: 9,
    image: choleBhature,
    title: "Chole Bhature",
    price: 100,
    description: "Chole - 200 gram, Bhature 2 pcs",
  },
  {
    id: 10,
    image: dalMakhani,
    title: "Dal Makhani",
    price: 200,
    description: "500 gram",
  },
  {
    id: 11,
    image: paneerButterMasala,
    title: "Paneer Butter Masala",
    price: 225,
    description: "400 gram",
  },
  {
    id: 12,
    image: tandooriRoti,
    title: "Tandoori Roti",
    price: 125,
    description: "5 pcs",
  },
  {
    id: 13,
    image: punjabiThali,
    title: "Punjabi Thali",
    price: 300,
    description:
      "Gajar Halwa + 4 Butter Roti + Paneer Butter Masala + Papad + Dal Makhani & Jeera Rice + Salad + Lassi 1 glass",
  },
];

const Punjabi = () => {
  const { addToCart } = useCart();

  return (
    <section className="px-6 py-6">
      <h1 className="text-3xl font-bold text-black bg-amber-100 p-3 text-center rounded-lg">
        Punjabi
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {punjabiItems.map((item) => (
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

export default Punjabi;
