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
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // IMPORTANT: untuk emailjs
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: 'Message Sent',
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
    } catch (error) {
      toast({
        title: 'Failed to Send',
        description: 'There was an error sending your message.',
        variant: 'destructive',
      });
      console.error('Email send error:', error);
    }

    formRef.current.reset();
    setIsSubmitted(false);
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
          {/* Left Contact Info */}
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
                  <span className="text-muted-foreground">
                    Yogyakarta, Indonesia
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/ary-bayu-nurwicaksono/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://x.com/arybaync"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/arybync/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram />
                </a>
                <a
                  href="https://web.facebook.com/ary.bayuarero/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send Me A Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-start">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className={cn(
                    'w-full px-4 py-3 rounded-md border border-border bg-background',
                    'focus:outline-hidden focus:ring-2 focus:ring-primary'
                  )}
                  required
                  placeholder="Eren Yeager..."
                />

                <label className="block text-sm font-medium mb-2 mt-4 text-start">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  className={cn(
                    'w-full px-4 py-3 rounded-md border border-border bg-background',
                    'focus:outline-hidden focus:ring-2 focus:ring-primary'
                  )}
                  required
                  placeholder="yaegerist@example.com"
                />

                <label className="block text-sm font-medium mb-2 mt-4 text-start">
                  Your Message
                </label>
                <textarea
                  name="message"
                  className={cn(
                    'w-full px-4 py-3 rounded-md border border-input bg-background',
                    'focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                  )}
                  required
                  placeholder="Hello, I'd like to offer you a job..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="cosmic-button w-full flex items-center justify-center gap-2"
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
