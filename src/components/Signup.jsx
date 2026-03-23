import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import React, { useState } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  // Username validation function
  const validateUsername = (username) => {
    const hasLetter = /[a-zA-Z]/.test(username);
    const hasNumber = /[0-9]/.test(username);
    const minLength = username.length >= 3;
    const maxLength = username.length <= 20;
    const validChars = /^[a-zA-Z0-9@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(username);

    if (!minLength) {
      return { valid: false, message: 'Username must be at least 3 characters long' };
    }
    if (!maxLength) {
      return { valid: false, message: 'Username must be less than 20 characters' };
    }
    if (!hasLetter) {
      return { valid: false, message: 'Username must contain at least one letter' };
    }
    if (!hasNumber) {
      return { valid: false, message: 'Username must contain at least one number' };
    }
    if (!validChars) {
      return { valid: false, message: 'Username contains invalid characters' };
    }
    
    return { valid: true, message: 'Username is valid!' };
  };

  // Handle username change with validation
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    
    if (value.length > 0) {
      const validation = validateUsername(value);
      setIsUsernameValid(validation.valid);
      setUsernameError(validation.valid ? '' : validation.message);
    } else {
      setIsUsernameValid(false);
      setUsernameError('');
    }
  };

  // Email/password signup
  const handleSignup = async (e) => {
    e.preventDefault();
    
    // Validate username before submission
    if (!isUsernameValid) {
      alert('Please enter a valid username with letters and numbers');
      return;
    }
    
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      // Update user profile with username
      await updateProfile(user, {
        displayName: username
      });

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        username: username,
        role: 'user',
      });

      localStorage.setItem('userEmail', user.email);
      alert('Thank you for your interest. Someone from our team will contact you shortly');
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  // Google signup
  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: 'user',
      });

      localStorage.setItem('userEmail', user.email);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  // Microsoft signup
  const handleMicrosoftSignup = async () => {
    const provider = new OAuthProvider('microsoft.com');
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: 'user',
      });

      localStorage.setItem('userEmail', user.email);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  // Apple signup
  const handleAppleSignup = async () => {
    const provider = new OAuthProvider('apple.com');
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: 'user',
      });

      localStorage.setItem('userEmail', user.email);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="mb-6">
        <img
          src="https://i.postimg.cc/vms1n9XM/Copilot-20260323-140813.png"
          alt="Pepperwahl"
          className="h-20"
        />
      </div>

      <div className="w-full max-w-md backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-8">
        <div className="text-center mb-6">
          <p className="text-white">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-[#E31B23] hover:underline font-medium"
            >
              Log in
            </button>
          </p>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Create an account</h1>
          <p className="text-gray-300 mb-8">Get started with Pepperwahl</p>

          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  className={`w-full px-3 py-2 bg-white/10 text-white placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent ${
                    username.length > 0
                      ? isUsernameValid
                        ? 'border-green-500 focus:ring-green-500'
                        : 'border-red-500 focus:ring-red-500'
                      : 'border-white/30 focus:ring-[#E31B23]'
                  }`}
                  placeholder="e.g., john123, user@456"
                  required
                />
                {username.length > 0 && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {isUsernameValid ? (
                      <span className="text-green-500 text-xl">✓</span>
                    ) : (
                      <span className="text-red-500 text-xl">✗</span>
                    )}
                  </div>
                )}
              </div>
              {usernameError && (
                <p className="text-red-400 text-sm mt-1">{usernameError}</p>
              )}
              {isUsernameValid && username.length > 0 && (
                <p className="text-green-400 text-sm mt-1">✓ Username is valid!</p>
              )}
              <p className="text-gray-400 text-xs mt-1">
                Must contain letters, numbers (special symbols optional)
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 text-white placeholder-gray-400 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31B23] focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 text-white placeholder-gray-400 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31B23] focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-start text-sm text-white">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 text-[#E31B23] bg-white/10 border-white/30 rounded"
                />
                <span className="ml-2">
                  You agree to the <span className="underline">Terms of Use</span> and{' '}
                  <span className="underline">Privacy Notice</span>
                </span>
              </label>
              <label className="flex items-start text-sm text-white">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 text-[#E31B23] bg-white/10 border-white/30 rounded"
                />
                <span className="ml-2">
                  You agree to receive product news and special promotions via email
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#E31B23] text-white py-3 rounded-lg font-medium hover:bg-[#C41820] transition-colors"
            >
              Next
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-white/60">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button
                onClick={handleMicrosoftSignup}
                className="flex items-center justify-center px-4 py-2 border border-white/30 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft" className="w-5 h-5" />
              </button>
              <button
                onClick={handleGoogleSignup}
                className="flex items-center justify-center px-4 py-2 border border-white/30 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              </button>
              <button
                onClick={handleAppleSignup}
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

export default Signup;
