import HomeSearchbar from '@/app/components/searchbar/homeSearchbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-primaryBg  px-4 ">
      <HomeSearchbar />
      <section>Contents</section>
    </main>
  );
}
