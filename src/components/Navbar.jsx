import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-2xl border-b border-white/20"
          : "bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-md"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo with gradient orb */}
          <div className="flex items-center relative">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-agency-indigo/20 to-agency-accent/20 rounded-full blur-xl"></div>
            <a
              href="#"
              className="text-3xl font-display font-bold relative z-10"
            >
              <span className="bg-gradient-to-r from-agency-blue via-agency-indigo to-agency-accent bg-clip-text text-transparent hover:scale-105 transition-transform inline-block">
                crevix
              </span>
              <span className="text-agency-accent">.ai</span>
            </a>
          </div>

          {/* Desktop Menu - Modern pill design */}
          <div className="hidden md:flex items-center gap-2 bg-white/60 backdrop-blur-lg rounded-full px-2 py-2 shadow-lg border border-white/20">
            <button
              onClick={() => scrollToSection("home")}
              className="px-6 py-2.5 font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-agency-indigo hover:to-agency-accent rounded-full transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-6 py-2.5 font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-agency-indigo hover:to-agency-accent rounded-full transition-all duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="px-6 py-2.5 font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-agency-indigo hover:to-agency-accent rounded-full transition-all duration-300"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="px-6 py-2.5 font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-agency-indigo hover:to-agency-accent rounded-full transition-all duration-300"
            >
              Team
            </button>
          </div>

          {/* CTA Button - Enhanced */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="relative px-8 py-3.5 bg-gradient-to-r from-agency-indigo via-agency-accent to-agency-indigo bg-[length:200%] bg-left hover:bg-right text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden group"
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button
            className="md:hidden p-3 rounded-2xl bg-white/80 backdrop-blur-lg border border-white/20 hover:bg-gradient-to-br hover:from-agency-indigo hover:to-agency-accent hover:text-white transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Glass morphism */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-4 right-4 bg-white/90 backdrop-blur-2xl shadow-2xl rounded-3xl overflow-hidden border border-white/20 animate-slide-up">
            <div className="flex flex-col space-y-1 p-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-agency-indigo hover:to-agency-accent transition-all py-4 px-6 rounded-2xl"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-agency-indigo hover:to-agency-accent transition-all py-4 px-6 rounded-2xl"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-left font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-agency-indigo hover:to-agency-accent transition-all py-4 px-6 rounded-2xl"
              >
                Our Work
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-left font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-agency-indigo hover:to-agency-accent transition-all py-4 px-6 rounded-2xl"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-4 px-8 py-4 bg-gradient-to-r from-agency-indigo to-agency-accent text-white font-semibold rounded-2xl hover:shadow-lg transition-all"
              >
                Let's Connect
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
