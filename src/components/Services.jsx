import { Code, Layers, ShoppingCart, Zap, TrendingUp, Share2 } from 'lucide-react';

const services = [
  {
    name: 'Web Development',
    description: 'High-performance, scalable web applications tailored to your business needs.',
    icon: Code,
  },
  {
    name: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces that provide a seamless user experience.',
    icon: Layers,
  },
  {
    name: 'E-commerce Solutions',
    description: 'Robust e-commerce platforms designed to convert visitors into customers.',
    icon: ShoppingCart,
  },
  {
    name: 'Performance Optimization',
    description: 'Blazing-fast websites that deliver an exceptional experience and rank higher.',
    icon: Zap,
  },
  {
    name: 'SEO & Growth',
    description: 'Data-driven strategies to increase your visibility and attract more customers.',
    icon: TrendingUp,
  },
  {
    name: 'API & Systems Integration',
    description: 'Connecting your systems for streamlined workflows and enhanced capabilities.',
    icon: Share2,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Expertise
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We provide the technical expertise to bring your digital vision to life.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col p-8 bg-white border border-gray-200 rounded-lg">
              <div className="flex-shrink-0">
                <service.icon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                <p className="mt-2 text-base text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
