// src/components/Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider
} from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [loginField, setLoginField] = useState(''); // Single field for email or username
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  // Function to detect if input is email or username
  const isEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  // Function to find email by username
  const findEmailByUsername = async (username) => {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', username));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        return userDoc.data().email;
      }
      return null;
    } catch (error) {
      console.error('Error finding user by username:', error);
      return null;
    }
  };

  // Email & password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      let emailToUse = loginField;
      
      // If input is not an email, try to find email by username
      if (!isEmail(loginField)) {
        const foundEmail = await findEmailByUsername(loginField);
        if (!foundEmail) {
          setError('Username not found. Please check your username or use email instead.');
          return;
        }
        emailToUse = foundEmail;
      }
      
      const userCredential = await signInWithEmailAndPassword(auth, emailToUse, password);
      localStorage.setItem('userEmail', userCredential.user.email);
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      if (err.code === 'auth/user-not-found') {
        setError('No account found with this email/username.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email format.');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem('userEmail', user.email);
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  // Microsoft login
  const handleMicrosoftLogin = async () => {
    const provider = new OAuthProvider('microsoft.com');
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem('userEmail', user.email);
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  // Apple login
  const handleAppleLogin = async () => {
    const provider = new OAuthProvider('apple.com');
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem('userEmail', user.email);
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (!loading && user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 relative">
      <div className="mb-6">
        <img
          src="https://i.postimg.cc/HnR01ngR/Copilot-20260323-142505.png"
          alt="Pepperwahl"
          className="h-20"
        />
      </div>

      <div className="w-full max-w-md backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-8">
        <div className="text-center mb-6">
          <p className="text-white">
            Don&apos;t have an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-[#E31B23] hover:underline font-medium"
            >
              Sign up
            </button>
          </p>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Log in</h1>
          <p className="text-gray-300 mb-8">Welcome back! Please enter your details.</p>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Email or Username</label>
              <div className="relative">
                <input
                  type="text"
                  value={loginField}
                  onChange={(e) => setLoginField(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 text-white placeholder-gray-400 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31B23] focus:border-transparent"
                  placeholder="Enter your email or username"
                  required
                />
                {loginField.length > 0 && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <span className="text-gray-400 text-sm">
                      {isEmail(loginField) ? '📧' : '👤'}
                    </span>
                  </div>
                )}
              </div>
              <p className="text-gray-400 text-xs mt-1">
                You can use either your email address or username
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 text-white placeholder-gray-400 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31B23] focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-[#E31B23] text-white py-3 rounded-lg font-medium hover:bg-[#C41820] transition-colors"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Next'}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-white/60">Or log in with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center px-4 py-2 border border-white/30 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              </button>
              <button
                onClick={handleMicrosoftLogin}
                className="flex items-center justify-center px-4 py-2 border border-white/30 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft" className="w-5 h-5" />
              </button>
              <button
                onClick={handleAppleLogin}
                className="flex items-center justify-center px-4 py-2 border border-white/30 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
