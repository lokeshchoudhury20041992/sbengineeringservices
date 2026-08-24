/**
 * Site map for the standalone pages that sit alongside the single-scroll home page.
 * Both the navbar dropdown and the footer sitemap read from this list so the two
 * never drift apart.
 */
export interface SitePage {
  label: string;
  /** Compact label used where header space is tight. */
  shortLabel?: string;
  href: string;
  summary: string;
  iconName: string;
}

export const companyPages: SitePage[] = [
  {
    label: "Company Profile",
    href: "/profile",
    summary: "Registration details, leadership, certificates and documents",
    iconName: "BadgeCheck"
  },
  {
    label: "Industries Served",
    shortLabel: "Industries",
    href: "/industries",
    summary: "Steel, power, petrochemical, renewables and infrastructure",
    iconName: "Factory"
  },
  {
    label: "Quality & Certifications",
    href: "/quality",
    summary: "ISO 9001:2015 certification, MTC traceability and export compliance",
    iconName: "ShieldCheck"
  },
  {
    label: "How We Work",
    href: "/process",
    summary: "From RFQ and drawing review through inspection and dispatch",
    iconName: "Workflow"
  },
  {
    label: "Clients & Projects",
    shortLabel: "Clients",
    href: "/clients",
    summary: "Organisations we supply and representative supply scopes",
    iconName: "Building2"
  }
];

/** Sections that live on the home page, linked from the footer sitemap. */
export const homeSections: SitePage[] = [
  { label: "Overview", href: "/#overview", summary: "Company overview", iconName: "Info" },
  { label: "Capabilities", href: "/#capabilities", summary: "Machining and fabrication services", iconName: "Cpu" },
  { label: "Products", href: "/#products", summary: "Export-ready product range", iconName: "Package" },
  { label: "SKID Portfolio", href: "/#skid-portfolio", summary: "Process skid packages", iconName: "Boxes" },
  { label: "Joint Ventures", href: "/#joint-ventures", summary: "Allied manufacturing units", iconName: "Handshake" },
  { label: "Contact", href: "/#contact", summary: "Send an RFQ", iconName: "Mail" }
];
