import { useState } from 'react';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const tempErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) tempErrors.name = 'Name is required.';

    const emailToValidate = formData.email.trim();
    if (!emailToValidate) {
      tempErrors.email = 'Email is required.';
    } else if (!emailPattern.test(emailToValidate)) {
      tempErrors.email = 'Email is not valid.';
    }

    if (!formData.service) tempErrors.service = 'Please select a service.';
    if (!formData.message) tempErrors.message = 'Message is required.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                 <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Thank You!</h2>
                 <p className="mt-4 text-lg leading-8 text-gray-600">
                    Your message has been sent. We'll get back to you shortly.
                 </p>
            </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let's Build Something Great
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Have a project in mind? Fill out the form below and we'll be in touch.
          </p>
        </div>
        <div className="mt-16 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
                <div className="mt-2.5">
                  <input type="text" name="name" id="name" autoComplete="name" value={formData.name} onChange={handleChange} className={`block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.name ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`} />
                  {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <div className="mt-2.5">
                  <input type="email" name="email" id="email" autoComplete="email" value={formData.email} onChange={handleChange} className={`block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.email ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`} />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">Company (Optional)</label>
                <div className="mt-2.5">
                  <input type="text" name="company" id="company" autoComplete="organization" value={formData.company} onChange={handleChange} className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                 <label htmlFor="service" className="block text-sm font-semibold leading-6 text-gray-900">Service of Interest</label>
                 <div className="mt-2.5">
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className={`block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.service ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}>
                        <option value="">Select a service</option>
                        <option>Web Development</option>
                        <option>UI/UX Design</option>
                        <option>E-commerce Solutions</option>
                        <option>Performance Optimization</option>
                        <option>SEO & Growth</option>
                        <option>API & Systems Integration</option>
                    </select>
                    {errors.service && <p className="mt-2 text-sm text-red-600">{errors.service}</p>}
                 </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                <div className="mt-2.5">
                  <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} className={`block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.message ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}></textarea>
                  {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
