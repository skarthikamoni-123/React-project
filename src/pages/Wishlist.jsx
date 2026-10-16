
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("wishlist")
    ) || [];
    setWishlist(saved);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(
      (product) => product.id !== id
    );
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };
  if (wishlist.length === 0) {
    return (
      <div className="text-center py-20 min-h-[60vh]">
        <h1 className="text-3xl font-bold">My Wishlist</h1>
        <p className="text-gray-500 mt-4">
          Your wishlist is empty.
        </p>
        <Link
          to="/products"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg mt-6">
          Browse Products
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="bg-white p-5 rounded-xl shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain"/>
            <h2 className="font-bold text-lg mt-4">
              {product.title}
            </h2>
            <p className="text-blue-600 font-bold mt-2">
              ₹{product.price}
            </p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => {
                  dispatch(addToCart(product));
                  removeFromWishlist(product.id);
                }}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg">
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="flex-1 border border-red-500 text-red-500 py-2 rounded-lg">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
