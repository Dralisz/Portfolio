export default function SkillsSection() {
  const skills = ["React", "TypeScript", "Next.js", "Tailwind CSS"];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-4 bg-gray-50 rounded-lg text-center font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
