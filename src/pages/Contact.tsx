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
    <div className="pt-24 pb-20 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Get in Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-foreground/80 mb-6">
              Let's create something amazing together. Reach out for collaborations,
              inquiries, or just to say hello.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-primary font-semibold">Name</h3>
                <p className="text-foreground/80">{personalInfo.name}</p>
              </div>
              <div>
                <h3 className="text-primary font-semibold">Email</h3>
                <p className="text-foreground/80">{personalInfo.email}</p>
              </div>
              <div>
                <h3 className="text-primary font-semibold">Phone</h3>
                <p className="text-foreground/80">{personalInfo.phone}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground"
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
                className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground h-32"
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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