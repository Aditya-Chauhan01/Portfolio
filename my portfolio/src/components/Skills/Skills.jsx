import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from 'react-parallax-tilt'

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 pb-20 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-neutral-950 clip-path-custom"
    >
      {/* section title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-3xl font-bold text-white">SKILLS</h2>
        <div className="w-20 h-1 bg-[#8245ec] mx-auto mt-0.5"></div>
        <p className="text-gray-400 mt-4 font-semibold">
          A collection of my technical skills and expertise honed through
          projects and experiences
        </p>
      </div>

      {/* Skill Categories */}
      <div class="flex flex-wrap gap-3 lg:gap-3 py-5 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            class="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-4 mb-7 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_25px_2px_rgba(130,69,236,0.3)]"
          >
            <h3 class="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* skill items - 3 per row on larger screens */}
            <Tilt
              key={category.title}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    class="flex items-center justify-center space-x-1 bg-transparent border-2 border-gray-700 rounded-3xl py-2 sm:py-2 text-center"
                  >
                    <img

                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      class="w-6 h-6 sm:w-5 sm:h-5"
                    />
                    <span style={{ fontSize: "13px" }} class=" text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
