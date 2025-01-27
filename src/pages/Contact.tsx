import { useState } from "react";
import { toast } from "sonner";
import { personalInfo } from "../data/videos";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("6WY7slgRhViddS8x6");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent multiple rapid submissions
    if (isSubmitting) {
      toast.error("Please wait before sending another message.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_vrdxow5',
        'template_8lg4u7r',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'syed4abdurrehman@gmail.com',
        }
      );
      
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      if (error?.status === 429) {
        toast.error("Too many requests. Please try again in a moment.");
      } else if (error?.status === 400) {
        toast.error("Configuration error. Please try again later.");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      // Allow new submissions after 5 seconds
      setTimeout(() => {
        setIsSubmitting(false);
      }, 5000);
    }
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 glow-text text-center">Get in Touch</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground glow-border"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground glow-border"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground h-32 glow-border"
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed glow-hover"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
