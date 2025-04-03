import { lazy, Suspense, useState } from "react";
import products from "../utils/products.json";
import ProductCard from "./ProductCard";

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
  return (
    <section className="py-12 bg-blue-100 px-20">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Our Special Bakes</h2>
        <div>
          {Object.keys(products).map((category) => (
            <button
              key={category}
              onClick={() => setselectedCategory(category)}
              className={`px-6 py-2 my-2 mr-6 rounded-sm cursor-pointer ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700"
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
              className="bg-orange-500 text-white px-12 py-2 rounded-sm hover:bg-orange-600"
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
