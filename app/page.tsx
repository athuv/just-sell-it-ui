import PostAdandJob from '@/app/(home)/PostAdandJob';
import Quicklinks from '@/app/(home)/Quicklinks';
import CategoryBrowserComponent from '@/app/components/category-browser/CategoryBrowserComponent';
import SearchComponent from '@/app/components/search-component/SearchComponent';

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-secondaryBg pb-4">
      <SearchComponent />
      <CategoryBrowserComponent />
      <PostAdandJob />
      <Quicklinks />
    </main>
  );
}
