import { useState } from "react";
import emailjs from "@emailjs/browser";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      alert("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    }).catch(() => alert("Erro ao enviar. Tente novamente."));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Entre em Contato</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input type="text" name="name" required value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="Nome" onChange={(e) => setFormData({...formData, name: e.target.value})}/>
            
            <input type="email" name="email" required value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="exemplo@gmail.com" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
            
            <textarea name="message" required rows={5} value={formData.message}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="Sua mensagem..." onChange={(e) => setFormData({...formData, message: e.target.value})}/>
            
            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};