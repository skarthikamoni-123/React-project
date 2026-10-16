import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Heart } from "lucide-react";

import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [isWishlisted, setIsWishlisted] = useState(() => {
    const saved =
      JSON.parse(localStorage.getItem("wishlist")) || [];
    return saved.some((item) => item.id === product.id);
  });
  const toggleWishlist = () => {
    const saved =
      JSON.parse(localStorage.getItem("wishlist")) || [];
    let updated;
    if (saved.some((item) => item.id === product.id)) {
      updated = saved.filter(
        (item) => item.id !== product.id
      );
      setIsWishlisted(false);
    } else {
      updated = [...saved, product];
      setIsWishlisted(true);
    }
    localStorage.setItem("wishlist", JSON.stringify(updated));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-lg transition duration-300">
      <Link to={`/products/${product.id}`}>
        <div className="flex items-center justify-center bg-gray-50 rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-52 object-contain p-3"/>
        </div>
      </Link>
      <h2 className="font-semibold text-lg mt-4 truncate">
        {product.title}
      </h2>
      <p className="text-gray-500 text-sm mt-2 h-10 overflow-hidden">
        {product.description}
      </p>
      <div className="flex items-center justify-between mt-3">
        <p className="text-blue-600 font-bold text-xl">
          ₹{product.price}
        </p>
        <p className="text-sm text-gray-600">
          ⭐ {product.rating}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-5">
        <Link
          to={`/products/${product.id}`}
          className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition">
          Details
        </Link>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" >Add</button>
        <button
          onClick={toggleWishlist}
          title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          aria-label={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          className="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg border border-gray-200 hover:bg-pink-50 hover:border-pink-300 transition">
          <Heart
            size={21}
            fill={isWishlisted ? "red" : "none"}
            color={isWishlisted ? "red" : "#6b7280"}/>
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
