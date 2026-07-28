import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed top-24 right-4 md:right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 blur-lg animate-pulse" />
      <span className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 group-hover:scale-105 transition-transform">
        <svg viewBox="0 0 32 32" className="h-6 w-6 md:h-7 md:w-7" fill="currentColor" aria-hidden>
          <path d="M19.11 17.28c-.29-.14-1.7-.84-1.97-.93-.26-.1-.45-.14-.65.14-.19.29-.74.94-.91 1.13-.17.19-.34.22-.62.07-.29-.14-1.21-.45-2.31-1.42-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.56-.89-2.13-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.77.36-.26.29-1 .98-1 2.4 0 1.41 1.03 2.78 1.17 2.97.14.19 2.02 3.08 4.89 4.32.68.29 1.21.47 1.63.6.68.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM16 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.26.6 4.45 1.73 6.38L3.2 28.8l6.6-1.72A12.75 12.75 0 0 0 16 28.8C23.07 28.8 28.8 23.07 28.8 16 28.8 8.93 23.07 3.2 16 3.2z" />
        </svg>
      </span>
    </a>
  );
}
