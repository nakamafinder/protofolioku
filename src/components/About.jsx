const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              I'm a passionate frontend developer with expertise in creating
              modern and responsive web applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              With over 5 years of experience, I've worked with various
              technologies including React, Vue.js, and modern CSS frameworks
              like Tailwind CSS.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              My goal is to create beautiful, accessible, and performant
              websites that provide great user experiences.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                Education
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Computer Science Degree
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                University Name, 2018
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Senior Frontend Dev
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                Company Name, 2020-Present
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                Freelance
              </h3>
              <p className="text-gray-600 dark:text-gray-400">50+ Projects</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                Since 2018
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                Certifications
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                React Specialist
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
