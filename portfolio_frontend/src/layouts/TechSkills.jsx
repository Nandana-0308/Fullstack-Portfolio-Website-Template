import React from 'react'
import { APP_DATA } from "../constants/appData";

const TechSkills = ({ theme }) => {
console.log("Themee",theme);


  return (
    <section id='techskills' className="py-12">

      {/* Heading */}
      <h1 className="flex items-center justify-center 
        text-[var(--color-color6)] 
        text-xl md:text-2xl mb-6 
        animate-fade-in animation-delay-400">
        <span className='text-3xl md:text-5xl'>T</span>echnologies Known
      </h1>

      {/* Skills */}
      <div className="max-w-4xl mx-auto px-5 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-x-10 gap-y-6 animate-fade-in animation-delay-400">

        {APP_DATA.skills.map((skill, index) => (
          <div key={index}>

            {/* Skill Name + % */}
            <div className="flex justify-between text-xs text-[var(--color-color6)]">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[var(--color-color5)] h-2 rounded-full overflow-hidden">
              <div
                className={`
                  h-1.5 rounded-full transition-all duration-1000 ease-out  
                  ${theme === "light"
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                    : "bg-gradient-to-r from-cyan-400 to-blue-500"
                  }
                `}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default TechSkills