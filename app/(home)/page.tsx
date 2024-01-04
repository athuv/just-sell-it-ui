import PostAdandJob from '@/app/(home)/postAdandJob';
import Quicklinks from '@/app/(home)/quicklinks';
import CategoryBrowserComponent from '@/app/components/categoryBrowser/categoryBrowserComponent';
import SearchComponent from '@/app/components/searchComponent/searchComponent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-secondaryBg pb-4">
      <section className="w-full">
        <SearchComponent />
      </section>
      <CategoryBrowserComponent />
      <PostAdandJob />
      <Quicklinks />
    </main>
  );
}
