import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20DECODETECH%2C%20I%27d%20like%20to%20know%20more%20about%20your%20courses."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform flex items-center justify-center animate-float"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
}
