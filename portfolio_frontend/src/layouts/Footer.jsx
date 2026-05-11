import React from 'react'
import { APP_DATA } from '../constants/appData'
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/" },
  { icon: FaLinkedin, href: "https://linkedin.com/" },
  { icon: FaTelegram, href: "#" }
];

const Footer = () => {
  return (
    <footer id='footer' className="w-full 
      bg-[var(--color-baseColor)] 
      text-[var(--color-color6)] 
      px-6 py-6 
      transition-all duration-300
      border-t border-[var(--color-color5)]">

      <div className="flex flex-col items-center text-center md:flex-row md:items-center ">

        {/* Left Side (Logo + Name) */}
        <div className="flex items-center justify-center gap-4">
          <img src={APP_DATA.logo} alt="logo" className="w-8 h-8" />
          <span className="text-lg font-semibold">{APP_DATA.owner}</span>
        </div>

        {/* Right Side (Social Icons) */}
        <div className="flex justify-center gap-5 mt-4 md:mt-0 md:ml-auto">

          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
            p-2 rounded-full
            border border-[var(--color-color5)]/40
            text-[var(--color-color6)]
            hover:text-[var(--color-primary)]
            hover:border-[var(--color-primary)]
            hover:shadow-[0_0_10px_var(--color-primary)]
            hover:scale-110
            transition-all duration-300
          "
              >
                <Icon size={18} />
              </a>
            );
          })}

        </div>
      </div>

      {/* Bottom Line (optional) */}
      <div className="text-center text-xs mt-4 text-[var(--color-color3)]">
        © {new Date().getFullYear()} {APP_DATA.owner}. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer