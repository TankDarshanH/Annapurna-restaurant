import Signup from "./Signup";
import Login from "./Login";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import restaurantLogo from "../images/restaurant.png"; // ✅ Imported image properly

const Heading = ({ onLoginSuccess, onLogout, loggedInUser }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const handleShowSignup = useCallback(() => {
    setShowSignup(true);
    setShowLogin(false);
  }, []);

  const handleShowLogin = useCallback(() => {
    setShowLogin(true);
    setShowSignup(false);
  }, []);

  const handleCloseSignup = useCallback(() => setShowSignup(false), []);
  const handleCloseLogin = useCallback(() => setShowLogin(false), []);

  const handleSignup = (newUser) => {
    const existingUser = users.find((user) => user.email === newUser.email);
    if (existingUser) {
      alert("Account already exists. Please log in.");
      setShowSignup(false);
      setShowLogin(true);
    } else {
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      alert("Account created successfully. Please log in.");
      setShowSignup(false);
      setShowLogin(true);
    }
  };

  return (
    <div className="bg-amber-300 flex flex-wrap justify-between items-center h-20 px-6 md:px-10 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="flex items-center gap-x-4">
        <Link to="/">
          <img
            src={restaurantLogo} // ✅ Using imported image
            alt="restaurant-Logo"
            className="wnpm-16 md:w-20 h-16 md:h-20 rounded-full p-2 cursor-pointer transition-transform duration-500 hover:scale-110 hover:brightness-125"
          />
        </Link>
        <h1 className="text-2xl md:text-4xl text-gray-800 font-bold">
          Annapurna
        </h1>
      </div>

      <nav className="hidden md:flex">
        <ul className="flex space-x-6 md:space-x-10 text-base md:text-lg">
          {["Home", "Menu", "Cart", "Reviews"].map((item) => (
            <li
              key={item}
              className="cursor-pointer transition-transform duration-500 hover:scale-110 hover:brightness-125 hover:text-blue-900 py-2 px-4"
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center space-x-3 md:space-x-5">
        {loggedInUser ? (
          <>
            <span className="text-sm md:text-lg font-bold">
              {loggedInUser.email}
            </span>
            <button
              className="bg-red-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-lg"
              onClick={onLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-blue-900 text-white px-3 md:px-4 py-1 md:py-2 rounded-lg"
              onClick={handleShowSignup}
            >
              Sign up
            </button>
            <button
              className="bg-blue-900 text-white px-3 md:px-4 py-1 md:py-2 rounded-lg"
              onClick={handleShowLogin}
            >
              Login
            </button>
          </>
        )}
      </div>

      {showSignup && (
        <Signup onClose={handleCloseSignup} onSignup={handleSignup} />
      )}
      {showLogin && (
        <Login onClose={handleCloseLogin} onLoginSuccess={onLoginSuccess} />
      )}
    </div>
  );
};

export default Heading;
