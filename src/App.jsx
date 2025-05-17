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
import { ReviewsProvider } from "./ReviewsContext";
import Signup from "./component/Signup";
import Login from "./component/Login";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (user) setLoggedInUser(user);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <CartProvider>
      <ReviewsProvider>
        <div className="flex flex-col min-h-screen">
          <Heading
            onLoginClick={() => {
              setShowLogin(true);
              setShowSignup(false);
            }}
            onSignupClick={() => {
              setShowSignup(true);
              setShowLogin(false);
            }}
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

          {showSignup && (
            <Signup
              onClose={() => setShowSignup(false)}
              onSuccess={(user) => {
                setLoggedInUser(user);
                setShowSignup(false);
              }}
              onSwitchToLogin={() => {
                setShowLogin(true);
                setShowSignup(false);
              }}
            />
          )}

          {showLogin && (
            <Login
              onClose={() => setShowLogin(false)}
              onSuccess={(user) => {
                setLoggedInUser(user);
                setShowLogin(false);
              }}
              onSwitchToSignup={() => {
                setShowSignup(true);
                setShowLogin(false);
              }}
            />
          )}
        </div>
      </ReviewsProvider>
    </CartProvider>
  );
};

export default App;
