import { useProduct } from "../context/ProductContext";
import { FaBell, FaSearch, FaShoppingCart } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { searchTerm, setSearchTerm, cartItems } = useProduct();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-3xl font-bold text-[#2C415A] tracking-wide">
        PK-Store
      </h1>

      <div className="hidden md:flex gap-8 text-lg font-medium text-[#2C415A]">
        <Link to="/">
          <p className="cursor-pointer hover:text-blue-600 transition">Home</p>
        </Link>
        <Link to="/cart">
          <p className="cursor-pointer hover:text-blue-600 transition">Cart</p>
        </Link>
        <p
          className="cursor-pointer hover:text-blue-600 transition"
          onClick={scrollToAbout}
        >
          About
        </p>
      </div>

      <div className="flex items-center gap-6 text-[#2C415A]">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 border rounded-full outline-none text-base w-44 md:w-64 focus:ring-2 focus:ring-blue-400 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="relative">
          <Link to="/cart">
            <FaShoppingCart className="cursor-pointer text-2xl hover:text-blue-600 transition" />
          </Link>

          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </div>

        <FaBell className="cursor-pointer text-2xl hover:text-blue-600 transition" />
        <BsPersonCircle className="cursor-pointer text-3xl hover:text-blue-600 transition" />
      </div>
    </div>
  );
};

export default Navbar;
