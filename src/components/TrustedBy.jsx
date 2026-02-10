const TrustedBy = () => {
  const brands = [
    'Coinbase',
    'Google',
    'Rakuten',
    'Microsoft',
    'Airbnb',
    'Zoom',
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="reveal">
          <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-12 font-semibold">
            Trusted by industry leaders
          </p>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <div
                key={brand}
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl font-display font-bold text-gray-400 hover:text-agency-indigo transition-colors">
                  {brand}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile scroll hint */}
          <div className="md:hidden text-center mt-8">
            <p className="text-xs text-gray-400">Scroll horizontally to see more</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
