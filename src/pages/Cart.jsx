
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-pink-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          My Shopping Cart
        </h1>
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl border border-pink-100 p-10 text-center shadow-sm">
            <ShoppingBag
              size={55}
              className="mx-auto text-pink-400 mb-4"/>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-6">
              Discover your favourite products at ShopEase.
            </p>
            <Link
              to="/products"
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition" >Continue Shopping
            </Link>
          </div>) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm flex flex-col sm:flex-row items-center gap-5">
                  <div className="w-28 h-28 bg-pink-50 rounded-lg p-3 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"/>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-pink-600 font-bold mt-2">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="border border-pink-200 rounded-md p-2 text-pink-600 hover:bg-pink-50"
                        aria-label="Decrease quantity" >
                        <Minus size={16} />
                      </button>
                      <span className="font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="border border-pink-200 rounded-md p-2 text-pink-600 hover:bg-pink-50"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="font-bold text-gray-800 mb-3">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="flex items-center gap-2 text-rose-500 hover:text-rose-700 mx-auto sm:ml-auto sm:mr-0">
                      <Trash2 size={17} />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white border border-pink-100 rounded-xl p-6 shadow-sm h-fit">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Items</span>
                <span>
                  {cartItems.reduce(
                    (sum, item) => sum + item.quantity,
                    0
                  )}
                </span>
              </div>
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Subtotal</span>
                <span>₹{total.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Delivery</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr className="border-pink-100 my-5" />
              <div className="flex justify-between text-lg font-bold text-gray-800 mb-6">
                <span>Total</span>
                <span className="text-pink-600">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>
              <Link
                to="/checkout"
                className="block text-center w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition">
                Proceed to Checkout
              </Link>
              <Link
                to="/products"
                className="block text-center text-pink-600 mt-4 hover:text-pink-800" >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
