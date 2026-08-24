export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // references lucide icon
}

export interface LeadershipMember {
  name: string;
  role?: string;
  credentials: string;
  experience: string;
  expertise: string[];
  additional?: string;
}

export interface JointVenture {
  name: string;
  addressLabel: string;
  address: string;
  capabilities: string[];
}

export interface ProductItem {
  name: string;
  category: string;
  description: string;
  imageUrl?: string;
}

export interface SkidItem {
  name: string;
}

export interface ToolExpertise {
  category: string;
  items: string[];
}

export interface CompanyStat {
  value: string;
  label: string;
}

export interface PartnerLogo {
  name: string;
  shortName: string;
  sector: string;
  logoUrl: string;
  logoClassName?: string;
  darkCard?: boolean;
}

export interface IndustrySector {
  id: string;
  name: string;
  iconName: string;
  summary: string;
  scope: string[];
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  checkpoints: string[];
  iconName: string;
}
