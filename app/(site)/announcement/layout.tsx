export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="lg:w-subpage-main flex flex-auto flex-col">
        {/* Main */}
        <section className="prose mt-6">{children}</section>
      </div>
    </>
  );
}
