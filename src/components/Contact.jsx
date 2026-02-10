import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-agency-blue mb-6">
              Reach out to us
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss how we can bring your vision to life
            </p>
          </div>

          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gradient-to-br from-agency-light to-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
            >
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-agency-indigo focus:outline-none transition-colors bg-white text-gray-900 placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-agency-indigo focus:outline-none transition-colors bg-white text-gray-900 placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-agency-indigo focus:outline-none transition-colors bg-white text-gray-900 placeholder-gray-400 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-12 py-4 bg-gradient-to-r from-agency-indigo to-agency-accent text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            <div className="text-center p-6 rounded-2xl bg-agency-light">
              <svg
                className="w-8 h-8 mx-auto mb-4 text-agency-indigo"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h4 className="font-semibold text-agency-blue mb-2">Email</h4>
              <p className="text-gray-600">hello@crevix.ai</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-agency-light">
              <svg
                className="w-8 h-8 mx-auto mb-4 text-agency-indigo"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h4 className="font-semibold text-agency-blue mb-2">Phone</h4>
              <p className="text-gray-600">+91 9876543210</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-agency-light">
              <svg
                className="w-8 h-8 mx-auto mb-4 text-agency-indigo"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h4 className="font-semibold text-agency-blue mb-2">Office</h4>
              <p className="text-gray-600">Coimbatore, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
