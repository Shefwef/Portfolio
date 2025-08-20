import { RevealOnScroll } from "../RevealOnScroll";
import React, { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: "shefadib@gmail.com",
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setIsSending(false);
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        alert("Failed to send message. Please try again later.");
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-transparent">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 bg-green-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-8 sm:mb-12 text-center leading-relaxed max-w-2xl mx-auto text-sm sm:text-base px-2">
            Have a question, idea, or opportunity? Let’s talk! Fill out the form
            below, and I’ll get back to you as soon as possible.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-emerald-800/40 rounded-lg text-gray-200 placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors text-sm sm:text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-emerald-800/40 rounded-lg text-gray-200 placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors text-sm sm:text-base"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-emerald-800/40 rounded-lg text-gray-200 placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors resize-none text-sm sm:text-base"
            ></textarea>
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-green-400 text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-md hover:bg-green-300 hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
