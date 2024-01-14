import Link from 'next/link';

function AreaContent() {
  return (
    <ul className="p-4 text-quaternary">
      <Link href="/?area=Kandy" role="button" key="1">
        ABCDE
      </Link>
    </ul>
  );
}

export default AreaContent;
