import MobileSearchFilter from '@/app/components/searchFilter/mobileSearchFilter';
import AdCard from '@/app/components/AdCard/ItemCard';
import Pagination from '@/app/components/pagination/pagination';
import React from 'react';
import BreadcrumbsAds from '@/app/components/breadcrumbs/breadcrumbsAds';
import CategoryListing from '@/app/components/categoryBrowser/categoryListing';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pb-4">
      <aside className="md:hidden">
        <MobileSearchFilter />
      </aside>
      <aside>{children}</aside>
      <aside className="flex flex-col gap-4">
        <AdCard />
        <AdCard />
      </aside>
      <Pagination />
      <BreadcrumbsAds />
      <CategoryListing />
    </main>
  );
}

export default Layout;
