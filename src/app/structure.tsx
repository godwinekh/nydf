export default function Structure({ children }: { children: React.ReactNode }) {
  return (
    <main
      id="home"
      className="flex flex-col min-h-screen items-center overflow-hidden"
    >
      {children}
    </main>
  );
}
