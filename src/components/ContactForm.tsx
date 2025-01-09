import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-[#E0E0E0] mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-[#1A0F0F] border border-[#FF4500] text-[#E0E0E0] focus:outline-none focus:border-[#FFD700] transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-[#E0E0E0] mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-[#1A0F0F] border border-[#FF4500] text-[#E0E0E0] focus:outline-none focus:border-[#FFD700] transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-[#E0E0E0] mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-[#1A0F0F] border border-[#FF4500] text-[#E0E0E0] focus:outline-none focus:border-[#FFD700] transition-colors"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#FF4500] to-[#FFD700] text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        <Send size={20} />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;