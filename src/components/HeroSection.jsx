import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden ">
      {/* Background Image on Right */}
      <img
        src={heroBg}
        alt="Hero"
        className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-200 object-cover"
      />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col items-start md:items-start min-h-screen justify-center ">
        <p className="text-mygreen font-semibold tracking-wide mb-4">
          FULL STACK DEVELOPER
        </p>

        <h1 className="font-serifHeading font-semibold text-5xl md:text-6xl text-gray-800 leading-tight mb-6">
          Hello, my name <br /> is Daniel Visser
        </h1>

        <p className="text-gray-800 max-w-md mb-10 leading-relaxed">
          I’m an aspiring developer seeking to start my professional career and
          improve my knowledge in the field.
        </p>

        <div className="flex gap-4 text-center">
          <a
            href="https://github.com/DanVisser-WebDev"
            className="w-28 px-6 py-3 border-2 border-brand-green bg-brand-green text-white rounded-2xl hover:bg-brand-light-green hover:border-brand-light-green transition"
            target="_blank">
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-visser-0b70ba28b/"
            className="w-28 px-6 py-3 border-2 border-gray-800 rounded-2xl hover:bg-gray-300 transition"
            target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
