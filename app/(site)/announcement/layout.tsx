export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex flex-auto flex-col px-4 md:px-10 lg:w-subpage-main lg:max-w-screen-lg">
      {/* Main */}
      <section className="prose mt-6">{children}</section>
    </div>
  );
}
