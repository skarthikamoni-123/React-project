
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Heart, ShoppingCart, Package } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const [wishlistCount, setWishlistCount] = useState(0);
  useEffect(() => {
    const updateWishlistCount = () => {
      const saved =
        JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlistCount(saved.length);
    };
    updateWishlistCount();
    window.addEventListener("focus", updateWishlistCount);
    window.addEventListener("wishlistUpdated", updateWishlistCount);
    return () => {
      window.removeEventListener("focus", updateWishlistCount);
      window.removeEventListener("wishlistUpdated", updateWishlistCount);
    };
  }, []);
  return (
    <nav className="bg-white shadow-sm shadow-pink-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        <Link to="/" className="text-2xl font-bold text-pink-600 justify-self-center md:justify-self-start">
          ShopEase
        </Link>
        <div className="flex items-center justify-center gap-6 text-gray-700">
          <Link to="/" className="hover:text-pink-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-pink-600">
            About
          </Link>
          <Link to="/products" className="hover:text-pink-600">
            Products
          </Link>
        </div>
        <div className="flex items-center justify-center md:justify-self-end gap-5 text-gray-700">
          <Link
            to="/wishlist"
            title="Wishlist"
            className="relative hover:text-rose-500"
          >
            <Heart size={22} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-rose-500 text-white text-xs font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link
            to="/orders"
            className="flex items-center gap-1 hover:text-pink-600">
            <Package size={20} />
            <span>Orders</span>
          </Link>
          <Link
            to="/cart"
            title="Cart"
            className="relative hover:text-pink-600">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-rose-500 text-white text-xs font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1">
                {cartCount}
              </span>
            )}
          </Link>
          {user ? (
            <button
              onClick={logout}
              className="text-rose-500 hover:text-rose-700">
              Logout
            </button>) : (
            <Link to="/login" className="hover:text-pink-600">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;