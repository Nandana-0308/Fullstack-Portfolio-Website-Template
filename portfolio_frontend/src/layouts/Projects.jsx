import React, { useState, useEffect } from "react";
// import demoVideo from "../assets/projectImageOrVideo/portfolioDemo.mp4";
import demoVideo from "../assets/projectImageOrVideo/demo1.mp4";
import demoImage from "../assets/projectImageOrVideo/webimagedemo.jpg";

const projects = [
  {
    id: 1,
    title: "AutoDevOps",
    image: demoImage,
    video: demoVideo,
    description:
      "Automates CI/CD pipelines using Docker and GitHub Actions.",
    tech: ["React", "Node.js", "Docker"],
    github: "https://github.com/yourrepo",
    live: "https://yourlive.com",
  },
];

const Projects = ({ theme }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // ESC key handling
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        if (isFullScreen) {
          setIsFullScreen(false);
        } else {
          setActiveProject(null);
        }
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isFullScreen]);

  return (
    <section className="py-5 px-5">
      {/* Title */}
      <h2 className="text-center text-xl md:text-2xl text-[var(--color-color6)] mb-10">
        <span className="text-3xl md:text-5xl">P</span>rojects
      </h2>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 md:px-20">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="glass cursor-pointer rounded-2xl border border-white/10 overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_#00C2FF] transition-all duration-300"
          >
            {/* 🔹 Media Preview */}
            <div className="w-full h-40 overflow-hidden">
              {project.video ? (
                <video
                  src={project.video}
                  muted
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* 🔹 Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                {project.title}
              </h3>

              <p className="text-sm text-[var(--color-color6)] mt-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeProject && (
        <div
          className={`fixed inset-0 flex items-center justify-center ${
            theme === "light" ? "bg-white/10" : "bg-black/10"
          } backdrop-blur-md z-50`}
          onClick={() => setActiveProject(null)}
        >
          {/* Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-5xl rounded-2xl overflow-hidden flex flex-col lg:flex-row animate-modal cursor-pointer active:scale-[0.98] transition-transform glass
            ${
              theme === "light"
                ? " border border-black/10 shadow-xl"
                : "border border-white/10 shadow-[0_0_40px_rgba(0,194,255,0.25)]"
            }`}
          >
            {/* 🔹 Left - Image / Video */}
            <div
              className="lg:w-1/2 w-full h-[250px] sm:h-[320px] lg:h-full overflow-hidden group"
              onClick={(e) => {
                e.stopPropagation();
                setIsFullScreen(true);
              }}
            >
              {activeProject.video ? (
                <video
                  src={activeProject.video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
            </div>

            {/* 🔹 Right - Content */}
            <div className="lg:w-1/2 w-full p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
                  {activeProject.title}
                </h3>

                <p className="text-sm sm:text-base text-[var(--color-color6)] mt-4 leading-relaxed">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {activeProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs sm:text-sm px-3 py-1 rounded-full bg-[var(--color-color5)] text-[var(--color-primary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-6 flex-wrap">
                {activeProject.github && (
                  <a href={activeProject.github} target="_blank" rel="noreferrer">
                    <div className="animated-border-btn">
                      <span className="btn-inner-content">GitHub</span>
                    </div>
                  </a>
                )}

                {activeProject.live && (
                  <a href={activeProject.live} target="_blank" rel="noreferrer">
                    <div className="animated-border-btn">
                      <span className="btn-inner-content">Live Demo</span>
                    </div>
                  </a>
                )}

                <button
                  onClick={() => setActiveProject(null)}
                  className="animated-border-btn"
                >
                  <span className="btn-inner-content">Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🔥 Fullscreen Media */}
      {isFullScreen && activeProject && (
        <div
          className="fixed inset-0 bg-black z-[100] flex items-center justify-center"
          onClick={() => setIsFullScreen(false)}
        >
          {activeProject.video ? (
            <video
              src={activeProject.video}
              autoPlay
              controls
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={activeProject.image}
              alt=""
              className="w-full h-full object-contain"
            />
          )}
        </div>
      )}
    </section>
  );
};

export default Projects;