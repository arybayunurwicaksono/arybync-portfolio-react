import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useToast } from '../hooks/use-toast';
import { useState } from 'react';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Here you can handle the form submission, e.g., send the data to an API
    console.log({ name, email, message });

    form.reset();

    setTimeout(() => {
      toast({
        title: 'Message Sent',
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      setIsSubmitted(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out to me
          using the form below or through my social media channels.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Email</h4>
                  <a
                    href="mailto:ary.bayunurw45@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ary.bayunurw45@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Phone</h4>
                  <a
                    href="tel:+6282132378091"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62 821-3237-8091
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Location</h4>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Yogyakarta, Indonesia
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/ary-bayu-nurwicaksono/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://x.com/arybaync"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/arybync/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram />
                </a>
                <a
                  href="https://web.facebook.com/ary.bayuarero/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me A Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 mt-3 text-start"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={cn(
                    'w-full px-4 py-3 rounded-md border border-border bg-background',
                    'text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary'
                  )}
                  required
                  placeholder="Eren Yaeger..."
                />
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 mt-3 text-start"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={cn(
                    'w-full px-4 py-3 rounded-md border border-border bg-background',
                    'text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary'
                  )}
                  required
                  placeholder="yaegerist@example.com"
                />
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 mt-3 text-start"
                >
                  Your message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  className={cn(
                    'w-full px-4 py-3 rounded-md border border-input bg-background',
                    "focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none mt-3 text-start"
                  )}
                  required
                  placeholder="Hello, i'd like to offer you a job..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className={cn(
                  'cosmic-button w-full flex items-center justify-center gap-2'
                )}
              >
                {isSubmitted ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
