export default function ContactPage() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out. I'm always open to new challenges and
          collaborations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-6 text-[#1C77C3]">
              Send Me a Message
            </h3>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1C77C3] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1C77C3] focus:border-transparent"
                  placeholder="Your email address"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1C77C3] focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#FF6B35] hover:bg-[#e55a29] text-white py-3 px-8 rounded-lg transition-colors duration-300 w-full md:w-auto !rounded-button whitespace-nowrap cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-between">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 text-[#1C77C3]">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#1C77C3] bg-opacity-10 p-3 rounded-full mr-4">
                    <i className="fas fa-envelope text-[#1C77C3]"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">alex.johnson@example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#1C77C3] bg-opacity-10 p-3 rounded-full mr-4">
                    <i className="fas fa-map-marker-alt text-[#1C77C3]"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">San Francisco, California</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#1C77C3] bg-opacity-10 p-3 rounded-full mr-4">
                    <i className="fas fa-phone text-[#1C77C3]"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-6 text-[#1C77C3]">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-[#FF6B35] text-white p-3 rounded-full transition-transform hover:scale-110 cursor-pointer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="#"
                  className="bg-[#1C77C3] text-white p-3 rounded-full transition-transform hover:scale-110 cursor-pointer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="bg-[#FF6B35] text-white p-3 rounded-full transition-transform hover:scale-110 cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="bg-[#1C77C3] text-white p-3 rounded-full transition-transform hover:scale-110 cursor-pointer"
                >
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
