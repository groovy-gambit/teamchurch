import { ChevronRightIcon } from '@heroicons/react/24/solid';

import Header from '@/components/ui/header';
import SubMenu from './_components/submenu';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="align-center flex min-h-screen flex-col items-center 
                  justify-between bg-white align-top"
    >
      <div className="mx-auto h-96 px-0 lg:container">
        <Header />
        <div className="flex flex-row pb-20">
          {/* Two Column Layout */}
          <div className="hidden  pr-6 lg:flex lg:w-56 lg:flex-col">
            <section className="border-b border-gray-300 pb-2">
              {/* Current Section Title */}
              <h2 className="py-2">소개</h2>
            </section>
            <section>
              {/* Subsection menu */}
              <SubMenu />
            </section>
          </div>
          <div className="lg:w-subpage-main flex flex-auto flex-col">
            {/* breadcrumb */}
            <section className="flex flex-row py-2">
              <span className="mr-2">소개</span>
              <ChevronRightIcon className="mr-2 h-6 w-4 font-bold" />
              <span className="mr-2 font-bold">교회 안내</span>
            </section>
            {/* Main */}
            <section className="prose mt-6">{children}</section>
          </div>
        </div>
      </div>
    </main>
  );
}
