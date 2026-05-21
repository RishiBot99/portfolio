export function Footer() {
  return (
    <footer className="py-8 bg-amber-900 text-amber-100 text-center border-t-4 border-cyan-500">
      <p className="text-sm font-fixedsys">
        © {new Date().getFullYear()} Your Name. Built with React & Tailwind CSS
      </p>
      <p className="text-xs mt-2 text-amber-300 font-bodega">
        Designed and developed with passion for engineering
      </p>
    </footer>
  );
}
