import { useProduct } from "../context/ProductContext";
import { FaBell, FaSearch, FaShoppingCart } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { searchTerm, setSearchTerm, cartItems } = useProduct();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
 
  const hideNavbarRoutes = ["/login", "/signup"];
  if (hideNavbarRoutes.includes(location.pathname)) return null;
  if (!user) return null;

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
    setOpen(false);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
  };
 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      
      <h1 className="text-3xl font-bold text-[#2C415A] tracking-wide">
        PK-Store
      </h1>

      <div className="hidden md:flex gap-8 text-lg font-medium text-[#2C415A]">
        <Link to="/"><p className="cursor-pointer hover:text-blue-600 transition">Home</p></Link>
        <Link to="/cart"><p className="cursor-pointer hover:text-blue-600 transition">Cart</p></Link>
        <p className="cursor-pointer hover:text-blue-600 transition" onClick={scrollToAbout}>About</p>
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
 
        <div className="relative" ref={dropdownRef}>
          <BsPersonCircle
            className="cursor-pointer text-3xl hover:text-blue-600 transition"
            onClick={() => setOpen(!open)}
          />
 
          <div
            className={`absolute right-0 mt-3 bg-white shadow-lg rounded-xl w-48 py-3 z-50 border transform transition-all duration-300 ease-out
              ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
          >
            <p className="px-4 py-2 text-sm text-gray-700 font-medium border-b">
              {user?.email}
            </p>

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 transition"
            >
              Logout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
