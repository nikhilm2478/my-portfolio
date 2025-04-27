import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formsubmit.co/nikhilmukher@umass.edu", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });

    setIsSubmitted(true);
    form.reset();

    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-xl mx-auto bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg text-white relative overflow-hidden"
    >
      {/* 🌐 Subheading: Light Blue Glow */}
      <h3 className="text-2xl text-blue-400 drop-shadow-[0_0_10px_rgba(0,191,255,0.8)] text-center">
        Contact Me
      </h3>

      {/* ✨ Input Fields with White Glow */}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded bg-black/70 border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded bg-black/70 border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
      />

      <textarea
        name="message"
        rows={4}
        placeholder="Your Message"
        required
        className="w-full p-3 rounded bg-black/70 border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
      />

      {/* 🌊 Light Blue Glow for Send Message Button */}
      <button
        type="submit"
        className="w-full bg-blue-400 text-black font-bold py-2 px-4 rounded hover:bg-blue-300 transition-all shadow-md drop-shadow-[0_0_6px_rgba(0,191,255,0.6)]"
      >
        Send Message
      </button>

      {/* ✅ Success Message: White Glow */}
      {isSubmitted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-2xl animate-fade-in z-10">
          <div className="text-center space-y-2">
            <div className="text-4xl text-green-400 animate-pulse">✓</div>
            <p className="text-white text-xl drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
              Message Sent!
            </p>
          </div>
        </div>
      )}
    </form>
  );
}
