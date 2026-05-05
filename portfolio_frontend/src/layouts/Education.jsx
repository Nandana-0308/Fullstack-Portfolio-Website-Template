import React from 'react'
import { APP_DATA } from "../constants/appData";

const Education = () => {

  const educationData = APP_DATA.education;
  const experienceData = APP_DATA.experience;

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

                <div className="md:block absolute 
                  right-[-25px] top-2 w-3 h-3 
                  bg-[var(--color-primary)] rounded-full">
                </div>

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

                <div className="hidden md:block absolute 
                  left-[-25px] top-2 w-3 h-3 
                  bg-[var(--color-primary)] rounded-full">
                </div>

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