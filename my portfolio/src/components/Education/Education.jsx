import React from "react";
import { education } from "../../constants";

function Education() {
  return (
    <section
      id="education"
      className="py-20 pb-20 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-stone-900"
    >
      {/* section title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-3xl font-bold text-white">EDUCATION</h2>
        <div className="w-38 h-1 bg-[#8245ec] mx-auto mt-0.5"></div>
        <p className="text-gray-400 mt-4 font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 == 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-13 sm:h-13 rounded-full flex justify-center items-center z-10">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
            </div>

            {/* Contect Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-7 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 == 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-0 sm:mr-0 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo */}
                <div className="w-13 h-13 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, school Name, and date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
