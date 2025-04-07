import { useState } from "react";
import { useCart } from "../CartContext";


const Cart = () => {
  const { cart, getSubtotal, increaseQuantity, decreaseQuantity, clearCart } =
    useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = () => {
    clearCart();
    setOrderPlaced(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Cart</h2>

      {orderPlaced ? (
        <div className="text-center text-green-600 font-semibold">
          <p>Your order has been placed successfully! 🎉</p>
          <p>
            We will notify you at
            once it's ready for delivery.
          </p>
        </div>
      ) : cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-2xl mx-auto mt-4 border border-gray-300 rounded-lg p-4">
          {/* Table Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] font-bold text-lg border-b pb-2 text-center">
            <span className="text-left">Item</span>
            <span>Price</span>
            <span>Qty</span>
            <span>Total</span>
          </div>

          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center py-2 border-b text-center"
            >
              <span className="text-left truncate">{item.name}</span>
              <span className="text-center">₹{item.price}</span>
              <div className="flex items-center justify-center">
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded-md"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="mx-3">{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-green-500 text-white rounded-md"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
              <span className="text-center font-semibold">
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}

          {/* Subtotal */}
          <h3 className="text-xl font-bold text-right mt-4">
            Subtotal: ₹{getSubtotal()}
          </h3>

          {/* Order Button */}
          <button
            onClick={handleOrder}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Make Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
