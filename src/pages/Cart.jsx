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
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>

      {cartItems.length === 0 && (
        <p className="text-center text-gray-500 text-xl">Your cart is empty.</p>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow-md p-4 rounded-xl"
            >
              <div className="flex items-center gap-4 w-1/2">
                <img
                  src={item.img}
                  alt=""
                  className="w-20 h-20 rounded-lg object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-sm">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="text-gray-400 text-xs line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="p-2 bg-gray-200 rounded-full cursor-pointer"
                >
                  <FaMinus />
                </button>
                <span className="text-lg font-medium w-6 text-center">
                  {item.qty}
                </span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="p-2 bg-gray-200 rounded-full cursor-pointer"
                >
                  <FaPlus />
                </button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="p-3 bg-red-500 text-white rounded-full cursor-pointer"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl h-fit">
          <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>$8</span>
          </div>

          <div className="border-t my-3"></div>

          <div className="flex justify-between text-xl font-semibold">
            <span>Total</span>
            <span>${(subtotal + 8).toFixed(2)}</span>
          </div>

          <button className="w-full mt-5 bg-blue-600 text-white cursor-pointer py-3 rounded-lg text-lg font-medium">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
