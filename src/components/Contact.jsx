import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your message has been sent. I'll get back to you at ${formData.email} soon.`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "devsajid56@gmail.com",
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+88 01703 307756",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Bogura, Bangladesh",
    },
  ];

  const socialLinks = [
    { icon: "fab fa-github", link: "https://github.com/sajid-7756" },
    {
      icon: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/in/sajidos/",
    },
    { icon: "fab fa-twitter", link: "https://x.com/_____Sajid_____" },
    { icon: "fab fa-dev", link: "https://dev.to/sajid7756" },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Get In</span>
            <span className="text-accent"> Touch</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-cyan-500 to-indigo-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-800/50 rounded-xl p-6 md:p-8 border border-gray-700 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="bg-gray-800/50 rounded-xl p-6 md:p-8 border border-gray-700 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-accent text-xl mr-4">
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{info.title}</h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={`${social.link}`}
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center bg-gray-900 hover:bg-accent text-accent hover:text-white rounded-full transition-all duration-300"
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
