
import { Link } from "react-router-dom";

function Home() {
  const categories = [
    {
      name: "Electronics",
      description: "Discover everyday technology",
    },
    {
      name: "Fashion",
      description: "Find your personal style",
    },
    {
      name: "Footwear",
      description: "Step out in style",
    },
    {
      name: "Bags",
      description: "Your everyday essentials",
    },
    {
      name: "Accessories",
      description: "Complete your look",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFFAFC]">
      <section className="px-5 sm:px-8 pt-8 pb-12">
        <div
          className="relative max-w-7xl mx-auto overflow-hidden
          rounded-[32px] bg-gradient-to-br from-[#FFF0F5]
          via-[#FFE4EF] to-[#FAD5E5]
          shadow-[0_15px_55px_rgba(236,72,153,0.15)]"
        >
          <div className="absolute -top-20 -right-12 w-72 h-72
          rounded-full bg-white/40 blur-2xl" />
          <div className="absolute -bottom-24 -left-10 w-64 h-64
          rounded-full bg-pink-300/20 blur-3xl" />
          <div className="relative px-7 py-16 sm:px-12 md:px-20
          md:py-24 text-center">
            <div className="inline-flex items-center gap-2
            rounded-full border border-pink-200/80 bg-white/60
            px-4 py-2 text-xs sm:text-sm text-[#B44D79]">
              YOUR EVERYDAY SHOPPING DESTINATION
            </div>
            <h1 className="mt-7 text-4xl sm:text-5xl md:text-6xl
            font-serif font-medium leading-tight tracking-tight
            text-[#432536]">
              Find Your
              <span className="block italic text-[#D65D91] mt-2">
                Everyday Favourites
              </span>
            </h1><p className="max-w-xl mx-auto mt-6 text-sm sm:text-base
            leading-7 text-[#805B6D]">
              From the latest styles to everyday essentials,
              discover something special at ShopEase.</p>
            <a href="#categories"
              className="inline-block mt-8 rounded-full
              bg-[#D65D91] px-7 py-3.5 text-sm font-medium
              text-white shadow-lg shadow-pink-300/50
              transition-all duration-300
              hover:-translate-y-1 hover:bg-[#BE477B]
              hover:shadow-xl">
              Explore Categories → </a>
            <p className="mt-6 text-xs tracking-widest
            text-[#A4778C]">
              STYLE · COMFORT · EVERYDAY ESSENTIALS
            </p>
          </div>
        </div>
      </section>
      <section
        id="categories"
        className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 pb-20">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em]
          text-[#D65D91] mb-3">Curated for you </p>
          <h2 className="text-3xl sm:text-4xl font-serif
          text-[#432536]">Shop by Category
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Explore our collections.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${encodeURIComponent(category.name)}`}
              className="block rounded-xl border border-gray-200
              bg-white p-6 transition duration-300
              hover:-translate-y-1 hover:border-pink-300
              hover:shadow-lg hover:shadow-pink-100">
              <h3 className="text-xl font-semibold text-gray-800
              transition-colors group-hover:text-pink-600">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                {category.description}
              </p>
              <p className="mt-5 text-sm font-medium text-pink-600">
                Explore category →
              </p>
            </Link>
          ))}
        </div>
      </section>
      <footer className="border-t border-pink-100 py-6">
        <p className="text-center text-sm text-gray-500">
          © 2026 ShopEase. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default Home;
