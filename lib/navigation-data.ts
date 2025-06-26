import { BarChart, Briefcase, Users, Globe } from 'lucide-react'; // Updated icons

export const navItems = [
  {
    title: "Services",
    href: "/services",
    description: "Explore our core disciplines.",
    // --- THIS IS THE UPDATED SECTION ---
    children: [
      {
        title: "Capacity Building Support",
        description: "Strengthening your organization from the inside out.",
        href: "#",
        icon: Users // Icon for team/people
      },
      {
        title: "Assisting Small Businesses",
        description: "Tailored strategies for SME growth and scalability.",
        href: "#",
        icon: Briefcase // Icon for business
      },
      {
        title: "ROR Framework Implementation",
        description: "Maximizing your Return on Relationship with our proven framework.",
        href: "#",
        icon: BarChart // Icon for frameworks/analytics
      },
      {
        title: "International Trade Invitations",
        description: "Connecting your business to global opportunities.",
        href: "#",
        icon: Globe // Icon for international/global
      }
    ]
  },
  {
    title: "About Us",
    href: "#",
    description: "Learn more about our company.",
  },
  {
    title: "Careers",
    href: "#",
    description: "See our open positions.",
  },
];