export default function PaginaBRK() {
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
