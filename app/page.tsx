import PostAdandJob from '@/app/(home)/postAdandJob';
import Quicklinks from '@/app/(home)/quicklinks';
import CategoryBrowserComponent from '@/app/components/categoryBrowser/categoryBrowserComponent';
import SearchComponent from '@/app/components/searchComponent/searchComponent';

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
