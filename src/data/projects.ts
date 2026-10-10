// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string; 
  fullDescription: string; 
  tags: string[];
  tools: string[]; 
  image: string;    // This is for the card background (gradient)
  images: string[]; // ADD THIS: This is for the gallery (actual photos)
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "digital-camera",
    title: "IEEE Digital Camera Project",
    description: "Full Camera with LCD screen, ESP32 Cam Module and Buck Converter. WiFi-enabled image transmission.",
    fullDescription: "Designed a cost-effective digital camera under $50...",
    tags: ["Product", "ESP32", "Arduino IDE", "Circuit Design"],
    tools: ["ESP32-CAM", "ILI9341 LCD", "LM2596 Buck Converter", "Embedded C++"],
    image: "bg-gradient-to-br from-cyan-500 to-teal-600",
    images: ["/images/camera-1.jpg", "/images/camera-2.jpg"], // Add image paths here
    github: "https://github.com/RishiBot99/DigiCam-Project-Files",
    demo: "#"
  },
  {
    id: "vitaledger",
    title: "VitaLedger: Hardware Oracle",
    description: "IoT device using Raspberry-Pi 5 to control XRPL escrow transactions...",
    fullDescription: "Created a bridge between physical reality and the XRP Ledger...",
    tags: ["IoT", "Blockchain", "Python", "XRPL"],
    tools: ["Raspberry Pi 5", "Python", "XRP Ledger SDK", "Digital Sensors"],
    image: "bg-gradient-to-br from-amber-600 to-orange-600",
    images: ["/images/vitaledger-1.jpg"],
    github: "https://github.com/RishiBot99/Vital-Ledger",
    demo: "https://devpost.com/software/vitaledger#updates"
  },
  {
    id: "tesla-coil",
    title: "Tesla Coil Creation & Testing",
    description: "Design and construction of a Solid State Tesla Coil (SSTC)...",
    fullDescription: "Engineered a Solid State Tesla Coil capable of generating 4-inch plasma arcs...",
    tags: ["High Voltage", "Power Electronics", "Analog Design"],
    tools: ["IGBTs", "Gate Driver Circuits", "Copper Winding", "Oscilloscopes"],
    image: "bg-gradient-to-br from-yellow-500 to-orange-500",
    images: ["/images/tesla-1.jpg", "/images/tesla-2.jpg"]
  },
  {
    id: "solar-ebike",
    title: "IEEE Solar E-Bike Project",
    description: "Integration of solar charging capabilities into an electric bicycle...",
    fullDescription: "Led a team to integrate flexible solar panels into an e-bike frame...",
    tags: ["Renewable Energy", "E-Mobility", "Power Systems"],
    tools: ["MPPT Controllers", "Flexible Solar Cells", "Li-ion Battery Management", "CAD"],
    image: "bg-gradient-to-br from-red-500 to-orange-600",
    images: ["/images/ebike-1.jpg"]
  }
];