import { Link } from "react-router-dom";
import restaurantLogo from "../images/restaurant.png";

const Heading = ({ onLoginClick, onSignupClick, onLogout, loggedInUser }) => {
  return (
    <div className="bg-amber-300 flex flex-wrap justify-between items-center h-20 px-6 md:px-10 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="flex items-center gap-x-4">
        <Link to="/">
          <img
            src={restaurantLogo}
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
              onClick={onSignupClick}
            >
              Sign up
            </button>
            <button
              className="bg-blue-900 text-white px-3 md:px-4 py-1 md:py-2 rounded-lg"
              onClick={onLoginClick}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Heading;
