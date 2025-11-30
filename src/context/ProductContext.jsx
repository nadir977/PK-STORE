import { createContext, useState, useEffect, useContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = [
          "all",
          ...new Set(data.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  useEffect(() => {
    let tempProducts = [...products];

    if (selectedCategory !== "all") {
      tempProducts = tempProducts.filter(
        (p) => p.category === selectedCategory
      );
    }

    if (searchTerm !== "") {
      tempProducts = tempProducts.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(tempProducts);
  }, [products, selectedCategory, searchTerm]);

  const addToCart = (product) => {
  setCartItems((prev) => {
    const exists = prev.find((item) => item.id === product.id);

    if (exists) {
      return prev.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
    }

    return [...prev, { ...product, qty: 1 }];
  });
};


  return (
    <ProductContext.Provider
      value={{
        filteredProducts,
        categories,
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,
        cartItems,
        setCartItems,
        addToCart,

      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);

export default ProductContext;
