import SubMenu from './_components/submenu';
import Breadcrumb from './_components/breadcrumb';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex flex-row px-0 pb-20 md:px-10 lg:max-w-screen-lg">
      {/* Two Column Layout */}
      <div className="hidden  pr-6 lg:flex lg:w-56 lg:flex-col">
        <section className="border-b border-gray-300 pb-2">
          {/* Current Section Title */}
          <h2 className="py-2">교육</h2>
        </section>
        {/* Subsection menu */}
        <SubMenu />
      </div>
      <div className="flex flex-auto flex-col lg:w-subpage-main">
        {/* breadcrumb */}
        <Breadcrumb />
        {/* Main */}
        <section className="prose">{children}</section>
      </div>
    </div>
  );
}
