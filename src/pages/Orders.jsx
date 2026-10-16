
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Package, ShoppingBag, Trash2 } from "lucide-react";

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);
  const clearOrders = () => {
    localStorage.removeItem("orders");
    setOrders([]);
  };
  return (
    <div className="min-h-screen bg-pink-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
            <p className="text-gray-500 mt-2">
              View and track your ShopEase purchases.
            </p>
          </div>
          {orders.length > 0 && (
            <button
              onClick={clearOrders}
              className="flex items-center justify-center gap-2 text-rose-500 hover:text-rose-700">
              <Trash2 size={18} /> Clear Orders
            </button>
          )}
        </div>
        {orders.length === 0 ? (
          <div className="bg-white border border-pink-100 rounded-2xl p-10 text-center shadow-sm">
            <Package
              size={60}
              className="mx-auto text-pink-400 mb-5"/>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">No Orders Yet</h2>
            <p className="text-gray-500 mb-6">
              You haven't placed any orders yet. Explore our products and find your favourites!
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
              <ShoppingBag size={18} />
              Start Shopping
            </Link>
          </div>) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white border border-pink-100 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-pink-100 pb-4 mb-5">
                  <div>
                    <p className="text-sm text-gray-500">
                      Order ID
                    </p>
                    <p className="font-semibold text-gray-800">
                      #{order.id}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Ordered on {order.date}
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                      {order.status || "Placed"}
                    </span>
                    <p className="text-lg font-bold text-pink-600 mt-2">
                      ₹{order.total.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-pink-50 rounded-lg p-2 flex items-center justify-center shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain"/>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-pink-600 font-medium mt-1">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {order.customer && (
                  <div className="bg-pink-50 rounded-lg p-4 mt-5">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Delivery Details
                    </h3>
                    <p className="text-sm text-gray-600">
                      {order.customer.fullName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {order.customer.address}, {order.customer.city}
                    </p>
                    <p className="text-sm text-gray-600">
                      PIN Code: {order.customer.pincode}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Payment: {order.customer.payment}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
export default Orders;
