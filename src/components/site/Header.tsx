import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { nav } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent py-5"
          : "bg-background/92 py-3 shadow-soft backdrop-blur-md supports-[backdrop-filter]:bg-background/85",
      )}
    >
      <div className="container-site flex items-center justify-between">
        <Logo light={transparent} />

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={cn(
                "relative font-heading text-[0.7rem] font-semibold uppercase tracking-[0.24em] transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-coral after:transition-all after:duration-300 hover:after:w-full",
                transparent
                  ? "text-on-image/85 hover:text-on-image"
                  : "text-foreground/75 hover:text-foreground",
              )}
              activeProps={{
                className: cn("after:w-full", transparent ? "text-on-image" : "text-foreground"),
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant={transparent ? "outline-light" : "coral"} className="hidden sm:inline-flex">
            <Link to="/inquire">Inquire</Link>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-sm transition-colors lg:hidden",
              transparent ? "text-on-image hover:bg-on-image/10" : "text-foreground hover:bg-accent",
            )}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 top-[72px] z-40 flex flex-col bg-background transition-all duration-400 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="container-site flex flex-1 flex-col gap-1 pt-8">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="border-b border-border py-5 font-heading text-lg font-light uppercase tracking-[0.2em] text-foreground"
              activeProps={{ className: "text-primary" }}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/inquire"
            className="border-b border-border py-5 font-heading text-lg font-semibold uppercase tracking-[0.2em] text-coral"
          >
            Inquire
          </Link>
        </nav>
        <div className="container-site pb-10">
          <Button asChild variant="coral" size="xl" className="w-full">
            <Link to="/inquire">Request Project Details</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
