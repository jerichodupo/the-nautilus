import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { disclaimer, nav, site } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-gunmetal text-gunmetal-foreground">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-gunmetal-foreground/70">
            Luxury beachfront residences within CaSoBē, a master-planned seaside community in
            Calatagan, Batangas. Own a place where the horizon becomes home.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="eyebrow text-sand">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-gunmetal-foreground/80 transition-colors hover:text-gunmetal-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/inquire" className="text-coral transition-colors hover:text-coral/80">
                Inquire
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="eyebrow text-sand">Location</h3>
          <ul className="mt-5 space-y-4 text-sm text-gunmetal-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sand" aria-hidden />
              <span>{site.contact.address}</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="eyebrow text-sand">Developer</h3>
          <p className="mt-5 text-sm leading-relaxed text-gunmetal-foreground/80">
            <span className="font-semibold text-gunmetal-foreground">{site.developer}</span>
            <br />
            Over three decades of creating leisure and lifestyle destinations across the
            Philippines. Rental program by {site.operator}, subject to program terms.
          </p>
        </div>
      </div>

      <div className="border-t border-gunmetal-foreground/10">
        <div className="container-site py-8">
          <p id="disclaimer" className="max-w-5xl text-xs leading-relaxed text-gunmetal-foreground/50">{disclaimer}</p>
          <div className="mt-6 flex flex-col gap-3 text-xs text-gunmetal-foreground/60 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.fullName}. All rights reserved.
            </p>
            <p id="privacy">Inquiry details are used only to respond to the sender.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
