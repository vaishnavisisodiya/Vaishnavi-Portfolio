import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.status === 'success') {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-gray-900 to-black border-4 border-gray-800">
      <div className="flex items-center gap-3 mb-8">
        <Mail className="w-8 h-8 text-cyan-400" />
        <h3 className="text-3xl font-black tracking-tight">Send a Message</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">
            YOUR NAME *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black border-2 border-gray-700 text-white focus:border-cyan-400 focus:outline-none transition-colors font-mono"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">
            YOUR EMAIL *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black border-2 border-gray-700 text-white focus:border-cyan-400 focus:outline-none transition-colors font-mono"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-mono text-gray-400 mb-2">
            SUBJECT
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border-2 border-gray-700 text-white focus:border-cyan-400 focus:outline-none transition-colors font-mono"
            placeholder="Project Collaboration"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">
            YOUR MESSAGE *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-3 bg-black border-2 border-gray-700 text-white focus:border-cyan-400 focus:outline-none transition-colors font-mono resize-none"
            placeholder="Tell me about your project or opportunity..."
          />
        </div>

        {status.message && (
          <div className={`p-4 border-2 flex items-start gap-3 ${
            status.type === 'success' 
              ? 'border-green-500 bg-green-500/10' 
              : 'border-red-500 bg-red-500/10'
          }`}>
            {status.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            )}
            <p className={`text-sm font-mono ${
              status.type === 'success' ? 'text-green-400' : 'text-red-400'
            }`}>
              {status.message}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-cyan-400 transition-all duration-300 border-4 border-white hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/50 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              SENDING...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              SEND MESSAGE
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
