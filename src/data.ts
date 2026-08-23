import { CapabilityItem, CompanyStat, LeadershipMember, JointVenture, ProductItem, SkidItem, ToolExpertise } from "./types";

export const companyOverview = {
  name: "S.B. Engineering Services",
  shortName: "SB Engg",
  tagline: "Precision Machining & Industrial Solutions",
  about: "S.B. Engineering Services is a precision-driven engineering firm specializing in CNC machining, BNC fabrication, and industrial component manufacturing for the steel, power, petrochemical, and renewable energy sectors. With over two decades of expertise, we deliver high-accuracy, cost-effective, and timely solutions for mission-critical applications worldwide.",
  standards: "Our facilities are equipped to meet international quality standards and export requirements, ensuring compliance with ISO, EN, and ASTM specifications. We provide vendor-grade documentation, traceability, and serial number–wise illustrated catalogues for global clients.",
  mission: "To deliver precision-engineered components and assemblies that meet global standards in quality, reliability, and performance, becoming a trusted partner for international clients in CNC and BNC machining.",
  vision: "To be recognized as a leading machining and fabrication house from India, known for innovation, integrity, and excellence in execution, serving clients across Asia, Europe, and the Americas.",
  coreValues: [
    { title: "Precision without compromise", label: "Accuracy in every micron", value: "01" },
    { title: "Client-first engineering", label: "Built to your drawing, not ours", value: "02" },
    { title: "Smart machining, efficient delivery", label: "Optimized cost and lead time", value: "03" },
    { title: "Performance through quality", label: "Rigorously tested to specification", value: "04" },
    { title: "Transparency and traceability", label: "Complete audit trails and test logs", value: "05" },
    { title: "Commitment to international compliance", label: "ISO, EN and ASTM aligned", value: "06" }
  ]
};

export const companyStats: CompanyStat[] = [
  { value: "20+", label: "Years of expertise" },
  { value: "12", label: "Export-ready product lines" },
  { value: "3", label: "Allied manufacturing units" },
  { value: "100%", label: "MTC-backed traceability" }
];

export const capabilities: CapabilityItem[] = [
  {
    id: "cnc-bnc-machining",
    title: "CNC Turning, Milling & BNC Machining",
    description: "CNC lathes and milling systems for turning, boring, and face machining of complex mechanical components held to tight dimensional tolerances.",
    iconName: "Cpu"
  },
  {
    id: "custom-fabrication",
    title: "Custom Fabrication of Precision Components",
    description: "Purpose-built mandrel wedges, plungers, couplings, and seals fabricated to customer specification for heavy plant and machinery.",
    iconName: "Settings"
  },
  {
    id: "material-specific",
    title: "Material-Specific Machining",
    description: "Machining programmes tuned to the material — EN-19, EN-24, 42CrMo4, bronze, and AMPCO alloys — with the right tooling, speeds, and feeds for each grade.",
    iconName: "Layers"
  },
  {
    id: "drawing-based-manufacturing",
    title: "Drawing-Based Component Manufacturing",
    description: "Manufacturing directly from your 2D drawings and 3D models, delivered with Material Test Certificates (MTC) and compliance certificates.",
    iconName: "FileSpreadsheet"
  },
  {
    id: "spline-matching",
    title: "Spline Matching & Surface Finishing",
    description: "Internal and external spline matching, surface finishing, and grinding operations verified for dimensional accuracy before dispatch.",
    iconName: "Shuffle"
  },
  {
    id: "structural-steel",
    title: "Structural Steel Fabrication & Erection",
    description: "Heavy structural steel columns, framing, platforms, and bracing — fabricated in-house and erected on site by experienced crews.",
    iconName: "Construction"
  },
  {
    id: "installations",
    title: "Tank, Vessel & Piping Installations",
    description: "Installation of storage tanks, industrial vessels, and process and utility piping systems across steel, power, and petrochemical plants.",
    iconName: "Wrench"
  },
  {
    id: "export-logistics",
    title: "Export-Ready Packaging & Logistics Support",
    description: "Rust-preventive wrapping, ISPM-15 seaworthy crating, container staging, and export documentation support for global shipments.",
    iconName: "Truck"
  }
];

export const leadership: LeadershipMember[] = [
  {
    name: "Mr. Swapan Kumar Bhattacharya",
    role: "Technical Director",
    credentials: "C Eng, B.E. (Mech) — Jadavpur University, Kolkata",
    experience: "40+ Years in Steel, Power & Petrochemical Plants",
    expertise: [
      "Mechanical fabrication and installation activities pan-India across steel, power, and petrochemical plants — piping, structures, tanks, and vessels",
      "Specialist in CNC/BNC machining and structural steel",
      "Expertise in Total Quality Management (TQM), with special training received from AOTS, Japan"
    ]
  },
  {
    name: "Mr. Sudhansu Sekhar Pattanaik",
    role: "Operations Director",
    credentials: "CEO — Palash Utkal Consultancy LLP | Designated Partner — Kalinga Warriors LLP",
    experience: "25+ Years in Steel, Power & Industrial Operations",
    expertise: [
      "Industrial operations leadership across steel and power sector projects",
      "Business administration, project coordination, and partner facility management"
    ]
  }
];

