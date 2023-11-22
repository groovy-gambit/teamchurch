import SubMenu from '../_components/submenu';
import Breadcrumb from '../_components/breadcrumb';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row pb-20">
      {/* Two Column Layout */}
      <div className="hidden  pr-6 lg:flex lg:w-56 lg:flex-col">
        <section className="border-b border-gray-300 pb-2">
          {/* Current Section Title */}
          <h2 className="py-2">말씀</h2>
        </section>
        {/* Subsection menu */}
        <SubMenu />
      </div>
      <div className="flex flex-auto flex-col px-4 lg:w-subpage-main">
        {/* breadcrumb */}
        <Breadcrumb />
        {/* Main */}
        <section className="prose mt-6 lg:mt-0">{children}</section>
      </div>
    </div>
  );
}
