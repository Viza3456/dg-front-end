const navItems = [
  { name: "Products", href: "/" },
  { name: "Solutions", href: "/" },
  { name: "Pricing", href: "/" },
  {
    name: "Resources",
    href: "/",
    icon: "/home/chevron-down.svg", // Add an icon if needed
  },
];

const footerSections = [
  {
    title: 'Product',
    items: ['Pricing', 'Overview', 'Browse', 'Accessibility']
  },
  {
    title: 'Solutions',
    items: ['Brainstorming', 'Ideation', 'Wireframing', 'Research']
  },
  {
    title: 'Resources',
    items: ['Help Center', 'Blog', 'Tutorials', 'FAQs']
  },
  {
    title: 'Support',
    items: ['Contact Us', 'Developers', 'Documentation', 'Integrations']
  },
  {
    title: 'Company',
    items: ['About', 'Press', 'Events', 'Request Demo']
  }
];

const footerLinks = [
  { name: 'Terms', href: '/' },
  { name: 'Privacy', href: '/' },
  { name: 'Contact', href: '/' },
];

const cardData = [
  {
    image: '/images/home/mobile-top.png',
    name: 'Hellen Jummy',
    title: 'Financial Counselor',
    description: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna  congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.'
  },
  {
    image: '/images/home/mobile-top.png', // You can replace with different images
    name: 'John Doe',
    title: 'Software Engineer',
    description: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna  congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.'
  },
  {
    image: '/images/home/mobile-top.png', // You can replace with different images
    name: 'Alice Smith',
    title: 'Data Scientist',
    description: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna  congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.'
  },
  {
    image: '/images/home/mobile-top.png', // You can replace with different images
    name: 'Alice Smith',
    title: 'Data Scientist',
    description: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna  congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.'
  },
  {
    image: '/images/home/mobile-top.png', // You can replace with different images
    name: 'Alice Smith',
    title: 'Data Scientist',
    description: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna  congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.'
  },
  {
    image: '/images/home/mobile-top.png', // You can replace with different images
    name: 'Alice Smith',
    title: 'Data Scientist',
    description: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna  congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.'
  },
  {
    image: '/images/home/mobile-top.png', // You can replace with different images
    name: 'Alice Smith',
    title: 'Data Scientist',
    description: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna  congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.'
  }
];

const cardProduct = [
  {
    id: 1,
    category: "Featured",
    categoryColor: "bg-[#E0F2FE] text-[#0369A1]", // Updated dynamic background and text color
    title: "The map of mathematics",
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    id: 2,
    category: "Entertainment",
    categoryColor: "bg-[#FDE68A] text-[#92400E]",
    title: "Exploring the universe",
    description: "A deep dive into the mysteries of space and time.",
  },
  {
    id: 3,
    category: "Education",
    categoryColor: "bg-[#C7D2FE] text-[#3730A3]",
    title: "History of computing",
    description: "Tracing the evolution of computers and their impact on society.",
  },
];

const stats = [
  { number: 195, label: "user countries", image: '/home/heart.svg' },
  { number: '1M', label: "active users", image: '/home/daimond.svg' },
  { number: '17M', label: "total visits", image: '/home/grad.svg' },
];

const desktopIcons = [
  "/images/home/App-icon.png",
  "/images/home/App-icon-1.png",
  "/images/home/App-icon-2.png",
  "/images/home/App-icon-3.png",
  "/images/home/App-icon-4.png",
  "/images/home/App-icon-5.png",
  "/images/home/App-icon-6.png",
  "/images/home/App-icon-9.png",
  "/images/home/Group-8.png"
];

const bannerIcons = [
  "/home/banner-4.svg",
  "/home/banner-1.svg",
  "/home/banner-5.svg",
  "/home/banner-3.svg",
  "/home/banner-2.svg",
];

export {
  bannerIcons,
  desktopIcons,
  cardProduct,
  stats,
  cardData,
  navItems,
  footerSections,
  footerLinks
}