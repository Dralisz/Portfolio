import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              I&apos;m a passionate frontend developer with{" "}
              {new Date().getFullYear() - 2012} years of experience in creating
              responsive and user-friendly web applications. I started my
              journey in programming at the age of 17 and have been continuously
              learning and growing since then.
            </p>
            <p className="text-lg text-gray-600">
              My expertise includes modern frontend technologies like React,
              TypeScript, and Next.js. I&apos;m passionate about creating clean,
              efficient, and maintainable code while delivering exceptional user
              experiences.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/me.jpg"
              alt="Ronai Szilard Norbert"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
