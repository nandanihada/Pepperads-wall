import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        session_id: sessionStorage.getItem('pw_sid') || 'unknown',
        user_id: 'landing_visitor',
        user_email: formData.email,
        user_name: formData.name,
        button_id: 'contact_form_submit',
        button_text: `Contact Form Submitted | ${JSON.stringify(formData).substring(0, 300)}`,
        page: '/contactUs',
        section: 'landing:contact_form',
      };

      // Send to production
      fetch('https://hostslice.onrender.com/api/tracking/button-click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});

      // Send to local for testing
      await fetch('http://localhost:5000/api/tracking/button-click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    } catch (err) {
      // Silent fail — tracking shouldn't block UX
    }

    setLoading(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-black text-white px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Contact <span className="text-red-400">Us</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12">
          Drop us a message and we'll connect you with the right specialist for your needs.
        </p>

        {submitted ? (
          <div className="bg-[#111] rounded-xl p-8 max-w-xl mx-auto shadow-md text-center">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
            <p className="text-gray-400">Thanks for reaching out. We'll get back to you soon.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#111] rounded-xl p-6 sm:p-8 max-w-xl mx-auto space-y-4 sm:space-y-6 shadow-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-gray-600 text-white focus:border-red-500 focus:outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-gray-600 text-white focus:border-red-500 focus:outline-none transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-gray-600 text-white focus:border-red-500 focus:outline-none transition resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-red-500 text-white px-8 py-3 font-semibold rounded hover:bg-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
