const tiers = [
  {
    name: 'Launch',
    price: '$5,000',
    description: 'For new projects and MVPs that need to get off the ground quickly.',
    features: [
      'Up to 5 page website',
      'Responsive Design',
      'Basic SEO Setup',
      'Contact Form',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$15,000',
    description: 'For businesses ready to scale with a more complex, feature-rich platform.',
    features: [
      'Up to 15 page website',
      'Custom UI/UX Design',
      'CMS Integration',
      'Advanced SEO & Performance',
      'API Integrations',
    ],
    highlighted: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    description: 'For large-scale applications with unique requirements and ongoing support.',
    features: [
      'Unlimited Pages',
      'Enterprise-grade Architecture',
      'Dedicated Support',
      'Advanced Security',
      'Ongoing Optimization',
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Clear Pricing for Ambitious Teams
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Choose a plan that aligns with your goals. No hidden fees.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col p-8 rounded-lg border ${
                tier.highlighted ? 'bg-white border-indigo-600 border-2' : 'bg-white border-gray-200'
              }`}
            >
              <h3 className="text-lg font-semibold leading-6 text-gray-900">{tier.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{tier.description}</p>
              <p className="mt-4">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                {tier.name !== 'Scale' && <span className="text-sm font-semibold text-gray-600"> one-time</span>}
              </p>
              <ul role="list" className="mt-6 space-y-4 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 transition-colors ${
                  tier.highlighted
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300'
                }`}
              >
                {tier.name === 'Scale' ? 'Contact Us' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
