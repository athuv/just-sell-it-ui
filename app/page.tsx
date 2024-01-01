import CategoryBrowserComponent from '@/app/components/categoryBrowser/categoryBrowserComponent';
import SearchComponent from '@/app/components/searchComponent/searchComponent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-secondaryBg">
      <section className="w-full">
        <SearchComponent />
      </section>
      <CategoryBrowserComponent />
    </main>
  );
}
