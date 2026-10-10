// src/data/interests.ts
import { Zap, Cpu, Rocket, Camera } from "lucide-react";

export interface Interest {
  id: string;
  title: string;
  icon: any; 
  description: string;      // Short text for the card
  fullContent: string;      // Long text for the detail page
  color: string;            // Gradient classes
  images: string[];         // Gallery photos
}

export const interests: Interest[] = [
  {
    id: "embedded-systems",
    title: "Embedded Systems",
    icon: Cpu,
    description: "Microcontroller projects and real-time systems.",
    fullContent: "I love the intersection of software and hardware. Whether it's RPI5 on an ESP32 or bare-metal C on an STM32, I find the constraints of embedded environments fascinating.",
    color: "from-cyan-500 to-teal-600",
    images: ["/images/embedded-1.jpg"]
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy",
    icon: Zap,
    description: "Solar panel optimization and energy storage systems.",
    fullContent: "My interest in renewables stems from the challenge of grid integration. I spend time researching battery management systems (BMS) and how decentralized power can stabilize modern infrastructure.",
    color: "from-amber-600 to-orange-500",
    images: ["/images/solar-1.jpg"] 
  },
  {
    id: "space-tech",
    title: "Space Technology",
    icon: Rocket,
    description: "Satellite systems and aerospace electronics.",
    fullContent: "Aerospace grade electronics require extreme reliability. I follow developments in CubeSat communications and radiation-hardened circuitry.",
    color: "from-red-500 to-orange-600",
    images: ["/images/space-1.jpg"]
  },
  {
    id: "photography",
    title: "Photography",
    icon: Camera,
    description: "Landscape and portrait photography.",
    fullContent: "I enjoy capturing moments through the lens. My approach focuses on composition and lighting to create compelling images.",
    color: "from-purple-500 to-pink-500",
    images: ["/images/photography-1.jpg"]
  },


];