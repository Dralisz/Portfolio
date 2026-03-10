import { profile } from "@/lib/profile";

export default function AboutSection() {
  const yearsExperience = new Date().getFullYear() - profile.startYear;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">{profile.name}</h3>
              <p className="text-lg text-blue-600 font-semibold mb-1">
                {profile.title}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                📍 {profile.location}
              </p>
            </div>

            <div className="border-t pt-6">
              <h4 className="text-xl font-semibold mb-3">
                Professional Summary
              </h4>
              <p className="text-base text-gray-700 leading-relaxed">
                {profile.summary}
              </p>
            </div>

            <div className="flex gap-6 text-sm">
              <div>
                <p className="text-gray-600">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="text-gray-600">Phone</p>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-blue-600 hover:underline"
                >
                  {profile.phone}
                </a>
              </div>
            </div>

            <a
              href={profile.cvPath}
              download
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download CV
            </a>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="/Portfolio/me.jpg"
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
