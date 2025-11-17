"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-center justify-center border-b border-solid px-6 py-8 lg:flex-row lg:px-12 lg:py-6">
      <div className="flex items-center justify-center gap-8 lg:gap-12">
        <Link
          href="/"
          className={`text-base lg:text-xl ${
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }`}
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={`text-base lg:text-xl ${
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }`}
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={`text-base lg:text-xl ${
            pathname === "/subscription"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }`}
        >
          Assinatura
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
