import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-transparent.png";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="The Nautilus at CaSoBē — Home"
      className={cn(
        "inline-flex shrink-0 rounded-sm px-2 py-1.5 transition-colors",
        className,
      )}
    >
      <img
        src={logo}
        alt=""
        width={500}
        height={202}
        className="h-10 w-auto object-contain sm:h-12"
      />
    </Link>
  );
}
