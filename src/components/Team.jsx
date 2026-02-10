const Team = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      initials: 'SC',
      gradient: 'from-violet-400 via-purple-500 to-fuchsia-500',
    },
    {
      name: 'Michael Torres',
      role: 'Lead Developer',
      initials: 'MT',
      gradient: 'from-blue-400 via-indigo-500 to-purple-500',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Strategy Lead',
      initials: 'ER',
      gradient: 'from-pink-400 via-rose-500 to-red-500',
    },
    {
      name: 'David Park',
      role: 'Content Director',
      initials: 'DP',
      gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
    },
  ];

  return (
    <section id="team" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle gradient accents */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Talented individuals passionate about digital innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="reveal text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hexagon avatar container */}
              <div className="relative mb-6 mx-auto w-48 h-48">
                {/* Hexagon shape using clip-path */}
                <div 
                  className={`w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-4xl font-display font-bold shadow-2xl group-hover:scale-110 transition-all duration-500`}
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}
                >
                  <span className="relative z-10">{member.initials}</span>
                </div>
                
                {/* Decorative rotating ring */}
                <div 
                  className="absolute inset-0 border-4 border-transparent group-hover:border-gray-300 transition-all duration-500 group-hover:rotate-180"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                    transform: 'scale(1.1)'
                  }}
                ></div>

                {/* Glow effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`}
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}
                ></div>
              </div>

              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                {member.name}
              </h3>
              <p className="text-gray-600 font-medium mb-4">{member.role}</p>

              {/* Social Links - Simple and minimal */}
              <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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

export default Team;
