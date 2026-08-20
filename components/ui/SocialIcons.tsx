import { contactInfo, socialLinks } from "@/constants";
import { GitHubIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types";

type SocialIconsProps = {
  links?: SocialLink[];
  className?: string;
  iconClassName?: string;
};

export function SocialIcons({
  links = socialLinks,
  className,
  iconClassName,
}: SocialIconsProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={cn(
            /* Light: white/glass background, primary-tinted border, primary icon, glow on hover */
            "inline-flex h-10 w-10 items-center justify-center rounded-lg",
            "border border-primary/20 bg-white/70 text-primary shadow-sm backdrop-blur-sm",
            "transition-all duration-200",
            "hover:border-primary/50 hover:bg-primary/8 hover:shadow-[0_4px_14px_rgba(37,99,235,0.22)] hover:scale-105",
            /* Dark: standard token look */
            "dark:border-border dark:bg-card dark:text-muted-foreground dark:shadow-none",
            "dark:hover:border-border dark:hover:bg-muted dark:hover:text-foreground dark:hover:shadow-none dark:hover:scale-100",
            iconClassName
          )}
        >
          <GitHubIcon className="h-4 w-4" />
        </a>
      ))}
      <span className="sr-only">Contact: {contactInfo.email}</span>
    </div>
  );
}
