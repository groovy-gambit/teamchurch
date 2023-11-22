export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-auto flex-col px-4 lg:w-subpage-main">
      {/* Main */}
      <section className="prose mt-6">{children}</section>
    </div>
  );
}
