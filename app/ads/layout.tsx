import MobileSearchFilter from '@/app/components/searchFilter/mobileSearchFilter';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <aside className="md:hidden">
        <MobileSearchFilter />
      </aside>
      {children}
    </section>
  );
}

export default Layout;
