export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-12">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">Frontend Developer</h3>
            <p className="text-gray-600">Current Company • 2016 - Present</p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Developed and maintained responsive web applications</li>
              <li>Collaborated with cross-functional teams</li>
              <li>Implemented new features and optimized performance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
