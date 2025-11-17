"use client";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Dashboard Financeiro.
          </p>
          <p className="text-center md:text-right">
            Desenvolvido por{" "}
            <span className="font-semibold text-foreground">Wendryus Lima</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
