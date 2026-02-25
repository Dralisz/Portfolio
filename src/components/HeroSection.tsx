export default function HeroSection() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Frontend Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Creating beautiful and functional web experiences
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