export const jointVentures: JointVenture[] = [
  {
    name: "M/s. ARUP ENGG. ENTERPRISES",
    addressLabel: "Address",
    address: "Balitikuri Manickpirtala, Jilerpar, Howrah - 711113",
    capabilities: [
      "CNC Turning Lathe",
      "Custom fabrication (mandrel wedges, plungers, couplings, seals)",
      "Structural steel fabrication & erection",
      "Tank, vessel, and piping installations"
    ]
  },
  {
    name: "M/s. RAMAKRISHNA ENTERPRICE",
    addressLabel: "Office Address",
    address: "Kantalia Industrial Complex, Howrah",
    capabilities: [
      "CNC Turning, Milling, BNC Machining",
      "Coordinate Measuring Machine (CMM)",
      "Custom fabrication (mandrel wedges, plungers, couplings, seals)",
      "Structural steel fabrication & erection",
      "Tank, vessel, and piping installations"
    ]
  },
  {
    name: "M/s. SOHAM INDUSTRIES",
    addressLabel: "Workshop",
    address: "Kalachand Nandy Lane, Howrah - 711101",
    capabilities: [
      "CNC Turning, Milling, BNC Machining",
      "Custom fabrication (mandrel wedges, plungers, couplings, seals)",
      "Structural steel fabrication & erection",
      "Tank, vessel, and piping installations",
      "Supply of items such as pipes of any type, structural materials, and allied supplies"
    ]
  }
];

export const productRange: ProductItem[] = [
  {
    name: "Foundation Bolts",
    category: "Industrial Fasteners",
    description: "Anchor bolt assemblies, shear pins, J and L bolts, and custom-threaded foundation connectors engineered for heavy mechanical loading.",
    imageUrl: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Couplings & Sleeves (Ash Handling Line)",
    category: "Material Handling",
    description: "Wear-resistant sleeves, hard-faced couplings, and pipe joints for abrasive fly-ash conveying lines in thermal power plants.",
    imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Vessels & Pressure Components",
    category: "Pressure Vessels",
    description: "Vessel shells, manifolds, flanged covers, and heat-exchanger components manufactured with full MTC traceability.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "End Frames — Crescent, Tandem, Chhabra & Wagon Tipplers",
    category: "Material Handling",
    description: "Crescent and tandem end frames, Chhabra wagon tippler assemblies, and heavy structural components for bulk rail unloading systems.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Conveyor Flights & Apron Feeders",
    category: "Material Handling",
    description: "Conveyor flights, chain-linked steel pans, scraper assemblies, and apron feeder components for demanding bulk material duty.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Blast Furnace Structures & Pusher Rams",
    category: "Steel Plants",
    description: "High-temperature furnace structural frames, guide rings, pusher ram arms, and sliding bases for integrated steel plants.",
    imageUrl: "https://images.unsplash.com/photo-1563784462386-044fd95e9852?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Rail Tables, Beams & Bogie Frames",
    category: "Infrastructure",
    description: "Fabricated rail tables, runner beams, and bogie frames machined to close tolerances for railway and infrastructure projects.",
    imageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Windmill Components (Enercon)",
    category: "Renewable Energy",
    description: "Hubs, rotational plates, anchor adapters, and high-strength brackets machined to Enercon turbine drawings and specifications.",
    imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Sand Plant Components",
    category: "Steel Plants",
    description: "Abrasion-resistant chutes, mixing blades, vibrating screen frames, and washer components for sand and foundry plants.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Ring Granulators",
    category: "Heavy Machinery",
    description: "Coal and mineral crushing components including alloy steel rings, drive shaft couplings, and heavy-duty housings.",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Shutters & Girders — Road & Railway Projects",
    category: "Infrastructure",
    description: "Concrete shuttering forms, portal girders, bridge spans, and support structures for national highway and rail programmes.",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Boom Structures, Dipper Handles & Sector Gates",
    category: "Heavy Machinery",
    description: "Excavator boom structures, dipper handles, and sector gates fabricated and machined for heavy earthmoving and water control duty.",
    imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=600"
  }
];

export const skidPortfolio: SkidItem[] = [
  { name: "Gas Processing & Metering Skids" },
  { name: "Vapour Recovery Skids (VRU)" },
  { name: "Fuel Polishing & Decanting Skids" },
  { name: "Amine Skids" },
  { name: "Metering & Regulating Skids" },
  { name: "Pump & Compressor Skids" },
  { name: "Chemical Injection Skids" },
  { name: "Fuel Transfer Skids" },
  { name: "Heat Exchanger Skids" },
  { name: "Any Custom Build Skids" }
];

export const technicalExpertise: ToolExpertise[] = [
  {
    category: "Process Engineering",
    items: ["Aspen HYSYS process simulation", "Mass & energy balance calculations"]
  },
  {
    category: "Automation Systems",
    items: ["PLC control architecture", "SCADA supervisory systems", "HMI integration"]
  },
  {
    category: "Design & Drafting Tools",
    items: ["Revit 3D modelling", "AutoCAD Electrical schematics"]
  }
];

export const exportReadiness = [
  { title: "ISO-Compliant Manufacturing Processes", description: "Machining and fabrication procedures aligned to ISO quality-management practice, ensuring repeatable tolerances batch after batch." },
  { title: "MTC & Compliance Documentation", description: "Every consignment ships with Material Test Certificates (MTC) and the compliance documentation required by ISO, EN, and ASTM specifications." },
  { title: "Export-Grade Packaging & Logistics Support", description: "ISPM-15 treated wooden crates, rust-preventive coatings, moisture protection, and coordinated container staging for sea and air freight." },
  { title: "Traceability & Vendor Documentation", description: "Serial number–wise illustrated catalogues, heat and cast identification, and vendor documentation packs prepared for international audits." },
  { title: "Proven OEM & EPC Supply Experience", description: "Established experience supplying components and assemblies to OEMs and EPC contractors, with the paperwork and coordination that entails." }
];
