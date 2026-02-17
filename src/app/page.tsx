import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                I&apos;m a passionate frontend developer with{" "}
                {new Date().getFullYear() - 2012} years of experience in
                creating responsive and user-friendly web applications. I
                started my journey in programming at the age of 17 and have been
                continuously learning and growing since then.
              </p>
              <p className="text-lg text-gray-600">
                My expertise includes modern frontend technologies like React,
                TypeScript, and Next.js. I&apos;m passionate about creating
                clean, efficient, and maintainable code while delivering
                exceptional user experiences.
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

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add your project cards here */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project 1</h3>
                <p className="text-gray-600">
                  Description of your first project
                </p>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Interactive Games
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tic Tac Toe Game */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Tic Tac Toe</h3>
                <div
                  className="bg-white rounded border border-gray-200"
                  style={{ height: "400px" }}
                >
                  <iframe
                    src="/games/TicTacToe/index.html"
                    title="Tic Tac Toe Game"
                    className="w-full h-full border-none rounded"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              </div>
            </div>
            {/* Minesweeper Game */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Minesweeper</h3>
                <div
                  className="bg-white rounded border border-gray-200"
                  style={{ height: "400px" }}
                >
                  <iframe
                    src="/games/Minesweeper/index.html"
                    title="Minesweeper Game"
                    className="w-full h-full border-none rounded"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              </div>
            </div>
            {/* Sudoku Game */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Sudoku</h3>
                <div
                  className="bg-white rounded border border-gray-200"
                  style={{ height: "400px" }}
                >
                  <iframe
                    src="/games/Sudoku/index.html"
                    title="Sudoku Game"
                    className="w-full h-full border-none rounded"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              </div>
            </div>
            {/* Playground Game */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Playground</h3>
                <div
                  className="bg-white rounded border border-gray-200"
                  style={{ height: "400px" }}
                >
                  <iframe
                    src="/games/Playground/index.html"
                    title="Playground Game"
                    className="w-full h-full border-none rounded"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              </div>
            </div>
            {/* Tic Tac Toe AI Game */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Tic Tac Toe AI</h3>
                <div
                  className="bg-white rounded border border-gray-200"
                  style={{ height: "400px" }}
                >
                  <iframe
                    src="/games/TicTacToeAI/index.html"
                    title="Tic Tac Toe AI Game"
                    className="w-full h-full border-none rounded"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="p-4 bg-gray-50 rounded-lg text-center">React</div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              TypeScript
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">Next.js</div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              Tailwind CSS
            </div>
            {/* Add more skills */}
          </div>
        </div>
      </section>

      {/* Experience Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
