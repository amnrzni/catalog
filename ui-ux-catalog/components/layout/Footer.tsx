export default function Footer() {
  return (
    <footer style={{ 
      color: "var(--muted)", 
      fontSize: "13px", 
      padding: "50px 0" 
    }}>
      <div className="container" style={{ textAlign: "center" }}>
        <p>
          © {new Date().getFullYear()} Catalog · Built with Next.js 16, React 19, Tailwind 4
        </p>
      </div>
    </footer>
  );
}
