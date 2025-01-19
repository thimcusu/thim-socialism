import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-brown-50 text-brown-900 font-sans">
      {/* Hero Section */}

      {/* About Section */}
      <section className="text-center px-8 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-brown-900 mb-6">About Me</h2>
        <p className="text-lg text-brown-600 max-w-3xl mx-auto mb-12">
          I am a passionate web developer with expertise in creating intuitive and responsive user interfaces. I
          specialize in modern web technologies and enjoy bringing innovative ideas to life. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur auctor purus et malesuada aliquet.
        </p>
        <Button className="px-6 py-3 bg-brown-600 text-white text-xl rounded-md shadow-md hover:bg-brown-500 transition-colors duration-300">
          More About Me
        </Button>
      </section>

      {/* Services Section */}
      <section className="bg-brown-50 py-16">
        <div className="text-center px-8">
          <h2 className="text-3xl font-bold text-brown-900 mb-8">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-brown-900 mb-4">Web Development</h3>
              <p className="text-lg text-brown-600">
                Creating responsive, dynamic, and user-friendly websites tailored to your business needs.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-brown-900 mb-4">UI/UX Design</h3>
              <p className="text-lg text-brown-600">
                Designing seamless user experiences with modern tools and creative approaches.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-brown-900 mb-4">Consulting</h3>
              <p className="text-lg text-brown-600">
                Offering expert advice on optimizing your website or app for both design and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gray-50 py-16">
        <div className="text-center px-8">
          <h2 className="text-3xl font-bold text-brown-900 mb-8">My Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Example Project 1 */}
            <div
              className="relative w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: "url(/project1.jpg)" }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <h3 className="text-xl font-semibold">Project Title</h3>
              </div>
            </div>
            {/* Example Project 2 */}
            <div
              className="relative w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: "url(/project2.jpg)" }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <h3 className="text-xl font-semibold">Project Title</h3>
              </div>
            </div>
            {/* Example Project 3 */}
            <div
              className="relative w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: "url(/project3.jpg)" }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <h3 className="text-xl font-semibold">Project Title</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center bg-brown-600 py-16">
        <h2 className="text-3xl font-bold text-white mb-6">Let's Get in Touch</h2>
        <p className="text-lg text-white max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor purus et malesuada aliquet.
        </p>
        <Button className="px-8 py-4 bg-white text-brown-600 text-xl rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300">
          Contact Me
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-brown-900 text-center text-white py-4">
        <p>© 2025 Thim Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
