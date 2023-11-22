import SubMenu from '../_components/submenu';
import Breadcrumb from '../_components/breadcrumb';
import MeditationsList from './_components/meditationsList';

export default async function Page() {
  return (
    <div className="flex flex-row pb-20">
      {/* Two Column Layout */}
      <div className="hidden pr-6 lg:flex lg:w-56 lg:flex-col">
        <section className="border-b border-gray-300 pb-2">
          {/* Current Section Title */}
          <h2 className="py-2">말씀</h2>
        </section>
        {/* Subsection menu */}
        <SubMenu />
      </div>
      <div className="flex w-full flex-auto flex-col px-4 lg:w-subpage-main">
        {/* breadcrumb */}
        <Breadcrumb />
        {/* Main */}
        <section className="prose mt-6 lg:mt-0">
          <h1>묵상</h1>
          <MeditationsList />
        </section>
      </div>
    </div>
  );
}
