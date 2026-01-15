import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { socialLinks } from "@/data/portfolio-data";
import { WhatsAppIcon } from "../icons/WhatsappIcon";

export default function FloatingNav() {
  const links = [
    { name: "WhatsApp", href: socialLinks.whatsapp, icon: <WhatsAppIcon className="h-6 w-6" /> },
    { name: "GitHub", href: socialLinks.github, icon: <Github className="h-6 w-6" /> },
    { name: "LinkedIn", href: socialLinks.linkedin, icon: <Linkedin className="h-6 w-6" /> },
  ];

  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-3 z-50">
      <TooltipProvider>
        {links.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <Button asChild variant="secondary" size="icon" className="rounded-full w-12 h-12 shadow-lg">
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}
