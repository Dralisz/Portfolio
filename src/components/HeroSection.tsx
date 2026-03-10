import { profile } from "@/lib/profile";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          {profile.name}
        </h1>
        <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-4">
          {profile.title}
        </p>
        <p className="text-lg md:text-xl text-gray-600 mb-2">
          📍 {profile.location}
        </p>
        <p className="text-lg text-gray-600 mb-8">
          {Math.max(new Date().getFullYear() - profile.startYear, 1)}+ years of
          experience building modern web applications
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href={profile.cvPath}
            download
            className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Download CV
          </a>
        </div>
        <div className="flex justify-center gap-6 text-gray-600">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-blue-600 transition-colors"
          >
            ✉️ {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="hover:text-blue-600 transition-colors"
          >
            📞 {profile.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
