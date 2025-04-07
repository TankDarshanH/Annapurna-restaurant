import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Heading from "./component/Heading";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Gujarati from "./Menu pages/Gujarati";
import Punjabi from "./Menu pages/Punjabi";
import SouthIndian from "./Menu pages/SouthIndian";
import Fastfood from "./Menu pages/Fastfood";
import RiceBiryani from "./Menu pages/RiceBiryani";
import Desserts from "./Menu pages/Desserts";
import Beverages from "./Menu pages/Beverages";
import Popular from "./Menu pages/Popular";
import Cart from "./component/Cart";
import { CartProvider } from "./CartContext";
import Gallery from "./component/Gallery";
import Reviews from "./component/Reviews";
import { ReviewsProvider } from "./ReviewsContext"; // ✅ Corrected Import

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // On app start, check sessionStorage for logged-in user
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    setLoggedInUser(user);
  }, []);

  // Handle user login
  const handleLoginSuccess = (user) => {
    sessionStorage.setItem("loggedInUser", JSON.stringify(user)); // Store in sessionStorage
    setLoggedInUser(user);
  };

  // Handle user logout
  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser"); // Remove from sessionStorage
    setLoggedInUser(null);
  };

  return (
    <CartProvider>
      <ReviewsProvider>
       
        <div className="flex flex-col min-h-screen">
          <Heading
            onLoginSuccess={handleLoginSuccess}
            onLogout={handleLogout}
            loggedInUser={loggedInUser}
          />
          <div className="flex-grow pt-24">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Main />
                    <Gallery />
                  </>
                }
              />
              <Route
                path="/menu"
                element={
                  loggedInUser ? (
                    <>
                      <Popular />
                      <Gujarati />
                      <Punjabi />
                      <SouthIndian />
                      <Fastfood />
                      <RiceBiryani />
                      <Desserts />
                      <Beverages />
                    </>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/cart"
                element={loggedInUser ? <Cart /> : <Navigate to="/" />}
              />
              <Route
                path="/reviews"
                element={loggedInUser ? <Reviews /> : <Navigate to="/" />}
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer className="fixed bottom-0 w-full bg-white shadow-md" />
        </div>
      </ReviewsProvider>
    </CartProvider>
  );
};

export default App;
