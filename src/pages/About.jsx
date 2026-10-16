
import { Link } from "react-router-dom";
function About() {
  const values = [
    {
      title: "Quality Products",
      description:
        "We focus on bringing useful, stylish, and reliable products together.",
      color: "bg-pink-50",
      border: "border-pink-100",
      heading: "text-pink-600",
    },
    {
      title: "Easy Shopping",
      description:
        "Enjoy a simple shopping experience with an easy-to-use website.",
      color: "bg-purple-50",
      border: "border-purple-100",
      heading: "text-purple-600",
    },
    {
      title: "Everyday Style",
      description:
        "Explore collections that suit your everyday needs and preferences.",
      color: "bg-orange-50",
      border: "border-orange-100",
      heading: "text-orange-600",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFFAFC]">
      <section className="px-5 sm:px-8 pt-8 pb-12">
        <div
          className="relative max-w-7xl mx-auto overflow-hidden
          rounded-[32px] bg-gradient-to-br from-[#FFF0F5]
          via-[#FFE4EF] to-[#FAD5E5]
          shadow-[0_15px_55px_rgba(236,72,153,0.15)]">
          <div className="absolute -top-16 -right-10 h-64 w-64
          rounded-full bg-white/40 blur-2xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64
          rounded-full bg-pink-300/20 blur-3xl" />
          <div className="relative px-7 py-16 sm:px-12 md:py-24
          text-center">
            <p className="text-sm uppercase tracking-[0.25em]
            text-[#B44D79]">
              Get to know us</p>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl
            font-serif text-[#432536] leading-tight">
              About
              <span className="block mt-2 italic text-[#D65D91]">
                ShopEase
              </span>
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-sm sm:text-base
            leading-7 text-[#805B6D]">
              Shopping made simple, stylish, and enjoyable.
              Discover everyday essentials and explore collections
              designed around your needs. </p>
            <Link
              to="/products"
              className="inline-block mt-8 rounded-full bg-[#D65D91]
              px-7 py-3.5 text-sm font-medium text-white
              shadow-lg shadow-pink-300/50 transition duration-300
              hover:-translate-y-1 hover:bg-[#BE477B]"
            >Explore Our Store →</Link>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8
        items-stretch">
          <div className="rounded-3xl bg-white border border-pink-100
          p-8 md:p-10 shadow-sm">
            <p className="text-xs uppercase tracking-[0.25em]
            text-[#D65D91]">Our Story</p>
            <h2 className="mt-4 text-3xl font-serif text-[#432536]">
              A better way to shop
            </h2>
            <p className="mt-5 text-sm leading-7 text-gray-600">
              ShopEase is designed to make online shopping
              straightforward and convenient. Our goal is to bring
              different product categories together in one place,
              so customers can explore what they need with ease.
            </p>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              From technology and fashion to footwear, bags, and
              accessories, ShopEase offers a simple way to browse
              different collections.</p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br
          from-[#FCE7F3] via-[#F9E8F0] to-[#EDE9FE]
          border border-pink-100 p-8 md:p-10
          shadow-[0_10px_35px_rgba(236,72,153,0.10)]">
            <p className="text-xs uppercase tracking-[0.25em]
            text-[#B44D79]">
              Our Mission
            </p>
            <h2 className="mt-4 text-3xl font-serif text-[#432536]">
              Shopping that feels easy
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#805B6D]">
              We aim to create a welcoming shopping experience
              with a clear layout, organised categories, and easy
              navigation across the website.
            </p>
            <div className="mt-7 rounded-2xl border border-white/70
            bg-white/50 p-5">
              <p className="text-lg font-medium text-[#432536]">
                Simple. Stylish. Convenient.
              </p>
              <p className="mt-2 text-sm text-[#805B6D]">
                Everything starts with a better shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em]
          text-[#D65D91]">What matters to us</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-serif
          text-[#432536]">The ShopEase Difference</h2>

          <p className="mt-3 text-sm text-gray-500">
            The ideas behind our shopping experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className={`${value.color} border ${value.border}
              rounded-2xl p-7 transition duration-300
              hover:-translate-y-1 hover:shadow-lg`}>
              <h3 className={`text-xl font-semibold ${value.heading}`}>
                {value.title}</h3>
              <p className="mt-4 text-sm leading-7 text-gray-600">
                {value.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 pb-16">
        <div className="rounded-3xl bg-gradient-to-r
        from-[#FCE7F3] to-[#FAD5E5] p-8 md:p-12 text-center
        shadow-[0_10px_35px_rgba(236,72,153,0.10)]">
          <h2 className="text-3xl font-serif text-[#432536]">
            Ready to explore?</h2>
          <p className="mt-3 text-sm text-[#805B6D]">
            Discover the collections waiting for you.
          </p>
          <Link
            to="/products"
            className="inline-block mt-6 rounded-full bg-[#D65D91]
            px-7 py-3 text-sm font-medium text-white
            transition duration-300 hover:bg-[#BE477B]"
          >Start Shopping →</Link>
        </div>
      </section>
      <footer className="border-t border-pink-100 py-6">
        <p className="text-center text-sm text-gray-500">
          © 2026 ShopEase. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default About;
