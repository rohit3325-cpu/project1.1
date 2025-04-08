// components/ContactSection.jsx

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
      

    emailjs.sendForm(
      'service_hg8x728',
      'template_q4lzavr',      // Replace with your EmailJS template ID
      form.current,
      'Wd2YKQQGYeiaK9Qav'        // Replace with your EmailJS public key
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Try again!');
        console.error(error.text);
      }
    );
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#0f0f0f] text-white py-16 px-6 md:px-20 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12">
        {/* Left Side - Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-6">
            Have a project in mind? We'd love to hear from you. Fill out the form and we'll get back to you soon.
          </p>

          <div className="space-y-4 text-gray-300">
            <p><strong>Email:</strong> contact@megablog.com</p>
            <p><strong>Phone:</strong> +91 62031 99769</p>
            <p><strong>Location:</strong> Delhi, India</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-[#1a1a1a] p-8 rounded-2xl shadow-lg">
          <div>
            <label className="block text-sm text-gray-300">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full p-3 mt-1 rounded-lg bg-[#2a2a2a] text-white outline-none"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full p-3 mt-1 rounded-lg bg-[#2a2a2a] text-white outline-none"
              placeholder="Your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full p-3 mt-1 rounded-lg bg-[#2a2a2a] text-white outline-none"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-6 py-3 rounded-xl w-full font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
