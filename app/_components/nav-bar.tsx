"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav
      className="flex flex-col items-center justify-center border-b border-solid px-6 py-8 lg:flex-row lg:px-12 lg:py-6"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="flex items-center justify-center gap-8 lg:gap-12">
        <Link
          href="/"
          className={`rounded text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:text-xl ${
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-current={pathname === "/" ? "page" : undefined}
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={`rounded text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:text-xl ${
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-current={pathname === "/transactions" ? "page" : undefined}
        >
          Transações
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
