import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useProduct } from "../context/ProductContext";

const Cart = () => {
  const { cartItems, setCartItems } = useProduct();

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center mt-20">
          <img
            src="/empty-cart.svg"
            alt="Empty Cart"
            className="w-64 h-64 mb-4"
          />
          <p className="text-gray-500 text-xl mb-4">Your cart is empty.</p>
          <a
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Shop Now
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md p-4 rounded-2xl hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 w-full md:w-1/2">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                    <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
 
                <div className="flex items-center gap-3 mt-3 md:mt-0">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="p-2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full transition"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-lg font-medium w-6 text-center">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="p-2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full transition"
                  >
                    <FaPlus />
                  </button>
                </div>
 
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-full transition mt-3 md:mt-0"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
 
          <div className="lg:col-span-1 bg-white shadow-md p-6 rounded-2xl sticky top-20 flex flex-col justify-between h-fit">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Order Summary
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>$8.00</span>
              </div>
              <div className="border-t my-3"></div>
              <div className="flex justify-between text-xl font-bold text-gray-800">
                <span>Total</span>
                <span>${(subtotal + 8).toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
