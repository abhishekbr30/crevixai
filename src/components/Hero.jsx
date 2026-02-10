const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Advanced gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/80"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight">
            Turning imagination into{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                digital
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"></div>
            </span>{' '}
            impact.
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed">
            Creating meaningful connections and turning big ideas into
            interactive digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg relative overflow-hidden"
            >
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold rounded-full border-2 border-gray-300 hover:border-indigo-600 hover:bg-white hover:shadow-xl transition-all duration-300 text-lg"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
