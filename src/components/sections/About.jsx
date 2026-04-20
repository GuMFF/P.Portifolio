import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
          I am a Software Engineering student and an aspiring Web Developer at the very beginning of my professional journey.
           My focus is on building modern, functional web applications while constantly expanding my technical toolkit.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
