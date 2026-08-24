import { CapabilityItem, CompanyStat, IndustrySector, LeadershipMember, JointVenture, PartnerLogo, ProcessStep, ProductItem, SkidItem, ToolExpertise } from "./types";

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

export const technicalDirector: LeadershipMember = {
  name: "Swapan Kumar Bhattacharya",
  role: "Technical Director",
  credentials: "C Eng, B.E. (Mech) — Jadavpur University, Kolkata",
  experience: "40+ Years in Steel, Power & Petrochemical Plants",
  qualifications: ["BME-JU", "TQM-Japan", "Chartered Mech. Engineer — IE", "FIE — IE"],
  address: "P-25, Senhati Colony, Behala, Kolkata - 700 034",
  phones: ["+91 98301 08760", "+91 90513 01832"],
  emails: ["swapan_calcutta@yahoo.co.in", "swapan56kol@gmail.com"],
  expertise: [
    "Mechanical fabrication and installation activities pan-India across steel, power, and petrochemical plants — piping, structures, tanks, and vessels",
    "Specialist in CNC/BNC machining and structural steel",
    "Expertise in Total Quality Management (TQM), with special training received from AOTS, Japan"
  ]
};

export const jointVentures: JointVenture[] = [
  {
    name: "ARUP ENGG. ENTERPRISES",
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
    name: "RAMAKRISHNA ENTERPRICE",
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
    name: "SOHAM INDUSTRIES",
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

/**
 * Approved and associated corporate partnerships, shown in the home-page marquee
 * and again in full on the Clients & Projects page.
 */
export const partnerLogos: PartnerLogo[] = [
  {
    name: "Oil and Natural Gas Corporation",
    shortName: "ONGC",
    sector: "Energy",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/ONGC_Logo.svg"
  },
  {
    name: "Hindustan Petroleum Corporation Limited",
    shortName: "HPCL",
    sector: "Refining",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hindustan_Petroleum_logo.svg"
  },
  {
    name: "Bharat Petroleum Corporation Limited",
    shortName: "BPCL",
    sector: "Petroleum",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Bharat_Petroleum_logo.svg"
  },
  {
    name: "L&T Electrical & Automation",
    shortName: "L&T E&A",
    sector: "Automation",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4Bq6gd0PD8gfoDfqhdAYiCVqYIKhuu_pnA&s",
    logoClassName: "h-8 w-32"
  },
  {
    name: "Jindal Steel & Power",
    shortName: "Jindal Steel",
    sector: "Steel",
    logoUrl: "https://www.jindalsteel.in/images/logo/jindal-steel-logo-black.svg",
    logoClassName: "h-9 w-36"
  },
  {
    name: "Steel Authority of India Limited",
    shortName: "SAIL",
    sector: "Steel",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1f/SAIL_Logo.svg"
  },
  {
    name: "Simplex Infrastructures Limited",
    shortName: "Simplex",
    sector: "Infrastructure",
    logoUrl: "https://www.simplexinfra.com/images/simplex-logo.png",
    logoClassName: "h-10 w-36"
  }
];

/** Sectors served, mapped to the product lines and skid packages actually supplied into them. */
export const industriesServed: IndustrySector[] = [
  {
    id: "steel-plants",
    name: "Integrated Steel Plants",
    iconName: "Factory",
    summary:
      "High-temperature structural work and heavy wear components for blast furnace, sand plant, and crushing circuits.",
    scope: [
      "Blast furnace structural frames, guide rings and sliding bases",
      "Pusher ram arms machined to close tolerance",
      "Ring granulator rings, drive shaft couplings and housings",
      "Sand plant chutes, mixing blades and vibrating screen frames"
    ]
  },
  {
    id: "power",
    name: "Thermal Power Generation",
    iconName: "Zap",
    summary:
      "Abrasion-resistant components for ash handling, coal handling, and bulk rail unloading systems.",
    scope: [
      "Wear-resistant sleeves and hard-faced couplings for fly-ash lines",
      "Conveyor flights, scraper assemblies and apron feeder components",
      "Crescent and tandem end frames for wagon tipplers",
      "Chhabra wagon tippler assemblies"
    ]
  },
  {
    id: "petrochemical",
    name: "Petrochemical, Oil & Gas",
    iconName: "Droplets",
    summary:
      "Process skid packages, pressure components, and plant piping built to vendor documentation standards.",
    scope: [
      "Gas processing, metering and regulating skids",
      "Vapour recovery (VRU), amine and chemical injection skids",
      "Vessel shells, manifolds, flanged covers and heat-exchanger components",
      "Tank, vessel and process piping installation on site"
    ]
  },
  {
    id: "renewables",
    name: "Renewable Energy",
    iconName: "Wind",
    summary:
      "Turbine components machined directly to OEM drawings and inspected before dispatch.",
    scope: [
      "Windmill hubs and rotational plates (Enercon specification)",
      "Anchor adapters and high-strength brackets",
      "Foundation bolt assemblies for turbine bases",
      "Material Test Certificates supplied with every consignment"
    ]
  },
  {
    id: "infrastructure",
    name: "Road & Railway Infrastructure",
    iconName: "TrainFront",
    summary:
      "Fabricated and machined structures for national highway and rail programmes.",
    scope: [
      "Rail tables, runner beams and bogie frames",
      "Concrete shuttering forms and portal girders",
      "Bridge spans and support structures",
      "Structural steel fabrication and site erection"
    ]
  },
  {
    id: "heavy-machinery",
    name: "Heavy Machinery & Earthmoving",
    iconName: "Truck",
    summary:
      "Large weldments and machined assemblies for earthmoving and water-control equipment.",
    scope: [
      "Excavator boom structures and dipper handles",
      "Sector gates for water control duty",
      "Mandrel wedges, plungers, couplings and seals",
      "Spline matching, surface finishing and grinding"
    ]
  }
];

/** How an enquiry moves from drawing to dispatch. */
export const processSteps: ProcessStep[] = [
  {
    id: "rfq",
    title: "RFQ & Drawing Review",
    description:
      "Send 2D drawings or 3D models with the required specification. We review manufacturability, tolerances, and material grade before quoting.",
    checkpoints: [
      "Manufacturing feasibility and tolerance review",
      "Material grade and finish confirmation",
      "Lead time and commercial offer"
    ],
    iconName: "FileSpreadsheet"
  },
  {
    id: "material",
    title: "Material Selection & Procurement",
    description:
      "Material is procured against the approved grade with test certificates retained for the job file, so every part can be traced back to its heat and cast.",
    checkpoints: [
      "EN-19, EN-24, 42CrMo4, bronze and AMPCO alloys",
      "Mill Test Certificates collected at receipt",
      "Heat and cast identification recorded"
    ],
    iconName: "Layers"
  },
  {
    id: "machining",
    title: "CNC / BNC Machining & Fabrication",
    description:
      "Turning, milling, boring, and face machining run on programmes tuned to the material, alongside structural fabrication in our allied units at Howrah.",
    checkpoints: [
      "CNC turning, milling and BNC machining",
      "Custom fabrication of precision components",
      "Structural steel fabrication"
    ],
    iconName: "Cpu"
  },
  {
    id: "finishing",
    title: "Spline Matching & Surface Finishing",
    description:
      "Internal and external splines are matched, then surfaces are finished and ground to the specified condition.",
    checkpoints: [
      "Internal and external spline matching",
      "Surface finishing and grinding",
      "Fit checks against mating components"
    ],
    iconName: "Shuffle"
  },
  {
    id: "inspection",
    title: "Inspection & Dimensional Verification",
    description:
      "Every part is verified for dimensional accuracy before it leaves the shop, including CMM measurement through our allied unit where the drawing calls for it.",
    checkpoints: [
      "Coordinate Measuring Machine (CMM) verification",
      "Dimensional accuracy checked against drawing",
      "Non-conformances resolved before dispatch"
    ],
    iconName: "ScanLine"
  },
  {
    id: "documentation",
    title: "Documentation & Traceability",
    description:
      "The documentation pack is assembled to the standard international audits expect — certificates, traceability records, and serial-wise catalogues.",
    checkpoints: [
      "Material Test Certificates (MTC)",
      "ISO, EN and ASTM compliance documentation",
      "Serial number–wise illustrated catalogues"
    ],
    iconName: "ClipboardCheck"
  },
  {
    id: "dispatch",
    title: "Export Packaging & Dispatch",
    description:
      "Consignments are protected for sea and air freight, crated to ISPM-15, and staged for container loading with the export paperwork in place.",
    checkpoints: [
      "Rust-preventive coating and moisture protection",
      "ISPM-15 treated seaworthy wooden crating",
      "Container staging and export documentation support"
    ],
    iconName: "Truck"
  },
  {
    id: "installation",
    title: "Site Installation & Erection",
    description:
      "Where installation is in scope, experienced crews handle erection and commissioning support across steel, power, and petrochemical plants.",
    checkpoints: [
      "Structural steel erection",
      "Tank, vessel and piping installation",
      "Pan-India mechanical installation experience"
    ],
    iconName: "Wrench"
  }
];
