const Footer = () => {
  const footerNav = [
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            {footerNav.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">{item.name}</span>
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
             <p className="text-center text-base text-gray-400">
                &copy; {new Date().getFullYear()} NorthPeak Digital. All rights reserved.
             </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <a
                href="https://digitalheroesco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-400"
            >
                Built for Digital Heroes Training Task
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
