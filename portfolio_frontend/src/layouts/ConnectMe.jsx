import React, { useState } from "react";
import.meta.env;

const ConnectMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log(`here the api url ${import.meta.env.VITE_APP_API_URL}`);
      
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message stored in database 🚀");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to store message ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <section id="connect" className="py-20 flex items-center justify-center px-4">
      
      <div className="glass w-full max-w-2xl rounded-2xl shadow-lg">
        
        <h2 className="text-3xl font-bold text-center text-[var(--color-color6)] mb-2">
          Connect With Me
        </h2>
        <p className="text-center text-[var(--color-color3)] mb-6">
          Let’s build something amazing together 🚀
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-transparent border border-[var(--color-color5)] text-[var(--color-color6)] focus:outline-none focus:border-[var(--color-primary)]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-transparent border border-[var(--color-color5)] text-[var(--color-color6)] focus:outline-none focus:border-[var(--color-primary)]"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-transparent border border-[var(--color-color5)] text-[var(--color-color6)] focus:outline-none focus:border-[var(--color-primary)]"
          />

          <button
            type="submit"
            disabled={loading}
            className="animated-border-btn mt-4"
          >
            <span className="btn-inner-content">
              {loading ? "Sending..." : "Send Message"}
            </span>
          </button>

        </form>
      </div>
    </section>
  );
};

export default ConnectMe;