export default function Layout({ children, params }: { children: React.ReactNode; params: any }) {
  return (
    <div className="flex flex-row pb-20">
      <section className="">{children}</section>
    </div>
  );
}
