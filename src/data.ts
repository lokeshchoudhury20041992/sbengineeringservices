import { CapabilityItem, LeadershipMember, JointVenture, ProductItem, SkidItem, ToolExpertise } from "./types";

export const companyOverview = {
  name: "S.B. Engineering Services",
  shortName: "SB Engg",
  tagline: "Precision Machining & Industrial Solutions",
  about: "S.B. Engineering Services is a precision-driven engineering firm specializing in CNC machining, BNC fabrication, and industrial component manufacturing for steel, power, petrochemical, and renewable energy sectors. With over two decades of expertise, we deliver high-accuracy, cost-effective, and timely solutions for mission-critical applications worldwide.",
  standards: "Our facilities are equipped to meet international quality standards and export requirements, ensuring compliance with ISO, EN, and ASTM specifications. We provide vendor-grade documentation, traceability, and serial number–wise illustrated catalogues for global clients.",
  mission: "To deliver precision-engineered components and assemblies that meet global standards in quality, reliability, and performance, becoming a trusted partner for international clients in CNC and BNC machining.",
  vision: "To be recognized as a leading machining and fabrication house from India, known for innovation, integrity, and excellence in execution, serving clients across Asia, Europe, and the Americas.",
  coreValues: [
    { title: "Precision without compromise", label: "Accuracy in every micron", value: "01" },
    { title: "Client-first engineering", label: "Custom design optimization", value: "02" },
    { title: "Smart machining, efficient delivery", label: "Optimized operational excellence", value: "03" },
    { title: "Performance through quality", label: "Rigorously tested to specification", value: "04" },
    { title: "Transparency and traceability", label: "Complete audit trails and testing logs", value: "05" },
    { title: "International compliance commitment", label: "Meeting global standards", value: "06" }
  ]
};

export const capabilities: CapabilityItem[] = [
  {
    id: "cnc-bnc-machining",
    title: "CNC Turning, Milling, & BNC Machining",
    description: "Highly automated CNC lathes and milling systems. Professional-grade turning, boring, and face machining for complex mechanical components with extreme tolerances.",
    iconName: "Cpu"
  },
  {
    id: "custom-fabrication",
    title: "Custom Mechanical Components",
    description: "Expert custom fabrication of specialized mandrel wedges, core plungers, industrial couplings, rings, and pressure seals tailored for heavy machineries.",
    iconName: "Settings"
  },
  {
    id: "material-specific",
    title: "Material-Specific Crafting",
    description: "Specialized machining for high-tensile and specialized alloys including EN-19, EN-24, 42CrMo4, Industrial Bronze, and high-performance AMPCO alloys.",
    iconName: "Layers"
  },
  {
    id: "drawing-based-manufacturing",
    title: "Drawing-Based Low Tolerance Mfg.",
    description: "Transforming 2D blueprints and 3D CAD files into exact real-world assemblies, fully compliant with MTC (Material Test Certificate) & compliance certifications.",
    iconName: "FileSpreadsheet"
  },
  {
    id: "spline-matching",
    title: "Spline Matching & Surface Finishing",
    description: "Internal and external high-precision spline matched gearways, comprehensive surface milling, heat-treating profiles, and grinding accuracy.",
    iconName: "Shuffle"
  },
  {
    id: "structural-steel",
    title: "Structural Steel Fabrication",
    description: "Heavy structural steel columns, framing, platforms, bracing, and certified structural erection services executed by skilled site specialists.",
    iconName: "Construction"
  },
  {
    id: "installations",
    title: "Tank, Vessel, and Piping Installations",
    description: "Precision installation of high-pressure utility pipes, industrial storage vessels, custom tanks, raw material silos, and pipeline systems.",
    iconName: "Wrench"
  },
  {
    id: "export-logistics",
    title: "Export-Ready Packing & Logistics",
    description: "Anticorrosive barrier wrapping, heavy-duty wooden seaworthy crating, strict moisture lock, container staging, and custom paperwork support for global transit.",
    iconName: "Truck"
  }
];

export const leadership: LeadershipMember[] = [
  {
    name: "Mr. Swapan Kumar Bhattacharya",
    role: "Technical Director",
    credentials: "C Eng, B.E. (Mech) — Jadavpur University, Kolkata",
    experience: "40+ Years of Industrial Leadership",
    expertise: [
      "Heavy mechanical fabrication, piping, structural engineering, tanks & pressure vessels across India",
      "Specialist in CNC/BNC machining and custom structural layouts",
      "Expert in Total Quality Management (TQM) with dedicated specialized training from AOTS, Japan"
    ]
  },
  {
    name: "Mr. Sudhansu Sekhar Pattanaik",
    role: "Operations Director",
    credentials: "CEO — Palash Utkal Consultancy LLP | Designated Partner — Kalinga Warriors LLP",
    experience: "25+ Years of Steel, Power, & Infrastructure Operations",
    expertise: [
      "Industrial business administration, EPC project management, and plant facilities coordination",
      "Forging collaborative joint ventures and establishing strategic export relationships"
    ]
  }
];

