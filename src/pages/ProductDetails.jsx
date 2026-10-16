import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/cartSlice";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find(
    (item) => item.id === Number(id)
  );
  if (!product) {
    return (
      <p className="text-center py-20">
        Product not found.
      </p>
    );
  }
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-contain" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            {product.title}
          </h1>
          <p className="text-gray-600 mt-5 leading-7">
            {product.description}</p>
          <p className="text-3xl font-bold text-blue-600 mt-6">
            ₹{product.price}</p>
          <p className="text-gray-600 mt-4">
            ⭐ {product.rating}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg mt-8 hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;