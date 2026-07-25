const testimonials = [
  {
    quote: 'NorthPeak Digital transformed our online presence. Our conversion rate increased by 42% within three months of launching the new site.',
    name: 'Sarah Johnson',
    title: 'Marketing Director, Fictional Corp',
  },
  {
    quote: 'The performance optimization work was incredible. Our Lighthouse score went from 65 to 98, and we saw a noticeable drop in bounce rate.',
    name: 'Michael Chen',
    title: 'CTO, DemoTech Solutions',
  },
  {
    quote: "Working with them was a seamless experience. They delivered the project on time and the new e-commerce platform has handled a 200% increase in traffic without a hitch.",
    name: 'Emily Rodriguez',
    title: 'Founder, Example Goods',
  },
];

const Results = () => {
  return (
    <section id="results" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Proven Results
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Don't just take our word for it. Here's how we've helped businesses like yours.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex flex-col justify-between p-6 bg-gray-50 rounded-lg border border-gray-200">
              <blockquote className="text-gray-700">
                <p>"“{testimonial.quote}”"</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
         <p className="mt-8 text-center text-sm text-gray-500">
            * All client names, company names, and results are fictional and for demonstration purposes only.
          </p>
      </div>
    </section>
  );
};

export default Results;
