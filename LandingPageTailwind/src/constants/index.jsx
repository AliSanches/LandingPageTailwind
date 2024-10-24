import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navigations = [
  { label: "Inicio", href: "#" },
  { label: "Serviços", href: "#" },
  { label: "Estrutura", href: "#" },
  { label: "Valores", href: "#" },
  { label: "Contatos", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Interfaces Intuitivas",
    description:
      "Trazendo modernidade e interações com o usuário desperta interece e curiosidade aos seus clientes.",
  },
  {
    icon: <Fingerprint />,
    text: "Compatibilidade em Multiplataformas",
    description:
      "Sistemas e sites que são acessiveis de todos os dispositivos do mundo eleva sua empresa para outro patamar.",
  },
  {
    icon: <ShieldHalf />,
    text: "Layouts Variados",
    description:
      "Explore uma ampla gama de layouts personalizáveis que permitem adaptar o design do seu projeto às suas necessidades, garantindo uma apresentação visual única e atraente.",
  },
  {
    icon: <BatteryCharging />,
    text: "Infraestrutura",
    description:
      "Estabeleça uma base sólida para seu negócio com uma infraestrutura robusta que suporta operações eficientes, garante segurança e facilita o crescimento escalável.",
  },
  {
    icon: <PlugZap />,
    text: "Servidores em Nuvem",
    description:
      "Otimize sua infraestrutura com servidores em nuvem que oferecem escalabilidade, flexibilidade e segurança, permitindo acesso a recursos de computação a qualquer hora e de qualquer lugar.",
  },
  {
    icon: <GlobeLock />,
    text: "Análises e Dashboards",
    description:
      "Transforme dados em insights com dashboards interativos que permitem visualizar informações de forma clara e dinâmica, facilitando a tomada de decisões estratégicas.",
  },
];

export const checklistItems = [
  {
    title: "Definição de Requisitos",
    description:
      "Realizaremos uma reunião para entender as necessidades e objetivos do cliente, alinhando expectativas desde o início.",
  },
  {
    title: "Metodologia Ágil",
    description:
      "Utilizaremos uma abordagem ágil, como Scrum, para permitir adaptações rápidas durante o desenvolvimento, garantindo maior flexibilidade e colaboração.",
  },
  {
    title: "Feedback Regular",
    description:
      "Implementamos ciclos de feedback com o cliente durante o processo, facilitando ajustes rápidos e alinhamento.",
  },
  {
    title: "Testes Rigorosos:",
    description:
      "Realizamos testes de usabilidade e compatibilidade antes do lançamento para garantir uma experiência positiva ao usuário.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "R$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "R$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "R$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
