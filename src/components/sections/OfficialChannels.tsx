import { SectionHeading } from "@/components/ui/SectionHeading";
import { hospitalData } from "@/data/hospitalData";
import { MapPin, BookOpen, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

type IconComponent = LucideIcon | typeof InstagramIcon;

interface ChannelConfig {
  name: string;
  description: string;
  url: string;
  icon: IconComponent;
  iconBg: string;
  iconColor: string;
  borderHover: string;
}

export function OfficialChannels() {
  const channels: ChannelConfig[] = [
    {
      ...hospitalData.channels[0],
      icon: MapPin,
      iconBg: "bg-[#03C75A]/10",
      iconColor: "text-[#03C75A]",
      borderHover: "hover:border-[#03C75A]/40",
    },
    {
      ...hospitalData.channels[1],
      icon: BookOpen,
      iconBg: "bg-[#03C75A]/10",
      iconColor: "text-[#03C75A]",
      borderHover: "hover:border-[#03C75A]/40",
    },
    {
      ...hospitalData.channels[2],
      icon: MessageCircle,
      iconBg: "bg-[#FEE500]/15",
      iconColor: "text-[#3C1E1E]",
      borderHover: "hover:border-[#FEE500]/60",
    },
    {
      ...hospitalData.channels[3],
      icon: InstagramIcon,
      iconBg: "bg-pink-50",
      iconColor: "text-pink-500",
      borderHover: "hover:border-pink-300",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <SectionHeading
          title="라비온 공식 채널"
          subtitle="라비온 동물의료센터와 다양한 채널을 통해 소통하실 수 있습니다."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map((ch) => (
            <a
              key={ch.name}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-all duration-300 ${ch.borderHover}`}
            >
              <div className={`w-12 h-12 rounded-xl ${ch.iconBg} ${ch.iconColor} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                <ch.icon className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-sm text-[var(--color-primary-blue)] mb-0.5 truncate">
                  {ch.name}
                </h3>
                <p className="text-xs text-gray-500 font-medium truncate">
                  {ch.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
