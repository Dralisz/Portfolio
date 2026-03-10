"use client";

import { profile } from "@/lib/profile";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {profile.experience.map((job, jobIndex) => (
            <div
              key={jobIndex}
              className="border-l-4 border-blue-600 pl-6 pb-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold">
                    {job.company}
                  </p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">
                  {job.years}
                </span>
              </div>

              {job.highlights && job.highlights.length > 0 && (
                <div className="space-y-6">
                  {job.highlights.map((project, projIndex) => {
                    // Check if this is the new format with projectTitle and achievements
                    if ("projectTitle" in project) {
                      return (
                        <div
                          key={projIndex}
                          className="bg-gray-50 p-5 rounded-lg"
                        >
                          <h4 className="font-semibold text-lg text-gray-900 mb-2">
                            {project.projectTitle}
                          </h4>
                          <p className="text-gray-700 mb-3">
                            {project.description}
                          </p>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-sm text-gray-700"
                              >
                                <span className="text-blue-600 mr-3 font-bold">
                                  •
                                </span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    } else {
                      // Fallback for old format (string highlights)
                      return (
                        <div key={projIndex} className="flex items-start">
                          <span className="text-blue-600 mr-3 font-bold">
                            •
                          </span>
                          <p className="text-gray-700">{project}</p>
                        </div>
                      );
                    }
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16 pt-8 border-t border-gray-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
          <div className="border-l-4 border-blue-600 pl-6">
            {profile.education.map((edu, index) => (
              <div key={index} className="pb-6">
                <h4 className="font-semibold text-lg text-gray-900 mb-1">
                  {edu.degree}
                </h4>
                <p className="text-blue-600 font-medium mb-1">{edu.school}</p>
                <p className="text-gray-600">{edu.years}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
