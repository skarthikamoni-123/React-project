
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  const [error, setError] = useState("");
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      setError("Your cart is empty. Add products before checkout.");
      return;
    }
    const order = {
      id: Date.now(),
      customer: form,
      items: cartItems,
      total,
      date: new Date().toLocaleDateString(),
      status: "Placed",
    };
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem(
      "orders",
      JSON.stringify([order, ...savedOrders])
    );
    dispatch(clearCart());
    navigate("/orders");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-pink-50 px-6 py-16 text-center">
        <div className="max-w-md mx-auto bg-white rounded-xl p-8 border border-pink-100">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            Your cart is empty
          </h1>
          <p className="text-gray-500 mb-6">
            Add some products before proceeding to checkout.
          </p>
          <Link
            to="/products"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Checkout
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white border border-pink-100 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Shipping Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="w-full border border-pink-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-pink-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    title="Enter a 10-digit phone number"
                    required
                    className="w-full border border-pink-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="10-digit mobile number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    className="w-full border border-pink-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="Enter your city"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-gray-700 mb-2">
                    Delivery Address
                  </label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full border border-pink-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="House number, street, area"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    pattern="[0-9]{6}"
                    title="Enter a 6-digit PIN code"
                    required
                    className="w-full border border-pink-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="6-digit PIN code"/>
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Payment Method
              </h2>
              <div className="space-y-3">
                {["Cash on Delivery", "UPI", "Credit / Debit Card"].map(
                  (method) => (
                    <label
                      key={method}
                      className="flex items-center gap-3 border border-pink-200 rounded-lg p-4 cursor-pointer hover:bg-pink-50">
                      <input
                        type="radio"
                        name="payment"
                        value={method}
                        checked={form.payment === method}
                        onChange={handleChange}
                        className="accent-pink-500"/>
                      <span className="text-gray-700">{method}</span>
                    </label>
                  )
                )}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Demo checkout only. Online payments are not processed.
              </p>
            </div>
            <div className="bg-white border border-pink-100 rounded-xl p-6 shadow-sm h-fit">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between gap-4 text-sm"  >
                    <span className="text-gray-600">
                      {item.title} × {item.quantity}
                    </span>
                    <span className="font-semibold text-gray-800">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>
              <hr className="border-pink-100 mb-5" />
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Delivery</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span className="text-pink-600">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>
              {error && (
                <p className="text-rose-600 text-sm mb-4">{error}</p>
              )}
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition">
                Place Order
              </button>
              <Link
                to="/cart"
                className="block text-center text-pink-600 mt-4 hover:text-pink-800">
                Back to Cart
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
