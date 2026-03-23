import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Step 1: Sign in
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Step 2: Fetch role from Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
  
      if (userDoc.exists()) {
        const userRole = userDoc.data().role;
  
        if (userRole === "admin") {
          // Admin role: Navigate to dashboard
          navigate("/dashboard");
        } else {
          // Not admin: Show error message
          setError("You are not authorized as an admin.");
        }
      } else {
        setError("User does not exist.");
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };
  

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="mb-6">
        <img
          src="https://i.postimg.cc/HnR01ngR/Copilot-20260323-142505.png"
          alt="Pepperwahl"
          className="h-20"
        />
      </div>

      <div className="w-full max-w-md backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 bg-white/10 text-white placeholder-gray-400 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31B23]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 bg-white/10 text-white placeholder-gray-400 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31B23]"
          />
          <button
            type="submit"
            className="w-full bg-[#E31B23] text-white py-3 rounded-lg font-medium hover:bg-[#C41820] transition-colors"
          >
            Login
          </button>
          {error && <p className="text-red-500 mt-2 text-sm text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
