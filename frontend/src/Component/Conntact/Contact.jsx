import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData)
    // Here you would typically handle form submission, e.g., sending data to a server
    const url = "https://example.com/api/contact"; // Replace with your API endpoint
    try{
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Success:", data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    }catch{
      console.log(`Some error occurred while submitting the form: ${e}`);
      return;
    }
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  }


  return (
    <section className="py-20 px-6 bg-gray-900">
      <h3 className="text-3xl font-bold mb-8 text-[#fff] text-center">Contact Us</h3>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 rounded bg-black border border-gray-600 text-white"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 rounded bg-black border border-gray-600 text-white"
          required
        />
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-3 rounded bg-black border border-gray-600 text-white"
          required
        />
        <button
          type="submit"
          className="w-full cursor-pointer p-3 bg-purple-600 rounded hover:bg-purple-700 text-white font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}


export default Contact;