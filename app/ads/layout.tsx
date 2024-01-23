import MobileSearchFilter from '@/app/components/searchFilter/mobileSearchFilter';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pb-4">
      <aside className="md:hidden">
        <MobileSearchFilter />
      </aside>
      {children}
    </main>
  );
}

export default Layout;
