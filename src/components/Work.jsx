const Work = () => {
  const projects = [
    {
      title: 'Brand Transformation',
      description: 'Complete digital rebrand for a Fortune 500 tech company, resulting in 300% increase in engagement.',
      category: 'Branding & Strategy',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Custom-built marketplace connecting artisans with global buyers, processing $2M+ in transactions.',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Social Campaign',
      description: 'Viral marketing campaign reaching 10M+ impressions across multiple platforms in 30 days.',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
      gradient: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section id="work" className="section-padding relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Our Latest Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pushing boundaries and delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="reveal group relative overflow-hidden rounded-3xl shadow-xl card-hover bg-white"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image with overlay gradient */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                <button className="inline-flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform">
                  View Case Study
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
