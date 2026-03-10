"use client";

import { profile } from "@/lib/profile";

export default function SkillsSection() {
  const skillCategories = profile.skillsByCategory;

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>

        <div className="space-y-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {(skills as string[]).map((skill) => (
                  <div
                    key={skill}
                    className="p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
                  >
                    <p className="text-sm font-medium text-gray-700">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Languages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {profile.languages.map((language) => (
              <div
                key={language}
                className="p-4 bg-white rounded-lg border border-gray-200 text-center"
              >
                <p className="font-medium text-gray-700">{language}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
