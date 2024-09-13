/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconDumpling, IconUsb } from "@tabler/icons-react";
import {
  Lock,
  Bluetooth,
  Battery,
  Thermometer,
  Scale,
  Zap,
  Hexagon,
  Chrome,
  ShieldCheck,
  Ruler,
  Droplet,
  Smartphone,
  BatteryFull,
} from "lucide-react";

const SpecItem = ({ icon, title, description }: any) => (
  <div className="flex items-center p-4  rounded-lg">
    {icon}
    <div className="ml-3">
      <h3 className="font-bold text-sm">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const ProductSpecs = () => {
  const specs = [
    {
      icon: <Lock className="w-8 h-8 text-primary1" />,
      title: "LOCK & SHACKLE STATUS",
      description: "Open | Close | Tamper",
    },
    {
      icon: <Bluetooth className="w-8 h-8 text-primary1" />,
      title: "BLUETOOTH",
      description: "AES 256 bit encryption",
    },
    {
      icon: <BatteryFull className="w-8 h-8 text-primary1" />,
      title: "BATTERY TYPE / LIFE",
      description: "CR2 / 18+ months",
    },
    {
      icon: <Thermometer className="w-8 h-8 text-primary1" />,
      title: "OPERATING TEMPERATURE",
      description: "-20 C to 65 C",
    },
    {
      icon: <Scale className="w-8 h-8 text-primary1" />,
      title: "WEIGHT",
      description: "780gms",
    },
    {
      icon: <IconUsb className="w-8 h-8 text-primary1" />,
      title: "JUMP START",
      description: "USB C Port for External Power",
    },
    {
      icon: <Hexagon className="w-8 h-8 text-primary1" />,
      title: "SHACKLE MATERIAL",
      description: "Hardened Boron Steel",
    },
    {
      icon: <IconDumpling className="w-8 h-8 text-primary1" />,
      title: "PLATING",
      description: "Chrome Plating",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary1" />,
      title: "IP RATING",
      description: "IP65",
    },
    {
      icon: <Ruler className="w-8 h-8 text-primary1" />,
      title: "SHACKLE THICKNESS",
      description: "8mm / 10mm Steel Shackle",
    },
    {
      icon: <Droplet className="w-8 h-8 text-primary1" />,
      title: "HUMIDITY",
      description: "0 - 95% RH",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary1" />,
      title: "MOBILE APP",
      description: "iOS / Android",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {specs.map((spec, index) => (
          <SpecItem
            key={index}
            icon={spec.icon}
            title={spec.title}
            description={spec.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSpecs;
