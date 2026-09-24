import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

/** Persistent mobile inquiry bar. Hidden on the Inquire page itself. */
export function StickyInquire() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/inquire") return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
      <Button asChild variant="coral" size="lg" className="w-full">
        <Link to="/inquire">Request Project Details</Link>
      </Button>
    </div>
  );
}
