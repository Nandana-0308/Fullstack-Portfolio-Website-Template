import React from 'react'

const techStack = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 70 },
  { name: "Git", level: 75 },
  { name: "Cyber Security", level: 60 }
]

const TechSkills = () => {
  return (
    <section className="py-12">

      {/* Heading */}
      <h1 className="flex items-center justify-center 
        text-[var(--color-color6)] 
        text-xl md:text-2xl mb-6 
        animate-fade-in animation-delay-400">
        <span className='text-3xl md:text-5xl'>T</span>echnologies Known
      </h1>

      {/* 🔥 Marquee
      <div className='relative overflow-hidden mb-10 group'>
        <div className='flex animate-marquee group-hover:[animation-play-state:paused]'>
          {[...techStack, ...techStack].map((skill, index) => (
            <div
              key={index}
              className='text-[var(--color-color6)] flex-shrink-0 px-8 py-4 opacity-80 hover:opacity-100 transition'
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div> */}

      {/* 💡 Skill Levels */}
      <div className="max-w-4xl mx-auto px-5 
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                gap-x-30 gap-y-6 animate-fade-in animation-delay-400">
        {techStack.map((skill, index) => (
          <div key={index} className="">

            {/* Skill Name + % */}
            <div className="flex justify-between text-xs text-[var(--color-color6)] ">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[var(--color-color5)] h-2 rounded-full overflow-hidden">
              <div
                className="h-1.5 rounded-full 
            bg-gradient-to-r from-cyan-400 to-blue-500 
            transition-all duration-1000 ease-out"
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