export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex flex-auto flex-col px-0 md:px-10  lg:max-w-screen-lg">
      {/* Main */}
      <section className="prose mt-6">{children}</section>
    </div>
  );
}
