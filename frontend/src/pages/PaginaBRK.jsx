import { useEffect } from "react";

export default function PaginaBRK() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Login - Minha BRK";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <iframe
      data-testid="pagina-brk-frame"
      src="/paginabrk.html"
      title="Minha BRK"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}