export const jointVentures: JointVenture[] = [
  {
    name: "M/s. ARUP ENGG. ENTERPRISES",
    address: "BALITIKURI MANICKPIRTALA, JILERPAR, HOWRAH-711113",
    capabilities: [
      "CNC Turning Lathe Operations",
      "Custom fabrication (mandrel wedges, plungers, couplings, seals)",
      "Structural steel fabrication & erection",
      "Tank, vessel, and piping installations"
    ]
  },
  {
    name: "M/s. RAMAKRISHNA ENTERPRICE",
    address: "Kantalia Industrial Complex, Howrah",
    capabilities: [
      "CNC Turning, Milling, & Advanced BNC Machining",
      "Coordinate Measuring Machine (CMM) dimensional verification",
      "Custom fabrication (mandrel wedges, plungers, couplings, seals)",
      "Structural steel fabrication & erection",
      "Tank, vessel, and piping installations"
    ]
  },
  {
    name: "M/s. SOHAM INDUSTRIES",
    address: "Kalachand Nandy Lane, Howrah-711101",
    capabilities: [
      "CNC Turning, Milling, & BNC Machining",
      "Custom fabrication (mandrel wedges, plungers, couplings, seals)",
      "Structural steel fabrication, assembly & erection",
      "Tank, vessel, and piping installations",
      "Vast material custom supply (specialized steel pipes, structural sections, brackets, and accessories)"
    ]
  }
];

export const productRange: ProductItem[] = [
  {
    name: "Foundation Bolts",
    category: "Industrial Fasteners",
    description: "Anchor bolt arrangements, heavy-duty shear pins, standard J & L bolts, and custom-threaded foundation connectors engineered to withstand massive mechanical loading.",
    imageUrl: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Couplings & Sleeves (Ash Handling)",
    category: "Material Handling",
    description: "High-wear resistant structural sleeves, hard-faced replacement couplings, and critical pipe joins optimized for abrasive fly-ash conveying systems in power plants.",
    imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Vessels & Pressure Components",
    category: "Pressure Vessels",
    description: "Unfired pressure vessel parts, heavy shells, custom manifold pipes, flanged covers, and heat-exchanger shells meticulously certified through MTC traceability standards.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "End Frames & Tippler Structures",
    category: "Heavy Logistics",
    description: "Crescent modules, tandem frames, Chhabra wagon tippler components, and heavy-duty structural gantry columns designed for automated heavy bulk rail offloading.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Conveyor Flights & Apron Feeders",
    category: "Bulk Material Handling",
    description: "Tough-alloy transport flights, chain-linked steel plates, robust scraper structures, and roller feeders build for highly demanding raw mineral mining operations.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Blast Furnace Structures & Pusher Rams",
    category: "Steel Plants",
    description: "High-temperature resistant furnace structural frames, guide rings, hydraulic pusher ram arms, and heavy sliding bases for steel manufacturing complexes.",
    imageUrl: "https://images.unsplash.com/photo-1563784462386-044fd95e9852?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Rail Tables, Beams, and Bogie Frames",
    category: "Railway & Infrastructure",
    description: "Fully fabricated structural railway bridge sections, steel runner beams, bogie transport platforms, and guide tables machined with ultra-accurate tolerances.",
    imageUrl: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Windmill Technical Components",
    category: "Renewable Energy",
    description: "Precision hubs, rotational plates, anchor adapters, and high-strength custom mechanical brackets compliant with certified Enercon turbine structures.",
    imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Sand Plant Components",
    category: "Industrial Minerals",
    description: "Highly abrasive-resistant steel chutes, mixing blades, high frequency vibrating screen frame rails, and specialized washer components.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Ring Granulators",
    category: "Crushing Operations",
    description: "Coal pulverizing and mineral crushing components, including hard-alloy steel rings, drive shaft couplings, and robust exterior shock-absorbent housings.",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Shutters & Girders for Infrastructure",
    category: "Road & Railway Projects",
    description: "Pre-stressed concrete steel shuttering forms, heavy portal girders, bridge spans, and support structure systems engineered for national highway and rail grids.",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Boom Structures & Sector Gates",
    category: "Heavy Duty Machinery",
    description: "High-leverage structural excavator boom sleeves, heavy-duty dipper handles, and custom hydraulics sector control gates for industrial water reservoirs.",
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
    items: ["Aspen HYSYS Process Simulation", "Vapor-Liquid Phase Equilibrium (VLE)", "Mass & Energy Balance Calculations", "Thermal Rating of Heat Exchangers"]
  },
  {
    category: "Automation Systems",
    items: ["Programmable Logic Controller (PLC) architecture", "SCADA Integration & Real-time Telemetry Dashboarding", "Human-Machine Interface (HMI) screen designs", "Fail-safe Emergency Shutdown sequences"]
  },
  {
    category: "CAD Design & Drafting Tools",
    items: ["Revit 3D Modeling (BIM)", "AutoCAD Electrical Schematic maps", "SolidWorks Parametric part drafting", "Interference & structural stress analysis checks"]
  }
];

export const exportReadiness = [
  { title: "ISO-Compliant Manufacturing", description: "All machining and fabrication procedures are aligned with strict quality-management system guides ensuring repeatable tolerances." },
  { title: "Comprehensive Quality Auditing", description: "Providing authentic Mill Test Certificates (MTC), non-destructive testing (NDT), ultrasound inspection, and compliance logs." },
  { title: "Traceability & Component Cataloging", description: "Component assemblies marked with unique serial number tracking, cataloged with individual drawings for easy replacements." },
  { title: "Export-Grade Seaworthy Pack", description: "Heavy crates built with international ISPM-15 anti-insect wooden pallets, desiccant locks, and seaworthy rust preventive coats." },
  { title: "Global Transit & Supply Network", description: "Broad experience in seamless customs clearance documents, partnering with premium marine and air shippers to OEM yards." }
];
