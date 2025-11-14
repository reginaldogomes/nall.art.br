export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-b border-zinc-800 bg-background/50 py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} DJ em Pirapora –{" "}
          <span className="font-semibold text-cyan-400">NALL</span>. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
