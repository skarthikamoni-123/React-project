
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Heart } from "lucide-react";
import { addToCart } from "../redux/cartSlice";
import products from "../data/products";

function Products() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState([]);

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Footwear",
    "Bags",
    "Accessories",
  ];

  const selectedCategory = searchParams.get("category") || "All";
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);
  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    const updatedWishlist = exists
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category?.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });
  const handleCategory = (category) => {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };
  return (
    <div className="min-h-screen bg-pink-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-3">
          Our Products
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Find your everyday favourites at ShopEase.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategory(category)}
              className={`px-5 py-2 rounded-full border transition ${
                selectedCategory === category
                  ? "bg-pink-500 text-white border-pink-500"
                  : "bg-white text-pink-700 border-pink-200 hover:bg-pink-100"
              }`} >
              {category}
            </button>
          ))}
        </div>
        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-pink-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"/>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.some(
                (item) => item.id === product.id
              );
              return (
                <div
                  key={product.id}
                  className="relative bg-white border border-pink-100 rounded-xl p-5 shadow-sm hover:shadow-lg hover:shadow-pink-100 transition">
                  <button
                    onClick={() => toggleWishlist(product)}
                    aria-label="Toggle wishlist"
                    className="absolute top-7 right-7 z-10 bg-white rounded-full p-2 shadow-sm hover:bg-pink-50">
                    <Heart
                      size={22}
                      className={
                        isWishlisted
                          ? "fill-pink-500 text-pink-500"
                          : "text-pink-400"
                      }/>
                  </button>
                  <div className="h-48 rounded-lg flex items-center justify-center mb-4 p-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-contain"/>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h2>
                  <p className="text-pink-600 font-bold text-xl mb-2">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                  {product.rating && (
                    <p className="text-sm text-gray-500 mb-4">
                      Rating: {product.rating}
                    </p>
                  )}
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
}

export default Products;
