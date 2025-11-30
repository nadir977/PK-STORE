import React from "react"; 
import About from "../components/About";
import { useProduct } from "../context/ProductContext";

const Home = () => {
  const {
    filteredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
    addToCart,
  } = useProduct();

  return (
    <> 
      <div className="flex justify-center gap-4 flex-wrap py-6 bg-gray-100">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-medium transition ${
              selectedCategory === cat
                ? "bg-[#2C415A] text-white"
                : "bg-white text-[#2C415A] hover:bg-[#2C415A] hover:text-white"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-[#2C415A] mb-8 text-center">
          Our Products
        </h2>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition flex flex-col"
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-48 w-full object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="text-lg font-semibold text-[#2C415A] mb-1">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-[#2C415A]">
                    ${product.price}
                  </span>
                  <span className="text-yellow-500 font-semibold">
                    ⭐ {product.rating.rate} ({product.rating.count})
                  </span>
                </div>

                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.title,
                      price: product.price,
                      img: product.image,
                      description: product.description,
                      category: product.category,
                      rating: product.rating,
                    })
                  }
                  className="mt-auto bg-[#2C415A] text-white py-2 rounded-full hover:bg-[#1e2d42] hover:scale-105 transition transform font-semibold cursor-pointer shadow-md"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <About id="about" />
    </>
  );
};

export default Home;
