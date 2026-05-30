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
  description?: string;
}

export interface ToolExpertise {
  category: string;
  items: string[];
}
