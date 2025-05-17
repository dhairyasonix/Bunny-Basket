import { lazy, Suspense, useEffect, useState } from "react";
import products from "../utils/products.json";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";

// Lazy load the ProductShowcase component with a delay for better performance
const SpecialBakesLazy = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ default: SpecialBakes }), 1000)
    )
);

const SpecialBakes = () => {
  const [selectedCategory, setselectedCategory] = useState("cakes");
  const [ShowAll, setShowAll] = useState(false);

  const visibleProducts = ShowAll
    ? products[selectedCategory]
    : products[selectedCategory].slice(0, 8);

    const location = useLocation();

useEffect(() => {
  if (location.hash === "#Menu") {
    const menuSection = document.getElementById("Menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);
  return (
    <section id="Menu" className="py-12 bg-[#E8EEEA]  md:px-20">
      <div className=" px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Special Bakes</h2>
        <div>
          {Object.keys(products).map((category) => (
            <button
              key={category}
              onClick={() => setselectedCategory(category)}
              className={`px-4 md:px-6 py-2 my-2 mr-4 md:mr-6 rounded-sm cursor-pointer shadow-md  hover:shadow-lg hover:shadow-[#6B3B0A]/50 ${
                selectedCategory === category
                  ? "bg-[#9D4007] text-white"
                  : "bg-white text-[#622804] border border-transparent hover:border-[#9D4007] transition-all duration-100"
              } `}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
        {!ShowAll && products[selectedCategory].length > 8 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#9D4007] text-white px-12 py-2 rounded-sm hover:bg-[#622804] shadow-md  hover:shadow-lg hover:shadow-[#6B3B0A]/50 transition-all duration-200"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
const LazyLoadedSpecialBakes = () => (
  <Suspense fallback={<div>Loading Products...</div>}>
    <SpecialBakesLazy />
  </Suspense>
);
export default LazyLoadedSpecialBakes;
