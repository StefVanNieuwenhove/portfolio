import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { social } from "@/data/social";
import { cn } from "@/lib/utils";

export function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button variant="outline" size="icon" asChild>
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={`mailto:${social.email}`} aria-label="Email">
          <Mail />
        </a>
      </Button>
    </div>
  );
}
