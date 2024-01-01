import SearchComponent from '@/app/components/searchComponent/searchComponent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-primaryBg  ">
      <section className="w-full">
        <SearchComponent />
      </section>
      <section className="px-4 ">Contents</section>
    </main>
  );
}
