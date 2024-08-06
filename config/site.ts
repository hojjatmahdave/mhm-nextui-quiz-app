export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "QuizWiz",
  description: "website to test your knowledge.",
  navItems: [
    {
      label: "Start quiz",
      href: "/",
    },

    {
      label: "About project",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Start Quiz",
      href: "/",
    },
    {
      label: "About Project",
      href: "/about",
    },
    {
      label: "Follow me on X",
      href: "https://x.com/MHM___2024",
    },
    {
      label: "Follow me on Instagram",
      href: "https://www.instagram.com/mhm___2024/",
    },
  ],
  links: {
    github: "https://github.com/hojjatmahdave",
    twitter: "https://x.com/MHM___2024",
    instagram: "https://www.instagram.com/mhm___2024/",
    discord: "https://discordapp.com/users/mohammadhojjat_84800",
    sponsor: "https://www.patreon.com/MohammadHojjat",
  },
};
