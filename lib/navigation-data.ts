import { BarChart, Briefcase, Users, Globe, Building, Award } from 'lucide-react'; // Added new icons

export const navItems = [
  {
    title: "Services",
    href: "#services", // Changed to a hash link for one-page navigation
    description: "Explore our core disciplines.",
    children: [
      {
        title: "Capacity Building Support",
        description: "Strengthening your organization from the inside out.",
        href: "#",
        icon: Users 
      },
      {
        title: "Assisting Small Businesses",
        description: "Tailored strategies for SME growth and scalability.",
        href: "#",
        icon: Briefcase
      },
      {
        title: "ROR Framework Implementation",
        description: "Maximizing your Return on Relationship with our proven framework.",
        href: "#",
        icon: BarChart
      },
      {
        title: "International Trade Invitations",
        description: "Connecting your business to global opportunities.",
        href: "#",
        icon: Globe
      }
    ]
  },
  {
    title: "About Us",
    href: "#about-us",
    description: "Learn more about our company.",
  },
  // --- NEW ITEM ADDED HERE ---
  {
    title: "Our Team",
    href: "#team", // This ID points to the team section on your page
    description: "Meet our experts.",
  },
  {
    title: "Careers",
    href: "#careers",
    description: "See our open positions.",
  },
];