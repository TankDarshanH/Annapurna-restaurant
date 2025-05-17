import { useState } from "react";

const Login = ({ onClose, onSuccess, onSwitchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email);

    if (!user) {
      alert("No user found with that email. Redirecting to Sign Up...");
    
      if (onSwitchToSignup) {
        onSwitchToSignup();
      }
      return;
    }

    if (user.password !== password) {
      alert("Incorrect password.");
      return;
    }

    sessionStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Login successful!");
    onSuccess(user);
  };

  return (
    <div className="fixed inset-0 text-center flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 bg-cover bg-center backdrop-blur-sm z-50 animate-fadeIn">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-4">
        <h2 className="text-3xl font-bold mb-6">Log In</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded mb-2"
        >
          Log In
        </button>
        <button
          onClick={onClose}
          className="w-full text-red-500 text-sm hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Login;
