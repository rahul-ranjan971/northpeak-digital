const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-28">
      <div className="absolute inset-0 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 opacity-50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"></div>
        <div className="absolute inset-0 bg-gray-50 opacity-50 [mask-image:radial-gradient(100%_100%_at_bottom_left,white,transparent)]"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Digital Products Engineered for Measurable Growth.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a digital agency that builds high-performance web applications, designs intuitive user experiences, and delivers results that drive your business forward.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
            >
              Start Your Project
            </a>
            <a href="#services" className="text-sm font-semibold leading-6 text-gray-900 group">
              Our Services <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
