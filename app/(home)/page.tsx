import PostAdandJob from '@/app/(home)/postAdandJob';
import Quicklinks from '@/app/(home)/quicklinks';
import CategoryBrowserComponent from '@/app/components/categoryBrowser/categoryBrowserComponent';
import Modal from '@/app/components/popup/modal';
import SearchComponent from '@/app/components/searchComponent/searchComponent';

export default function Home({
  searchParams,
}: {
  searchParams: {
    showLocation: string | undefined;
    district: string | undefined;
    area: string | undefined;
  };
}) {
  const showLocation = searchParams?.showLocation === 'true';

  return (
    <main className="flex min-h-screen flex-col items-center bg-secondaryBg pb-4">
      {showLocation && <Modal district={searchParams?.district} />}
      <SearchComponent area={searchParams?.area} />
      <CategoryBrowserComponent />
      <PostAdandJob />
      <Quicklinks />
    </main>
  );
}
