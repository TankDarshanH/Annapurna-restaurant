import { useCart } from "../CartContext";

// Image imports
import paneerBiryani from "../images/Rice & Biryani/Paneer Biryani.webp";
import vegTawaPulao from "../images/Rice & Biryani/veg-tawa-pulao.jpg";
import khichdiKadhi from "../images/Rice & Biryani/Gujarati Khichdi with Kadhi.jpg";
import jeeraRiceDalTadka from "../images/Rice & Biryani/Jeera Rice & Dal Tadka.jpg";
import tomatoRice from "../images/Rice & Biryani/Coimbatore-Style Tomato Rice.jpg";
import hyderabadiVegBiryani from "../images/Rice & Biryani/Haderabadi veg dum- biriyani.jpg";
import lemonRice from "../images/Rice & Biryani/Lemon Rice.jpg";

const ricebiryaniItems = [
  {
    id: 29,
    image: paneerBiryani,
    title: "Paneer Biryani",
    price: 300,
    description:
      "Spiced paneer, fragrant basmati rice, herbs, and fried onions with raita, 1 KG",
  },
  {
    id: 30,
    image: vegTawaPulao,
    title: "Veg Tawa Pulao",
    price: 100,
    description:
      "Spiced basmati rice, mixed veggies and served with salad, 250 gram",
  },
  {
    id: 31,
    image: khichdiKadhi,
    title: "Khichdi Kadhi",
    price: 50,
    description:
      "Comforting moong dal rice khichdi, served with tangy, spiced yogurt-based kadhi",
  },
  {
    id: 32,
    image: jeeraRiceDalTadka,
    title: "Jeera Rice & Dal Tadka",
    price: 75,
    description:
      "Fragrant cumin-flavored basmati rice served with creamy, spiced lentil dal, topped with ghee-tempered tadka, 400 gram",
  },
  {
    id: 33,
    image: tomatoRice,
    title: "Coimbatore-Style Tomato Rice",
    price: 125,
    description:
      "Tangy, spiced rice cooked with ripe tomatoes, South Indian masalas, and curry leaves with papad, 250 gram",
  },
  {
    id: 34,
    image: hyderabadiVegBiryani,
    title: "Hyderabadi Veg Dum-Biryani",
    price: 400,
    description:
      "Fragrant basmati rice layered with spiced vegetables, saffron, and fried onions. Served with raita and salad, 1 KG",
  },
  {
    id: 35,
    image: lemonRice,
    title: "Lemon Rice",
    price: 100,
    description:
      "Zesty, spiced rice with fresh lemon juice, mustard seeds, curry leaves, and peanuts, 250 gram",
  },
];

const RiceBiryani = () => {
  const { addToCart } = useCart();

  return (
    <section className="px-6 py-6">
      <h1 className="text-3xl font-bold text-black bg-amber-100 p-3 text-center rounded-lg">
        Rice & Biryani
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {ricebiryaniItems.map((item) => (
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

export default RiceBiryani;
