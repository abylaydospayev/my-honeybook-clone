import { BarChart, Briefcase, Users, Globe, LayoutGrid, type LucideIcon } from 'lucide-react';

// Define the shape for a link item in the dropdown
type LinkItem = {
  type: 'link';
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

// Define the shape for a heading item in the dropdown
type HeadingItem = {
  type: 'heading';
  title: string;
};

// A ChildNavItem can be either a LinkItem or a HeadingItem
export type ChildNavItem = LinkItem | HeadingItem;

// The main navigation item type
export type NavItem = {
  title: string;
  href?: string; // href is now optional for dropdown-only items
  description?: string;
  children?: ChildNavItem[];
};

// Apply the NavItem[] type to our constant
export const navItems: NavItem[] = [
  {
    title: "Services",
    href: "/services", // This ensures the main button is a clickable link
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
  },
  {
    title: "Our Team",
    href: "/#team",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  // {
  //   title: "Contact",
  //   href: "/contactus",
  // }
];