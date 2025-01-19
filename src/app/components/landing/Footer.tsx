// components/Footer.tsx


const Footer = () => {
  const footerLinks = {
    Properties: ['Luxury Homes', 'Penthouses', 'Estates', 'New Developments'],
    Services: ['Property Management', 'Concierge', 'Investment Advisory', 'Market Research'],
    Company: ['About Us', 'Our Team', 'Careers', 'Press'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimers']
  };

  const socialLinks = [
    { name: 'Instagram', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Facebook', url: '#' }
  ];

  return (
    <footer className="bg-black pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div 
          
          className="mb-16 border-b border-white/10 pb-16"
        >
          <div className="mx-auto max-w-xl text-center">
            <h3 className="mb-6 text-2xl font-light text-white">
              Subscribe to Our
              <span className="block font-serif italic">Exclusive Properties</span>
            </h3>
            <p className="mb-8 text-gray-400">
              Be the first to know about new luxury properties and exclusive market insights.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/20"
              />
              <button 
                className="whitespace-nowrap bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div 
              key={category}
             
            >
              <h4 className="mb-4 text-sm font-medium text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div 
         
          className="mt-16 border-t border-white/10 py-8"
        >
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-xl font-light text-white">
                Pure<span className="font-serif italic">Estate</span>
              </span>
              <span className="text-sm text-gray-400">
                © {new Date().getFullYear()} All rights reserved
              </span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {social.name}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="text-sm text-gray-400">
              <span className="block text-center md:text-right">
                info@luxeestate.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;