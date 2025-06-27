import { BarChart, Briefcase, Users, Globe, LayoutGrid, type LucideIcon } from 'lucide-react';

// We'll add a 'type' to our child items to differentiate links from headings
export type ChildNavItem = {
  title: string;
  type: 'link' | 'heading';
  description?: string;
  href?: string;
  icon?: LucideIcon;
};

export type NavItem = {
  title: string;
  href: string;
  description: string;
  children?: ChildNavItem[];
};

export const navItems: NavItem[] = [
  {
    title: "Services",
    href: "/services",
    description: "Explore our core disciplines.",
    children: [
      // Column 1
      {
        type: 'heading',
        title: 'Our Offerings',
      },
      {
        type: 'link',
        title: "All Services",
        description: "View all of our core service offerings.",
        href: "/services",
        icon: LayoutGrid
      },
      {
        type: 'link',
        title: "Capacity Building Support",
        description: "Strengthening your organization from the inside out.",
        href: "/services#capacity-building",
        icon: Users 
      },
      {
        type: 'link',
        title: "Assisting Small Businesses",
        description: "Tailored strategies for SME growth and scalability.",
        href: "/services#small-business",
        icon: Briefcase
      },
      // Column 2
      {
        type: 'heading',
        title: 'Frameworks & Initiatives',
      },
      {
        type: 'link',
        title: "ROR Framework Implementation",
        description: "Maximizing your Return on Relationship.",
        href: "/services#ror-framework",
        icon: BarChart
      },
      {
        type: 'link',
        title: "International Trade",
        description: "Connecting your business to global opportunities.",
        href: "/services#international-trade",
        icon: Globe
      },
    ]
  },
  {
    title: "About Us",
    href: "/about",
    description: "Learn more about our company.",
  },
  {
    title: "Our Team",
    href: "/#team",
    description: "Meet our experts.",
  },
  {
    title: "Careers",
    href: "/careers",
    description: "See our open positions.",
  },
];