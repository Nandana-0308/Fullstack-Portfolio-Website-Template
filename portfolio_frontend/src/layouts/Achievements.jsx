import React, { useState } from 'react'
import { APP_DATA } from "../constants/appData";

const Achievements = () => {
    const [activeCategory, setActiveCategory] = useState(null)
    const [expandedItem, setExpandedItem] = useState(null)

    const categories = APP_DATA.categories; 

    return (
        <section className="py-10 ">

            {/* Heading */}
            <h1 className="text-center text-xl md:text-2xl 
        text-[var(--color-color6)] mb-12">
                Achievements
            </h1>

            {/* CATEGORY STACK */}
            <div className="flex flex-wrap justify-center gap-20 mb-12 ">

                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        onClick={() => {
                            setActiveCategory(cat.id)
                            setExpandedItem(null)
                        }}
                        className="relative cursor-pointer group"
                    >
                        {/* Stack Effect */}
                        <div className="absolute top-2 left-2 w-full h-full 
              bg-[var(--color-baseColor)] rounded-xl opacity-50"></div>

                        <div className="absolute top-4 left-4 w-full h-full 
              bg-[var(--color-baseColor)] rounded-xl opacity-30"></div>

                        {/* Main Card */}
                        <div className="relative z-10 p-6 w-48 
              bg-[var(--color-baseColor)] rounded-xl 
              border border-white/10
              hover:scale-105 transition-all duration-300
              hover:shadow-[0_0_15px_#00C2FF]">

                            <h3 className="text-sm text-white text-center">
                                {cat.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* DETAILS SECTION */}
            {activeCategory && (
                <div className="max-w-6xl mx-auto px-5 
                    grid sm:grid-cols-2 gap-15 animate-fade-in">

                    {categories
                        .find(c => c.id === activeCategory)
                        ?.items.map((item, index) => (

                            <div key={index} className="p-5 rounded-xl 
                                bg-[var(--color-baseColor)] border border-white/10">

                                <h3 className="text-sm text-white mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-xs text-gray-400 mb-3">
                                    {item.desc}
                                </p>

                                {/* Learn More Button */}
                                <button
                                    onClick={() =>
                                        setExpandedItem(
                                            expandedItem === index ? null : index
                                        )
                                    }
                                    className="animated-border-btn text-xs"
                                >
                                    <span className="btn-inner-content">
                                        Learn More
                                    </span>
                                </button>

                                {/* Expanded Details */}
                                {expandedItem === index && (
                                    <p className="text-xs text-gray-300 mt-3">
                                        {item.details}
                                    </p>
                                )}
                            </div>
                        ))}
                </div>
            )}

        </section>
    )
}

export default Achievements