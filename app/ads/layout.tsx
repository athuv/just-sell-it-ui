import MobileSearchFilter from '@/app/components/searchFilter/mobileSearchFilter';
import ItemCard from '@/app/components/ItemCard/ItemCard';
import Pagination from '@/app/components/pagination/pagination';
import React from 'react';
import BreadcrumbsAds from '@/app/components/breadcrumbs/breadcrumbsAds';
import CategoryListing from '@/app/components/categoryBrowser/categoryListing';
import DesktopSearchFilter from '@/app/components/searchFilter/desktopSearchFilter';
import DesktopFilterResult from '@/app/components/searchFilter/desktopFilterResult';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pb-4">
      <aside className="lg:hidden">
        <MobileSearchFilter />
      </aside>
      <section className="lg:mx-40 lg:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <aside>
          <div className="lg:mt-8 lg:grid lg:grid-cols-4 lg:grid-rows-[65px]">
            <div className="hidden lg:col-span-4 lg:block">
              <DesktopSearchFilter />
            </div>
            <div className="hidden lg:row-start-2 lg:block">
              <div className="p-4">
                <DesktopFilterResult />
              </div>
            </div>
            <div className="lg:col-span-3 lg:row-start-2 lg:p-4">
              <div className="hidden lg:block ">
                <BreadcrumbsAds />
              </div>
              {children}
              <div className="flex flex-col gap-4">
                <ItemCard />
                <ItemCard />
              </div>
              <Pagination />
            </div>
          </div>
        </aside>
      </section>

      <section className="p-4 lg:hidden">
        <BreadcrumbsAds />
      </section>

      <section className="lg:px-40 lg:pt-8">
        <CategoryListing />
      </section>
    </main>
  );
}

export default Layout;
