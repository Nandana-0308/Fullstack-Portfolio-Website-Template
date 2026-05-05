import React from 'react'

const educationData = [
  {
    title: "B.Tech in Computer Science",
    place: "XYZ College",
    year: "2022 – 2026",
    desc: "Focused on Web Development & Cyber Security"
  },
  {
    title: "Higher Secondary",
    place: "ABC School",
    year: "2020 – 2022",
    desc: "Percentage: 92%"
  }
]

const experienceData = [
  {
    title: "React Portfolio Project",
    place: "Personal Project",
    year: "2026",
    desc: "Built responsive portfolio using React & Tailwind"
  },
  {
    title: "Cyber Security Certification",
    place: "Online Course",
    year: "2025",
    desc: "Hands-on training in ethical hacking"
  }
]

const Education = ({ theme }) => {
  return (
    <section className="py-5">
      
      {/* Heading */}
      <h1 className="text-center text-xl md:text-2xl 
        text-[var(--color-color6)] mb-10">
        <span className='text-3xl md:text-5xl'>E</span>ducation <span className='text-3xl md:text-5xl'>& E</span>xperience
      </h1>

      <div className="relative max-w-6xl mx-auto px-5">

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] 
          bg-[var(--color-color5)] transform -translate-x-1/2">
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-10">

          {/* LEFT - EDUCATION */}
          <div className="space-y-10">
            {educationData.map((item, index) => (
              <div key={index} className="relative">

                {/* Dot */}
                <div className="md:block absolute 
                  right-[-25px] top-2 w-3 h-3 
                  bg-[var(--color-primary)] rounded-full">
                </div>

                {/* Card */}
                <div className="p-5 rounded-xl 
                  bg-[var(--color-baseColor)] 
                  border border-[var(--color-color5)]">

                  <h3 className="text-sm font-semibold text-[var(--color-color6)]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[var(--color-color3)]">
                    {item.place}
                  </p>

                  <p className="text-xs text-[var(--color-primary)] mt-1">
                    {item.year}
                  </p>

                  <p className="text-xs text-[var(--color-color3)] mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - EXPERIENCE */}
          <div className="space-y-10">
            {experienceData.map((item, index) => (
              <div key={index} className="relative">

                {/* Dot */}
                <div className="hidden md:block absolute 
                  left-[-25px] top-2 w-3 h-3 
                  bg-[var(--color-primary)] rounded-full">
                </div>

                {/* Card */}
                <div className="p-5 rounded-xl 
                  bg-[var(--color-baseColor)] 
                  border border-[var(--color-color5)]">

                  <h3 className="text-sm font-semibold text-[var(--color-color6)]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[var(--color-color3)]">
                    {item.place}
                  </p>

                  <p className="text-xs text-[var(--color-primary)] mt-1">
                    {item.year}
                  </p>

                  <p className="text-xs text-[var(--color-color3)] mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education